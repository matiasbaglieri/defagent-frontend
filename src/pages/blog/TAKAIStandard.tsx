import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";

export default function BlogPostTAKAIStandard() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <article className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 tracking-tight leading-tight">
                {t("post2_title")}
              </h1>
              <p className="mt-4 text-base text-gray-400">{t("post2_date")}</p>
            </header>

            <div className="text-lg text-gray-300 leading-relaxed space-y-8">
              <p className="text-xl font-light border-l-4 border-cyan-400 pl-6 py-2">
                {t("post2_p1")}
              </p>

              <section>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight border-b-2 border-cyan-400/20 pb-2">
                  {t("post2_h2_1")}
                </h2>
                <p>{t("post2_p2")}</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight border-b-2 border-cyan-400/20 pb-2">
                  {t("post2_h2_2")}
                </h2>
                <p>{t("post2_p3")}</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight border-b-2 border-cyan-400/20 pb-2">
                  {t("post2_h2_3")}
                </h2>
                <p>{t("post2_p4")}</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4 tracking-tight border-b-2 border-cyan-400/20 pb-2">
                  {t("post2_h2_4")}
                </h2>
                <p>{t("post2_p5")}</p>
              </section>
            </div>

            <footer className="mt-16 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400 mb-4">{t("post2_p6")}</p>
              <a
                href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {t("post2_cta")}
              </a>
            </footer>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
} 