import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">{t("terms.title")}</h1>
          <p className="text-muted-foreground mb-12">{t("terms.lastUpdated")}</p>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Loyaltea, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, you should 
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily access the materials on Loyaltea for personal, 
                non-commercial use only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or mirror on another server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Description</h2>
              <p className="leading-relaxed">
                Loyaltea provides a web-based customer loyalty platform that includes rewards 
                management, customer segmentation, email automation, marketing automation, QR 
                code scanning, gift management, and customization features. We reserve the right 
                to modify, suspend, or discontinue any part of our service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Accounts</h2>
              <p className="leading-relaxed">
                When you create an account with us, you must provide accurate, complete, and 
                current information. Failure to do so constitutes a breach of the Terms. You are 
                responsible for safeguarding the password and for all activities that occur under 
                your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
              <p className="leading-relaxed">
                Subscription fees are billed in advance on a monthly basis. All fees are 
                non-refundable except as required by law. We reserve the right to change our 
                pricing with 30 days notice. You can cancel your subscription at any time through 
                your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Privacy</h2>
              <p className="leading-relaxed">
                Your privacy is important to us. We collect and use your personal information in 
                accordance with our Privacy Policy. By using our service, you consent to such 
                processing and you warrant that all data provided by you is accurate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed">
                The service and its original content, features, and functionality are owned by 
                Loyaltea and are protected by international copyright, trademark, patent, trade 
                secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall Loyaltea or its suppliers be liable for any damages arising out 
                of the use or inability to use the materials on Loyaltea, even if authorized 
                representatives have been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach 
                the Terms. Upon termination, your right to use the service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of 
                any changes by posting the new Terms of Service on this page and updating the 
                "Last updated" date. Your continued use of the service after changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4 leading-relaxed">
                Email: legal@loyaltea.com<br />
                Address: 123 Business Street, San Francisco, CA 94102, United States
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
