import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";

export default function Integrations() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 text-center">
              {t("integrationsPageTitle")}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {t("integrationsPageSubtitle1")}
            </p>
            <p className="text-lg text-gray-300 mb-12">
              {t("integrationsPageSubtitle2")}
            </p>

            <h2 className="text-3xl font-bold text-cyan-300 mb-4">
              {t("integrationsEdgeTitle")}
            </h2>
            <p className="text-gray-300 mb-12">
              {t("integrationsEdgeDesc")}
              <br />
              <br />
              {t("integrationsEdgeDesc2")}
            </p>

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              {t("integrationsVariantsTitle")}
            </h2>
            <ul className="list-disc pl-6 space-y-6 text-gray-300">
              <li>
                <strong className="text-white">
                  {t("integrationsVariant1Title")}
                </strong>{" "}
                {t("integrationsVariant1Desc")}
              </li>
              <li>
                <strong className="text-white">
                  {t("integrationsVariant2Title")}
                </strong>{" "}
                {t("integrationsVariant2Desc")}
              </li>
              <li>
                <strong className="text-white">
                  {t("integrationsVariant3Title")}
                </strong>{" "}
                {t("integrationsVariant3Desc")}
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-300 mt-16 mb-6">
              {t("integrationsBenefitsTitle")}
            </h2>
            <ul className="space-y-6 text-gray-300">
              <li>
                <span className="text-cyan-400 font-semibold">
                  {t("integrationsBenefit1Title")}
                </span>
                {t("integrationsBenefit1Desc")}
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">
                  {t("integrationsBenefit2Title")}
                </span>
                {t("integrationsBenefit2Desc")}
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">
                  {t("integrationsBenefit3Title")}
                </span>
                {t("integrationsBenefit3Desc")}
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">
                  {t("integrationsBenefit4Title")}
                </span>
                {t("integrationsBenefit4Desc")}
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">
                  {t("integrationsBenefit5Title")}
                </span>
                {t("integrationsBenefit5Desc")}
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 