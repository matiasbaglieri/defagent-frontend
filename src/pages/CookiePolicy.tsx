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


export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              {t("cookie_policy_title")}
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-cyan-400">{t("cookie_policy_subtitle")}</h2>
            <div className="mt-6 text-sm text-gray-400">
              <p><strong>{t("cookie_policy_effective_date")}:</strong> {t("cookie_policy_effective_date_value")}</p>
              <p><strong>{t("cookie_policy_last_updated")}:</strong> {t("cookie_policy_last_updated_value")}</p>
            </div>
          </header>

          <main className="max-w-4xl mx-auto space-y-12">
            <PolicySection title={t("cookie_s1_title")}>
              <p>{t("cookie_s1_p1")}</p>
            </PolicySection>

            <PolicySection title={t("cookie_s2_title")}>
              <p>{t("cookie_s2_p1")}</p>
            </PolicySection>
            
            <PolicySection title={t("cookie_s3_title")}>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="border-b border-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-4 text-cyan-300">{t("cookie_s3_th1")}</th>
                                <th scope="col" className="py-3 px-4 text-cyan-300">{t("cookie_s3_th2")}</th>
                                <th scope="col" className="py-3 px-4 text-cyan-300">{t("cookie_s3_th3")}</th>
                                <th scope="col" className="py-3 px-4 text-cyan-300">{t("cookie_s3_th4")}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            <tr>
                                <td className="py-3 px-4 font-medium">{t("cookie_s3_t1_td1")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t1_td2")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t1_td3")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t1_td4")}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">{t("cookie_s3_t2_td1")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t2_td2")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t2_td3")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t2_td4")}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">{t("cookie_s3_t3_td1")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t3_td2")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t3_td3")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t3_td4")}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">{t("cookie_s3_t4_td1")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t4_td2")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t4_td3")}</td>
                                <td className="py-3 px-4">{t("cookie_s3_t4_td4")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </PolicySection>

            <PolicySection title={t("cookie_s4_title")}>
                <p>{t("cookie_s4_p1")}</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                    <li><strong>{t("cookie_s4_l1_title")}</strong> {t("cookie_s4_l1_p")}</li>
                    <li><strong>{t("cookie_s4_l2_title")}</strong> {t("cookie_s4_l2_p")}</li>
                    <li><strong>{t("cookie_s4_l3_title")}</strong> {t("cookie_s4_l3_p")}</li>
                    <li><strong>{t("cookie_s4_l4_title")}</strong> {t("cookie_s4_l4_p")}</li>
                </ul>
            </PolicySection>

            <PolicySection title={t("cookie_s5_title")}>
                <p>{t("cookie_s5_p1")}</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                    <li>{t("cookie_s5_l1")}</li>
                    <li>{t("cookie_s5_l2")}</li>
                    <li>{t("cookie_s5_l3")}</li>
                </ul>
                <p>{t("cookie_s5_p2")}</p>
            </PolicySection>

             <PolicySection title={t("cookie_s8_title")}>
                <p>{t("cookie_s8_p1")}</p>
                <address className="not-italic mt-4 bg-gray-900 p-6 rounded-lg border border-gray-800 text-gray-400">
                  {t("cookie_policy_subtitle")}<br />
                  5900 Balcones Drive, Suite 100<br />
                  Austin, Texas 78731<br />
                  <strong>{t("cookie_s8_email")}:</strong> privacy@defagent.ai<br />
                  <strong>{t("cookie_s8_phone")}:</strong> +54 911 6461 6122
                </address>
            </PolicySection>
          </main>
          
          <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p><strong>{t("cookie_policy_footer_last_updated")}:</strong> {t("cookie_policy_last_updated_value")}</p>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
}; 