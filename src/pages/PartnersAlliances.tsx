import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";

const PartnersAlliances = () => {
  const { t } = useTranslation();

  const partners = [
    {
      name: t("partner1Name"),
      website: "https://skyfi.com",
      description: t("partner1Desc"),
    },
    {
      name: t("partner2Name"),
      website: "https://github.com/freeTakTeam",
      description: t("partner2Desc"),
    },
    {
      name: t("partner3Name"),
      website: "https://ciberg.app",
      description: t("partner3Desc"),
    },
    {
      name: t("partner4Name"),
      website: "https://www.carahsoft.com",
      description: t("partner4Desc"),
    },
    {
      name: t("partner5Name"),
      website: "https://www.somewearlabs.com",
      description: t("partner5Desc"),
    },
    {
      name: t("partner6Name"),
      website: "https://www.vulncheck.com",
      description: t("partner6Desc"),
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
            {t("partnersAlliancesTitle")}
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center">
            {t("partnersAlliancesSubtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-500 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {partner.name}
                  </a>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {partner.description}
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

export default PartnersAlliances; 