import { useTranslation } from "react-i18next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/landing/AnimatedSection";

export default function DefAgentOnePager() {
  const { t } = useTranslation();

  const keyCapabilities = [
    { title: t("keyCapability1Title"), text: t("keyCapability1Text") },
    { title: t("keyCapability2Title"), text: t("keyCapability2Text") },
    { title: t("keyCapability3Title"), text: t("keyCapability3Text") },
    { title: t("keyCapability4Title"), text: t("keyCapability4Text") },
    { title: t("keyCapability5Title"), text: t("keyCapability5Text") },
    { title: t("keyCapability6Title"), text: t("keyCapability6Text") },
  ];

  const strategicImpacts = [
    { title: t("strategicImpact1Title"), text: t("strategicImpact1Text") },
    { title: t("strategicImpact2Title"), text: t("strategicImpact2Text") },
    { title: t("strategicImpact3Title"), text: t("strategicImpact3Text") },
    { title: t("strategicImpact4Title"), text: t("strategicImpact4Text") },
  ];

  const targetApplications = [
    t("targetApp1"),
    t("targetApp2"),
    t("targetApp3"),
    t("targetApp4"),
    t("targetApp5"),
    t("targetApp6"),
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="bg-card border-y border-border">
          <div className="container py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {t("onePagerTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-4xl mx-auto">
              {t("onePagerSubtitle")}
            </p>
          </div>
        </AnimatedSection>

        {/* Executive Summary */}
        <AnimatedSection className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">{t("executiveSummaryTitle")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("executiveSummaryText")}
            </p>
          </div>
        </AnimatedSection>

        {/* Key Capabilities */}
        <AnimatedSection className="bg-card border-y border-border py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{t("keyCapabilitiesTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyCapabilities.map((capability, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Strategic Impact */}
        <AnimatedSection className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{t("strategicImpactTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategicImpacts.map((impact, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3">{impact.title}</h3>
                  <p className="text-muted-foreground">{impact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Target Applications */}
        <AnimatedSection className="bg-card border-y border-border py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{t("targetApplicationsTitle")}</h2>
            <ul className="space-y-4">
              {targetApplications.map((app, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-lg">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection className="py-16">
          <div className="container">
            <div className="bg-card border border-border rounded-lg p-10 md:p-16 text-center">
              <h2 className="text-3xl font-bold mb-6">{t("contactTitle")}</h2>
              <a
                href="https://api.whatsapp.com/send?text=request access to defagent&phone=5491164616122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                {t("contactSales")}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}