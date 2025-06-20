import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";

const Compliance = () => {
  const { t } = useTranslation();

  const complianceStandards = [
    {
      title: t("compliance1Title"),
      description: t("compliance1Desc"),
    },
    {
      title: t("compliance2Title"),
      description: t("compliance2Desc"),
    },
    {
      title: t("compliance3Title"),
      description: t("compliance3Desc"),
    },
    {
      title: t("compliance4Title"),
      description: t("compliance4Desc"),
    },
    {
      title: t("compliance5Title"),
      description: t("compliance5Desc"),
    },
    {
      title: t("compliance6Title"),
      description: t("compliance6Desc"),
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
            {t("complianceTitle")}
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center">
            {t("complianceSubtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {complianceStandards.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-500 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Compliance; 