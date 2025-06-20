import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";

export default function BlogPostCVEtoCountermeasure() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="bg-black text-gray-200 font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <article className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl shadow-cyan-500/10 overflow-hidden">
            <div className="p-8 md:p-12">
              <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-400">
                  {t("post3_title")}
                </h1>
                <p className="mt-4 text-sm text-gray-500 uppercase tracking-widest">{t("post3_date")}</p>
              </header>

              <div className="prose prose-invert prose-lg max-w-none mx-auto text-gray-300">
                <p className="lead text-xl md:text-2xl text-cyan-100/90 font-light mb-12 border-l-2 border-cyan-500 pl-8">
                  {t("post3_p1")}
                </p>

                <div className="space-y-12">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 !mb-4 tracking-tight relative">
                      <span className="absolute -left-6 top-1.5 h-3 w-3 bg-cyan-400 rounded-full"></span>
                      {t("post3_h2_1")}
                    </h2>
                    <p>{t("post3_p2")}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 !mb-4 tracking-tight relative">
                      <span className="absolute -left-6 top-1.5 h-3 w-3 bg-cyan-400 rounded-full"></span>
                      {t("post3_h2_2")}
                    </h2>
                    <p>{t("post3_p3")}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 !mb-4 tracking-tight relative">
                      <span className="absolute -left-6 top-1.5 h-3 w-3 bg-cyan-400 rounded-full"></span>
                      {t("post3_h2_3")}
                    </h2>
                    <p>{t("post3_p4")}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 !mb-4 tracking-tight relative">
                      <span className="absolute -left-6 top-1.5 h-3 w-3 bg-cyan-400 rounded-full"></span>
                      {t("post3_h2_4")}
                    </h2>
                    <p>{t("post3_p5")}</p>
                  </section>
                </div>
              </div>
            </div>

            <footer className="bg-gray-950/50 mt-16 px-8 py-8 md:px-12 text-center">
              <p className="text-gray-400 mb-4">{t("post3_p6")}</p>
              <a
                href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {t("post3_cta")}
              </a>
            </footer>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
} 