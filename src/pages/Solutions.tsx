import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";

export default function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t("solutionsItem1Title"),
      description: t("solutionsItem1Desc"),
    },
    {
      title: t("solutionsItem2Title"),
      description: t("solutionsItem2Desc"),
    },
    {
      title: t("solutionsItem3Title"),
      description: t("solutionsItem3Desc"),
    },
    {
      title: t("solutionsItem4Title"),
      description: t("solutionsItem4Desc"),
    },
    {
      title: t("solutionsItem5Title"),
      description: t("solutionsItem5Desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <section className="bg-gray-950 text-white py-16 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center text-cyan-400">
              {t("solutionsPageTitle")}
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12">
              {t("solutionsPageSubtitle")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-cyan-600 rounded-2xl p-6 shadow-lg hover:shadow-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {solution.description}
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
} 