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

  const steps = [
    {
      title: t("demoStep1Title"),
      description: t("demoStep1Desc"),
    },
    {
      title: t("demoStep2Title"),
      description: t("demoStep2Desc"),
    },
    {
      title: t("demoStep3Title"),
      description: t("demoStep3Desc"),
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>

        {/* TAK-X Solution Section */}
        <section className="bg-gray-900 text-white py-20 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
                {t('solutionTitle')}
              </h2>
              <p className="text-lg text-gray-300">
                {t('solutionSubtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-cyan-300">{t('solution1Title')}</h3>
                  <p className="text-gray-300">{t('solution1Desc')}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-cyan-300">{t('solution2Title')}</h3>
                  <p className="text-gray-300">{t('solution2Desc')}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-cyan-300">{t('solution3Title')}</h3>
                  <p className="text-gray-300">{t('solution3Desc')}</p>
                </div>
              </div>
              <div className="grid gap-4">
                <img src="/lovable-uploads/5f644374-fe18-4029-8bad-62c8d6679f27.png" alt="Change Detection UI" className="rounded-lg shadow-2xl border border-cyan-600" />
                <img src="/lovable-uploads/56d9ff7a-2a0e-4889-8353-5754091d7632.png" alt="Order New Image UI" className="rounded-lg shadow-2xl border border-cyan-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="bg-gray-950 text-white py-20 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
                {t("demoTitle")}
              </h2>
              <p className="text-lg text-gray-300">
                {t("demoSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/lovable-uploads/62413556-faac-4f61-a0bc-ec2bf657c0fa.png" alt="GoTAK Trackers UI" className="rounded-lg shadow-2xl border border-cyan-600" />
              </div>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-cyan-400 rounded-full">
                          <div className="w-6 h-6 bg-cyan-400 rounded-full" />
                        </div>
                      </div>
                      {index < steps.length - 1 && <div className="w-px h-full bg-cyan-400/30" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-300 mb-1">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Solutions Platform Section */}
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