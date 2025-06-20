import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";
import { FC } from "react";

interface StatCardProps {
  icon: string;
  text: string;
}

const StatCard: FC<StatCardProps> = ({ icon, text }) => (
  <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 flex items-center">
    <span className="text-cyan-400 text-3xl mr-4">{icon}</span>
    <p className="text-base text-gray-300">{text}</p>
  </div>
);

export default function BlogPostNATOCaseStudy() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="bg-gray-950 text-white">
        <article>
          <header className="bg-gray-900 border-b border-cyan-400/20 py-16 sm:py-24">
            <div className="container mx-auto px-4 text-center">
              <p className="text-base font-semibold text-cyan-400 uppercase tracking-widest">
                {t("post4_category")}
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                {t("post4_title")}
              </h1>
              <p className="mt-6 text-lg text-gray-400">{t("post4_date")}</p>
            </div>
          </header>
          
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto">
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light text-center mb-16">
                {t("post4_p1")}
              </p>

              <div className="md:grid md:grid-cols-3 md:gap-12 space-y-12 md:space-y-0">
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-bold text-cyan-300 tracking-tight border-l-4 border-cyan-400 pl-4">
                    {t("post4_h2_1")}
                  </h2>
                </div>
                <div className="md:col-span-2 text-lg text-gray-300/80 leading-loose">
                  <p>{t("post4_p2")}</p>
                </div>
              </div>

              <hr className="my-16 border-gray-800" />

              <div className="md:grid md:grid-cols-3 md:gap-12 space-y-12 md:space-y-0">
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-bold text-cyan-300 tracking-tight border-l-4 border-cyan-400 pl-4">
                    {t("post4_h2_2")}
                  </h2>
                </div>
                <div className="md:col-span-2 text-lg text-gray-300/80 leading-loose">
                  <p>{t("post4_p3")}</p>
                </div>
              </div>

              <div className="my-24 bg-gray-900 p-8 md:p-12 rounded-xl border border-cyan-400/10">
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                  {t("post4_h2_3")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard icon="🔄" text={t("post4_l1")} />
                  <StatCard icon="🛰" text={t("post4_l2")} />
                  <StatCard icon="🚨" text={t("post4_l3")} />
                  <StatCard icon="🔒" text={t("post4_l4")} />
                </div>
              </div>

              <div className="md:grid md:grid-cols-3 md:gap-12 space-y-12 md:space-y-0">
                <div className="md:col-span-1">
                   <h2 className="text-2xl font-bold text-cyan-300 tracking-tight border-l-4 border-cyan-400 pl-4">
                      {t("post4_h2_4")}
                    </h2>
                </div>
                <div className="md:col-span-2 text-lg text-gray-300/80 leading-loose">
                  <p>{t("post4_p4")}</p>
                </div>
              </div>

            </div>
          </div>
          
          <footer className="border-t border-gray-800 mt-16 text-center py-12">
            <div className="container mx-auto px-4">
              <p className="text-lg text-gray-400 mb-6">{t("post4_p5")}</p>
              <a
                href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-500 transition-transform duration-300 transform hover:scale-105"
              >
                {t("post4_cta")}
              </a>
            </div>
          </footer>
        </article>
      </div>
      <Footer />
    </>
  );
}