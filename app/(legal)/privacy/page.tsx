import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OliByte Software & AI Services collects, uses, and protects personal data.",
};

export default function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>Last updated: November 25, 2026</p>
      <p>
        OliByte Software &amp; AI Services (&quot;OliByte&quot;, &quot;we&quot;) is based in Las Piñas, Metro
        Manila, Philippines. This policy explains what personal information we collect through this website
        and our communication channels, and how we handle it under the Philippine Data Privacy Act of 2012
        (Republic Act No. 10173).
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          Information you submit through our contact form: your name, email address, contact number,
          message, and any file you attach. The form delivers it to our inbox by email; the website does not
          store it.
        </li>
        <li>
          Information you send us by email or Facebook Messenger, such as your name, email address, company,
          and project details.
        </li>
        <li>
          Basic technical data recorded by our hosting provider when you visit the site, such as IP address,
          browser type, and pages requested.
        </li>
      </ul>
      <p>This website has no user accounts, advertising trackers, or analytics cookies.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your inquiry and schedule meetings.</li>
        <li>To prepare proposals and deliver work you engage us for.</li>
        <li>To keep the website secure and running.</li>
      </ul>
      <p>We do not sell your personal information or use it for advertising.</p>

      <h2>Who we share it with</h2>
      <p>
        We share information only with service providers we need to operate, such as our website host
        (Vercel), our email provider (Google, through Gmail), and Meta for Messenger conversations, or when required by law. Client
        project data is handled under the terms of the written agreement for that engagement.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep inquiry messages for as long as needed to respond and follow up, and project records for as
        long as the engagement and applicable law require. You can ask us to delete your information at any
        time.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the Data Privacy Act you may ask to access, correct, or delete your personal information,
        object to its processing, or file a complaint with the National Privacy Commission. To make a
        request, email <a href="mailto:olibyte.systems@gmail.com">olibyte.systems@gmail.com</a>.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>
    </>
  );
}
