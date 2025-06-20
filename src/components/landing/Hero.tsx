
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection className="text-center pt-32 pb-40">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {t('heroTitle')}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          {t('heroSubtitle')}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#demo">{t('viewDemo')}</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://api.whatsapp.com/send?text=request access to defagent&phone=5491164616122" target="_blank" rel="noopener noreferrer">
              {t('requestAccess')}
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};
