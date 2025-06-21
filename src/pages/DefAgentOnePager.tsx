import { useTranslation } from "react-i18next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Shield, Target, Zap, Globe, Lock, Users, ArrowRight, Mail, CheckCircle } from "lucide-react";

export default function DefAgentOnePager() {
  const { t } = useTranslation();

  const keyCapabilities = [
    { 
      title: t("keyCapability1Title"), 
      text: t("keyCapability1Text"),
      icon: Shield,
      color: "text-blue-600"
    },
    { 
      title: t("keyCapability2Title"), 
      text: t("keyCapability2Text"),
      icon: Target,
      color: "text-red-600"
    },
    { 
      title: t("keyCapability3Title"), 
      text: t("keyCapability3Text"),
      icon: Zap,
      color: "text-yellow-600"
    },
    { 
      title: t("keyCapability4Title"), 
      text: t("keyCapability4Text"),
      icon: Lock,
      color: "text-green-600"
    },
    { 
      title: t("keyCapability5Title"), 
      text: t("keyCapability5Text"),
      icon: Users,
      color: "text-purple-600"
    },
    { 
      title: t("keyCapability6Title"), 
      text: t("keyCapability6Text"),
      icon: Globe,
      color: "text-indigo-600"
    },
  ];

  const strategicImpacts = [
    { 
      title: t("strategicImpact1Title"), 
      text: t("strategicImpact1Text"),
      icon: "🛡️"
    },
    { 
      title: t("strategicImpact2Title"), 
      text: t("strategicImpact2Text"),
      icon: "🔐"
    },
    { 
      title: t("strategicImpact3Title"), 
      text: t("strategicImpact3Text"),
      icon: "⚡"
    },
    { 
      title: t("strategicImpact4Title"), 
      text: t("strategicImpact4Text"),
      icon: "🔗"
    },
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
        <AnimatedSection className="text-center pt-32 pb-40 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {t("onePagerTitle")}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              {t("onePagerSubtitle")}
            </p>
          </div>
        </AnimatedSection>

        {/* Executive Summary */}
        <AnimatedSection>
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("executiveSummaryTitle")}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            </div>
            <div className="bg-card border border-border p-8 md:p-12 rounded-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("executiveSummaryText")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Capabilities */}
        <AnimatedSection>
          <div className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("keyCapabilitiesTitle")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keyCapabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <div 
                      key={index} 
                      className="group bg-card p-6 rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${capability.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {capability.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Strategic Impact */}
        <AnimatedSection>
          <div className="py-16 md:py-24">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("strategicImpactTitle")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {strategicImpacts.map((impact, index) => (
                  <div 
                    key={index} 
                    className="group bg-card p-6 rounded-lg border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {impact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {impact.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {impact.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Target Applications */}
        <AnimatedSection>
          <div className="py-16 md:py-24 bg-muted">
            <div className="container max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("targetApplicationsTitle")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-card border border-border p-8 md:p-12 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {targetApplications.slice(0, 3).map((app, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-lg font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {targetApplications.slice(3, 6).map((app, index) => (
                      <div key={index + 3} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-lg font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
          <div className="container">
            <div className="bg-card border border-border rounded-lg p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("contactTitle")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                {t("contactDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="https://api.whatsapp.com/send?text=request access to defagent&phone=5491164616122" target="_blank" rel="noopener noreferrer">
                    {t("contactSales")}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:matias@defagent.io">
                    <Mail className="w-4 h-4 mr-2" />
                    {t("contactEmailLabel")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer Banner */}
        <div className="bg-muted border-t border-border py-6">
          <div className="container text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
              <span className="font-semibold">{t("footerClassified")}</span>
              <span>|</span>
              <span className="font-semibold">{t("footerDistribution")}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}