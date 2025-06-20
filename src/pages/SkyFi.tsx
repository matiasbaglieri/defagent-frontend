import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";

export default function SkyFi() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
              {t("skyFiPageTitle")}
            </h1>

            <p className="text-lg text-gray-300 mb-10 text-center">
              {t("skyFiPageSubtitle")}
            </p>

            <div className="space-y-14">
              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t("skyFiNeedTitle")}
                </h2>
                <p className="text-gray-300">
                  {t("skyFiNeedDesc")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t("skyFiSolutionTitle")}
                </h2>
                <p className="text-gray-300">
                  {t("skyFiSolutionDesc")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t("skyFiHowTitle")}
                </h2>
                <p className="text-gray-300">
                  {t("skyFiHowDesc")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t("skyFiTechTitle")}
                </h2>
                <p className="text-gray-300">
                  {t("skyFiTechDesc")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t("skyFiBenefitsTitle")}
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>{t("skyFiBenefit1")}</li>
                  <li>{t("skyFiBenefit2")}</li>
                  <li>{t("skyFiBenefit3")}</li>
                  <li>{t("skyFiBenefit4")}</li>
                  <li>{t("skyFiBenefit5")}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t("skyFiWhyTitle")}
                </h2>
                <p className="text-gray-300">
                  {t("skyFiWhyDesc")}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t("skyFiWhoTitle")}
                </h2>
                <p className="text-gray-300">
                  {t("skyFiWhoDesc")}
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="text-xl text-cyan-400 font-semibold mb-4">
                  {t("skyFiCTATitle")}
                </p>
                <a
                  href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition"
                >
                  {t("skyFiCTAButton")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 