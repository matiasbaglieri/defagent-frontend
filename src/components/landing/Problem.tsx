
import { XCircle, Watch, Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useTranslation } from "react-i18next";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Problem = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: Puzzle,
      title: t("problem1Title"),
      description: t("problem1Desc"),
    },
    {
      icon: Watch,
      title: t("problem2Title"),
      description: t("problem2Desc"),
    },
    {
      icon: XCircle,
      title: t("problem3Title"),
      description: t("problem3Desc"),
    },
  ];

  return (
    <AnimatedSection id="problem" stagger>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("problemTitle")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t("problemSubtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={cardVariants}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <problem.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
