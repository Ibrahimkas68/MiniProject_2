import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions bg-slate-900 text-text py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">Terms and Conditions</h1>
          <p className="text-lg text-text-muted">Effective Date: [Insert Date]</p>
        </header>

        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
          <p>
            Welcome to Royal Air Maroc. These Terms and Conditions govern your use of our website, services, and bookings. 
            By accessing or using our website and services, you agree to comply with these Terms. Please read them carefully.
          </p>
        </section>

        {/* Definitions Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Definitions</h2>
          <p><strong>"Royal Air Maroc"</strong>: Refers to the national airline of Morocco, including its affiliates and subsidiaries.</p>
          <p><strong>"User"</strong>: Refers to any individual or entity accessing or using the website, services, or products provided by Royal Air Maroc.</p>
          <p><strong>"Services"</strong>: Refers to the flight booking services, travel services, and all other related services offered by Royal Air Maroc.</p>
        </section>

        {/* Acceptance of Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Acceptance of Terms</h2>
          <p>
            By accessing or using Royal Air Maroc's services, you confirm that you have read, understood, and agree to these Terms and Conditions. 
            If you do not agree with these terms, you must stop using our website and services immediately.
          </p>
        </section>

        {/* Modifications Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Modifications to Terms</h2>
          <p>
            Royal Air Maroc reserves the right to modify or update these Terms and Conditions at any time. Any changes will be posted on 
            this page, and your continued use of the website after such changes constitutes acceptance of the new Terms.
          </p>
        </section>

        {/* User Responsibilities Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">5. User Responsibilities</h2>
          <p>
            As a User, you agree to:
          </p>
          <ul className="list-disc pl-5">
            <li>Provide accurate and complete information when registering, booking, or interacting with our website.</li>
            <li>Comply with all applicable laws, including Law No. 09-08 on data protection in Morocco.</li>
            <li>Not engage in any activity that could harm, disrupt, or interfere with the services provided by Royal Air Maroc.</li>
            <li>Respect all intellectual property rights and not infringe on any copyrights, trademarks, or other proprietary rights.</li>
          </ul>
        </section>

        {/* Privacy Policy Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Privacy Policy</h2>
          <p>
            We respect your privacy. Please refer to our <Link to="/privacy-policy" className="text-primary font-semibold">Privacy Policy</Link> to understand how we collect, use, and protect your personal data.
          </p>
        </section>

        {/* Intellectual Property Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, images, logos, and software, are the property of Royal Air Maroc 
            or its licensors. You may not use, reproduce, or distribute any content without explicit permission.
          </p>
        </section>

        {/* Limitation of Liability Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
          <p>
            Royal Air Maroc is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability 
            to use our services. You agree to use our website at your own risk.
          </p>
        </section>

        {/* Governing Law Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">9. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of Morocco, specifically in accordance with the Moroccan Civil Code, 
            Law No. 09-08 on the Protection of Personal Data, and all other applicable regulations. Any disputes arising from the use of this website or services 
            will be resolved under the jurisdiction of the Moroccan courts.
          </p>
        </section>

        {/* Legal Information Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">10. Legal Information</h2>
          <p>
            Royal Air Maroc is a public company governed by the laws of Morocco. It is incorporated and regulated under Moroccan aviation law. 
            We operate in compliance with international aviation regulations and local regulations to provide safe and reliable air transport services.
          </p>
          <p><strong>Company Name</strong>: Royal Air Maroc (RAM)</p>
          <p><strong>Registered Address</strong>: [Insert the official address of RAM]</p>
          <p><strong>Company Registration Number</strong>: [Insert the company registration number]</p>
          <p><strong>VAT Number</strong>: [Insert VAT number, if applicable]</p>
        </section>

        {/* Security Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">11. Security</h2>
          <p>
            Royal Air Maroc takes the security of your personal information seriously. We implement reasonable security measures to protect 
            your data in accordance with Law No. 09-08 on the Protection of Personal Data. This includes using encryption technologies and 
            other technical means to prevent unauthorized access to your information.
          </p>
          <p>
            However, please note that no method of data transmission over the internet or electronic storage is 100% secure. While we strive 
            to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">12. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
          </p>
          <p>Email: <a href="mailto:info@royalairmaroc.com" className="text-primary">info@royalairmaroc.com</a></p>
          <p>Phone: +212 [Insert phone number]</p>
          <p>Address: [Insert physical address]</p>
        </section>

        {/* Footer Section */}
        <footer className="text-center mt-12">
          <p>&copy; [Year] Royal Air Maroc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;