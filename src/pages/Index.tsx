import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import InfoStrip from "@/components/landing/InfoStrip";
import MissionStatement from "@/components/landing/MissionStatement";
import CoreCapabilities from "@/components/landing/CoreCapabilities";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Demo } from "@/components/landing/Demo";
import { Team } from "@/components/landing/Team";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <InfoStrip />
        <MissionStatement />
        <CoreCapabilities />
        <Problem />
        <Solution />
        <Demo />
        <Team />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

const CtaSection = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection>
      <div className="container">
        <div className="bg-card border border-border rounded-lg p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t('ctaTitle')}
          </h2>
         
          <ul className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 space-y-3 text-left">
            <li className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>{t('ctaBullets.0')}</span>
            </li>
            <li className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>{t('ctaBullets.1')}</span>
            </li>
            <li className="flex items-center space-x-3 bg-card/50 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>{t('ctaBullets.2')}</span>
            </li>
          </ul>
          <Button size="lg" asChild>
              <a href="https://api.whatsapp.com/send?text=request access to defagent&phone=5491164616122" target="_blank" rel="noopener noreferrer">
                  {t('ctaButton')}
              </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
};

export default Index;
