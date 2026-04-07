import { Site } from "@/components/site";

export default function PrivacyPage() {
  return (
    <section aria-labelledby="priv-title">
      <div className="container" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="modal" style={{ maxWidth: 660, margin: "0 auto" }}>
          <h2 id="priv-title">Privacy Policy</h2>
          <p className="since">Last updated: 10th October 2025</p>
          <p>
            Optimize Works Ltd. (“we,” “our,” or “us”) is committed to protecting
            the privacy and security of your personal data.
          </p>
          <h3>1. Data Collection</h3>
          <ul>
            <li>
              <strong>Personal Data:</strong> Name, email, phone, company name,
              job title, and contact details.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, OS, pages
              visited, time on page.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> See the
              Cookies section below.
            </li>
          </ul>
          <h3>2. Use of Information</h3>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To improve our website and respond to enquiries.</li>
            <li>To send marketing communications per your preferences.</li>
            <li>
              To detect and address technical issues and comply with legal
              obligations.
            </li>
          </ul>
          <h3>3. Data Protection</h3>
          <p>
            We implement encryption, access controls, and regular security
            assessments to protect your personal data.
          </p>
          <h3>4. Cookies</h3>
          <p>
            We use Essential, Analytical, Functionality, and Marketing cookies.
            You may decline via browser settings.
          </p>
          <h3>5. Third-Party Services</h3>
          <p>
            Third-party processors are bound not to use your data for any other
            purpose.
          </p>
          <h3>6. Your Rights</h3>
          <p>
            You have rights of access, rectification, erasure, restriction,
            objection, and portability. Contact us to exercise these rights.
          </p>
          <h3>7. Contact</h3>
          <p>
            Email: <a href={`mailto:${Site.email}`}>{Site.email}</a>
            <br />
            Address: Optimize Works Ltd., Poole, England, United Kingdom
          </p>
          <h3>8. GDPR Compliance</h3>
          <p>
            We fully comply with GDPR (EU) 2016/679 and the Data Protection Act
            2018. Registered with the ICO.
          </p>
        </div>
      </div>
    </section>
  );
}

