import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page bg-background-lighter text-text py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Privacy Policy Header */}
        <h1 className="text-3xl font-bold mb-6 text-center text-rose-700">Privacy Policy</h1>

        {/* Introduction Section */}
        <div className="mb-8">
          <p className="text-lg text-text-muted">
            At Royal Air Maroc, we are committed to protecting your privacy. This Privacy Policy outlines the information we collect, how we use it, and the steps we take to ensure its protection.
          </p>
        </div>

        {/* Policy Details */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-text-muted">
              We collect various types of information in connection with the services we provide, including:
            </p>
            <ul className="list-disc pl-6 text-text-muted">
              <li>Personal information such as name, email, phone number, and address.</li>
              <li>Payment and transaction details when booking flights or purchasing services.</li>
              <li>Browsing data, such as IP address, device information, and location data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-text-muted">
              The information we collect is used to provide and improve our services. We may use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-text-muted">
              <li>Processing your bookings and transactions.</li>
              <li>Improving customer service and support.</li>
              <li>Sending important updates, notifications, and promotions.</li>
              <li>Personalizing your experience on our website and app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-text-muted">
              We take data security seriously and implement measures to protect your information from unauthorized access, alteration, or disclosure. These measures include encryption, secure servers, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p className="text-text-muted">
              We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-text-muted">
              <li>With service providers who assist in processing payments and providing customer support.</li>
              <li>With legal authorities when required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-text-muted">
              You have the right to access, correct, or delete your personal information. You can also opt-out of receiving promotional communications at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-text-muted">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
  <p className="text-lg text-text-muted">
    If you have any questions about this Privacy Policy or our data practices, please contact us.
  </p>
  <div className="flex flex-col items-center top-10"> {/* Added a flex container for vertical stacking */}
    <Link to="/contact" className="text-primary text-lg font-semibold hover:text-secondary py-2">
      Contact Us <ArrowRight className="h-6 w-6 text-primary mb-4" />
    </Link>
  </div>
</div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;