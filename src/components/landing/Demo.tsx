
import { AnimatedSection } from "./AnimatedSection";
import { useTranslation } from "react-i18next";

export const Demo = () => {
  const { t } = useTranslation();

  const steps = [
    {
        title: t("demoStep1Title"),
        description: t("demoStep1Desc"),
    },
    {
        title: t("demoStep2Title"),
        description: t("demoStep2Desc"),
    },
    {
        title: t("demoStep3Title"),
        description: t("demoStep3Desc"),
    }
  ];

  return (
    <AnimatedSection id="demo">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("demoTitle")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t("demoSubtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="/lovable-uploads/62413556-faac-4f61-a0bc-ec2bf657c0fa.png" alt="GoTAK Trackers UI" className="rounded-lg shadow-2xl border border-border" />
            </div>
            <div className="space-y-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full">
                                    <div className="w-6 h-6 bg-primary rounded-full" />
                                </div>
                            </div>
                            {index < steps.length - 1 && <div className="w-px h-full bg-primary/30" />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-1">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
