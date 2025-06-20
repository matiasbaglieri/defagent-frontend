import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";
import { FC } from "react";

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

const PolicySection: FC<PolicySectionProps> = ({ title, children }) => (
  <section>
    <h2 className="text-3xl font-bold text-cyan-300 mb-6 border-b border-cyan-400/20 pb-3">
      {title}
    </h2>
    <div className="prose prose-invert prose-lg max-w-none text-gray-300/90">
      {children}
    </div>
  </section>
);


export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              {t("privacy_title")}
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-cyan-400">{t("privacy_subtitle")}</h2>
            <div className="mt-6 text-sm text-gray-400">
              <p><strong>{t("privacy_effective_date")}:</strong> {t("privacy_effective_date_value")}</p>
              <p><strong>{t("privacy_last_updated")}:</strong> {t("privacy_last_updated_value")}</p>
            </div>
          </header>

          <main className="max-w-4xl mx-auto space-y-12">
            <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="font-semibold text-xl mb-2 text-white">{t("privacy_subtitle")}</h3>
              <address className="not-italic text-gray-400">
                5900 Balcones Drive, Suite 100<br />
                Austin, Texas 78731<br />
                <strong>{t("privacy_contact_email")}:</strong> privacy@defagent.ai<br />
                <strong>{t("privacy_contact_website")}:</strong> https://defagent.ai
              </address>
            </section>

            <PolicySection title={t("privacy_s1_title")}>
              <p>{t("privacy_s1_p1")}</p>
              <ul className="list-disc pl-6 my-4 space-y-1">
                <li>{t("privacy_s1_l1")}</li>
                <li>{t("privacy_s1_l2")}</li>
                <li>{t("privacy_s1_l3")}</li>
                <li>{t("privacy_s1_l4")}</li>
              </ul>
              <div className="bg-gray-900 p-4 rounded-lg my-4 border border-cyan-400/20">
                <h3 className="font-semibold mb-2 text-cyan-300">{t("privacy_s1_commitment_title")}</h3>
                <p>{t("privacy_s1_commitment_p")}</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-cyan-400/20">
                <h3 className="font-semibold mb-2 text-cyan-300">{t("privacy_s1_framework_title")}</h3>
                <p>{t("privacy_s1_framework_p")}</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>{t("privacy_s1_framework_l1")}</li>
                  <li>{t("privacy_s1_framework_l2")}</li>
                  <li>{t("privacy_s1_framework_l3")}</li>
                  <li>{t("privacy_s1_framework_l4")}</li>
                  <li>{t("privacy_s1_framework_l5")}</li>
                </ul>
              </div>
            </PolicySection>

            <PolicySection title={t("privacy_s2_title")}>
              <h3 className="text-xl font-semibold mb-3 mt-6 text-cyan-200">{t("privacy_s2_1_title")}</h3>
              <h4 className="font-semibold mb-2 text-cyan-100">{t("privacy_s2_1_h1")}</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>{t("privacy_s2_1_l1")}</li>
                <li>{t("privacy_s2_1_l2")}</li>
                <li>{t("privacy_s2_1_l3")}</li>
                <li>{t("privacy_s2_1_l4")}</li>
              </ul>
              <h4 className="font-semibold mb-2 text-cyan-100">{t("privacy_s2_1_h2")}</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>{t("privacy_s2_1_l5")}</li>
                <li>{t("privacy_s2_1_l6")}</li>
                <li>{t("privacy_s2_1_l7")}</li>
                <li>{t("privacy_s2_1_l8")}</li>
              </ul>
            </PolicySection>
            
            <PolicySection title={t("privacy_s15_title")}>
               <ul className="list-disc pl-6">
                <li><strong>{t("privacy_s15_l1_title")}:</strong> defagent.ai/privacy</li>
                <li><strong>{t("privacy_s15_l2_title")}:</strong> defagent.ai/security</li>
                <li><strong>{t("privacy_s15_l3_title")}:</strong> defagent.ai/compliance</li>
                <li><strong>{t("privacy_s15_l4_title")}:</strong> defagent.ai/privacy-request</li>
              </ul>
            </PolicySection>
          </main>

          <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p><strong>{t("privacy_footer_last_updated")}:</strong> {t("privacy_last_updated_value")}</p>
            <p><strong>{t("privacy_footer_next_review")}:</strong> {t("privacy_footer_next_review_value")}</p>
            <p className="mt-4 italic">{t("privacy_footer_p")}</p>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};