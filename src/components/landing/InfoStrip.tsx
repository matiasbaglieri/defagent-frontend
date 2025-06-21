import { useTranslation } from "react-i18next";
import { Zap, Globe, ShieldCheck, Route } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const InfoStrip = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
      text: t('infoStrip1'),
    },
    {
      icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
      text: t('infoStrip2'),
    },
    {
      icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary" />,
      text: t('infoStrip3'),
    },
    {
      icon: <Route className="h-8 w-8 mb-4 text-primary" />,
      text: t('infoStrip4'),
    },
  ];

  return (
    <AnimatedSection>
      <div className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              >
                {item.icon}
                <p className="text-base font-medium text-card-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default InfoStrip; 