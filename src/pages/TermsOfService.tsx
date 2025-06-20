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


export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              {t("terms_title")}
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-cyan-400">{t("terms_subtitle")}</h2>
            <div className="mt-6 text-sm text-gray-400">
              <p><strong>{t("terms_effective_date")}:</strong> {t("terms_effective_date_value")}</p>
              <p><strong>{t("terms_last_updated")}:</strong> {t("terms_last_updated_value")}</p>
            </div>
          </header>

          <main className="max-w-4xl mx-auto space-y-12">
            <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="font-semibold text-xl mb-2 text-white">{t("terms_subtitle")}</h3>
              <address className="not-italic text-gray-400">
                5900 Balcones Drive, Suite 100<br />
                Austin, Texas 78731<br />
                <strong>{t("terms_contact_email")}:</strong> legal@defagent.ai<br />
                <strong>{t("terms_contact_website")}:</strong> https://defagent.ai
              </address>
            </section>

            <PolicySection title={t("terms_s1_title")}>
              <p>{t("terms_s1_p1")}</p>
              <div className="bg-gray-900 p-4 rounded-lg my-4 border border-cyan-400/20">
                <h3 className="font-semibold mb-2 text-cyan-300">{t("terms_s1_conditions_title")}</h3>
                 <ul className="list-disc pl-6">
                  <li>{t("terms_s1_l1")}</li>
                  <li>{t("terms_s1_l2")}</li>
                  <li>{t("terms_s1_l3")}</li>
                  <li>{t("terms_s1_l4")}</li>
                </ul>
              </div>
            </PolicySection>

            <PolicySection title={t("terms_s2_title")}>
              <p>{t("terms_s2_p1")}</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-cyan-400/20">
                  <h3 className="font-semibold mb-2 text-cyan-300">{t("terms_s2_offerings_title")}</h3>
                  <ul className="list-disc pl-6">
                    <li>{t("terms_s2_l1")}</li>
                    <li>{t("terms_s2_l2")}</li>
                    <li>{t("terms_s2_l3")}</li>
                    <li>{t("terms_s2_l4")}</li>
                    <li>{t("terms_s2_l5")}</li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-cyan-400/20">
                  <h3 className="font-semibold mb-2 text-cyan-300">{t("terms_s2_levels_title")}</h3>
                  <ul className="list-disc pl-6">
                    <li><strong>{t("terms_s2_l6_title")}</strong> {t("terms_s2_l6_value")}</li>
                    <li><strong>{t("terms_s2_l7_title")}</strong> {t("terms_s2_l7_value")}</li>
                    <li><strong>{t("terms_s2_l8_title")}</strong> {t("terms_s2_l8_value")}</li>
                    <li><strong>{t("terms_s2_l9_title")}</strong> {t("terms_s2_l9_value")}</li>
                  </ul>
                </div>
              </div>
            </PolicySection>
             <PolicySection title={t("terms_s4_title")}>
                <p>{t("terms_s4_p1")}</p>
                <ul className="list-disc pl-6 my-4">
                    <li>{t("terms_s4_l1")}</li>
                    <li>{t("terms_s4_l2")}</li>
                    <li>{t("terms_s4_l3")}</li>
                    <li>{t("terms_s4_l4")}</li>
                    <li>{t("terms_s4_l5")}</li>
                    <li>{t("terms_s4_l6")}</li>
                </ul>
                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
                    <strong>{t("terms_s4_note_title")}</strong> {t("terms_s4_note_p")}
                </div>
            </PolicySection>
          </main>
          <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p><strong>{t("terms_footer_last_updated")}:</strong> {t("terms_last_updated_value")}</p>
            <p className="mt-4 italic">{t("terms_footer_p")}</p>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
}; 