import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the OliByte website and services.",
};

export default function Terms() {
  return (
    <>
      <h1>Terms &amp; Conditions</h1>
      <p>Last updated: November 25, 2026</p>
      <p>
        These terms cover your use of this website, operated by OliByte Software &amp; AI Services
        (&quot;OliByte&quot;, &quot;we&quot;) of Las Piñas, Metro Manila, Philippines. By using the site you
        agree to them.
      </p>

      <h2>Website content</h2>
      <p>
        The content on this site is general information about our services. It is not a binding offer or
        quote. Scope, price, timelines, and deliverables for any engagement are set only in a written
        proposal or agreement signed by both parties.
      </p>

      <h2>Client engagements</h2>
      <p>
        Paid work is governed by the agreement for that engagement. If that agreement conflicts with these
        terms, the agreement applies.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The OliByte name, logo, and site content belong to OliByte. Ownership of work we deliver to clients is
        set out in each client agreement.
      </p>

      <h2>Acceptable use</h2>
      <p>Do not use this site to break the law, interfere with its operation, or attempt unauthorized access.</p>

      <h2>Third-party links</h2>
      <p>
        Links to third-party services, such as Facebook Messenger, are provided for convenience. Their own
        terms and privacy policies apply.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The site is provided &quot;as is&quot;. To the extent allowed by law, OliByte is not liable for losses
        arising from your use of the site or reliance on its content.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Republic of the Philippines.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href="mailto:olibyte.systems@gmail.com">olibyte.systems@gmail.com</a>.
      </p>
    </>
  );
}
