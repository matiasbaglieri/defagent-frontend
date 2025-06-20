import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const CoreValues = () => {
  const { t } = useTranslation();

  const coreValues = [
    {
      title: t("coreValuesMissionTitle"),
      description: t("coreValuesMissionDesc"),
    },
    {
      title: t("coreValuesSecurityTitle"),
      description: t("coreValuesSecurityDesc"),
    },
    {
      title: t("coreValuesAutonomyTitle"),
      description: t("coreValuesAutonomyDesc"),
    },
    {
      title: t("coreValuesHumanTitle"),
      description: t("coreValuesHumanDesc"),
    },
    {
      title: t("coreValuesInteropTitle"),
      description: t("coreValuesInteropDesc"),
    },
    {
      title: t("coreValuesReadinessTitle"),
      description: t("coreValuesReadinessDesc"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
              {t("coreValuesTitle")}
            </h1>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
              {t("coreValuesSubtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-cyan-600/30 rounded-xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoreValues; 