import { useTranslation } from "react-i18next";
import { Cpu, ShieldAlert, Network, Target, UserCheck, Lock, Globe } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const CoreCapabilities = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: <Cpu className="h-8 w-8 mb-4 text-primary" />,
      title: t('capability1Title'),
      description: t('capability1Desc'),
    },
    {
      icon: <ShieldAlert className="h-8 w-8 mb-4 text-primary" />,
      title: t('capability2Title'),
      description: t('capability2Desc'),
    },
    {
      icon: <Network className="h-8 w-8 mb-4 text-primary" />,
      title: t('capability3Title'),
      description: t('capability3Desc'),
    },
    {
      icon: <Target className="h-8 w-8 mb-4 text-primary" />,
      title: t('capability4Title'),
      description: t('capability4Desc'),
    },
    {
      icon: <UserCheck className="h-8 w-8 mb-4 text-primary" />,
      title: t('capability5Title'),
      description: t('capability5Desc'),
    },
    {
      icon: <Lock className="h-8 w-8 mb-4 text-primary" />,
      title: t('capability6Title'),
      description: t('capability6Desc'),
    },
    {
        icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
        title: t('capability7Title'),
        description: t('capability7Desc'),
    }
  ];

  return (
    <AnimatedSection>
      <div className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t('coreCapabilitiesTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                {capability.icon}
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CoreCapabilities; 