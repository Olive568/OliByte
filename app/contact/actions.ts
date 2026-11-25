"use server";

import nodemailer from "nodemailer";
import { EMAIL } from "../site";

export type ContactState = {
  ok?: boolean;
  error?: string;
  values?: { name: string; email: string; phone: string; message: string };
};

const MAX_FILE = 4 * 1024 * 1024;
const FILE_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

const text = (form: FormData, key: string, max: number) => String(form.get(key) ?? "").trim().slice(0, max);

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (text(form, "company_website", 200)) return { ok: true };

  const values = {
    name: text(form, "name", 120).replace(/[\r\n]+/g, " "),
    email: text(form, "email", 200),
    phone: text(form, "phone", 40),
    message: text(form, "message", 5000),
  };

  if (!values.name || !values.email || !values.phone || !values.message)
    return { error: "Please fill in every required field.", values };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    return { error: "Please enter a valid email address.", values };
  if (!/^[+\d][\d\s()-]{6,}$/.test(values.phone))
    return { error: "Please enter a valid contact number.", values };
  if (form.get("consent") !== "on")
    return { error: "Please agree to the Privacy Policy and Terms & Conditions.", values };

  const file = form.get("file");
  const attachments = [];
  if (file instanceof File && file.size > 0) {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!FILE_TYPES[ext]) return { error: "Only PDF and Word files are accepted.", values };
    if (file.size > MAX_FILE) return { error: "The file must be 4 MB or smaller.", values };
    attachments.push({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: FILE_TYPES[ext],
    });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("Contact form: GMAIL_USER or GMAIL_APP_PASSWORD is not set.");
    return { error: `The form is unavailable right now. Please email us at ${EMAIL}.`, values };
  }

  try {
    await nodemailer
      .createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user, pass } })
      .sendMail({
        from: { name: "OliByte Website", address: user },
        to: EMAIL,
        replyTo: { name: values.name, address: values.email },
        subject: `New inquiry from ${values.name}`,
        text: `Name: ${values.name}\nEmail: ${values.email}\nContact no.: ${values.phone}\n\n${values.message}`,
        attachments,
      });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return { error: `Sending failed. Please try again or email us at ${EMAIL}.`, values };
  }

  return { ok: true };
}
