import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";

export default function BlogPostPostTrainingAI() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <article className="bg-gray-950 text-white py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-cyan-400/20 shadow-xl shadow-cyan-500/10">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 tracking-tight">
              {t("post1_title")}
            </h1>
            <p className="text-base text-gray-400 mb-8">{t("post1_date")}</p>

            <p className="text-xl leading-relaxed text-gray-300 mb-8">
              {t("post1_p1")}
            </p>

            <hr className="my-12 border-gray-800" />

            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight">
                  {t("post1_h2_1")}
                </h2>
                <p className="text-lg text-gray-300 leading-loose">
                  {t("post1_p2")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight">
                  {t("post1_h2_2")}
                </h2>
                <p className="text-lg text-gray-300 leading-loose">
                  {t("post1_p3")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight">
                  {t("post1_h2_3")}
                </h2>
                <p className="text-lg text-gray-300 leading-loose">
                  {t("post1_p4")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight">
                  {t("post1_h2_4")}
                </h2>
                <p className="text-lg text-gray-300 leading-loose">
                  {t("post1_p5")}
                </p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 mb-4">{t("post1_p6")}</p>
              <a
                href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {t("post1_cta")}
              </a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
} 