import { useTranslation } from "react-i18next";
import { AnimatedSection } from "./AnimatedSection";

const MissionStatement = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <div className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              {t('missionTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('missionText')}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MissionStatement; 