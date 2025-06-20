import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";

export default function Careers() {
  const { t } = useTranslation();

  const positions = [
    {
      title: t("careersPosition1Title"),
      type: t("careersPosition1Type"),
    },
    {
      title: t("careersPosition2Title"),
      type: t("careersPosition2Type"),
    },
    {
      title: t("careersPosition3Title"),
      type: t("careersPosition3Type"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
              {t("careersPageTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              {t("careersPageSubtitle")}
            </p>
            <p className="text-md text-gray-400 mb-16">
              {t("careersPageDescription")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-cyan-600 rounded-2xl p-6 shadow-lg hover:shadow-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{job.type}</p>
                  <a
                    href="https://api.whatsapp.com/send?text=I%20want%20to%20be%20part%20of%20the%20team&phone=5491164616122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors duration-200"
                  >
                    {t("careersApplyButton")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 