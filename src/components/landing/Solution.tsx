
import { AnimatedSection } from "./AnimatedSection";
import { useTranslation } from "react-i18next";

export const Solution = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection id="solution" className="bg-card border-y border-border">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t('solutionTitle')}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t('solutionSubtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t('solution1Title')}</h3>
              <p className="text-muted-foreground">{t('solution1Desc')}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{t('solution2Title')}</h3>
              <p className="text-muted-foreground">{t('solution2Desc')}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{t('solution3Title')}</h3>
              <p className="text-muted-foreground">{t('solution3Desc')}</p>
            </div>
          </div>
          <div className="grid gap-4">
             <img src="/lovable-uploads/5f644374-fe18-4029-8bad-62c8d6679f27.png" alt="Change Detection UI" className="rounded-lg shadow-2xl border border-border" />
             <img src="/lovable-uploads/56d9ff7a-2a0e-4889-8353-5754091d7632.png" alt="Order New Image UI" className="rounded-lg shadow-2xl border border-border" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
