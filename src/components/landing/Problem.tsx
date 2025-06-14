
import { XCircle, Watch, Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const problems = [
  {
    icon: Puzzle,
    title: "Fragmented Data",
    description: "80% of DLA’s suppliers are small businesses, causing supply chain vulnerabilities and siloed information across proprietary systems.",
  },
  {
    icon: Watch,
    title: "Delayed Threat Response",
    description: "Manual fuel logistics planning—'stubby pencil math'—slows crisis response by over 8 minutes, a critical delay in high-stakes scenarios.",
  },
  {
    icon: XCircle,
    title: "Interoperability Failures",
    description: "Legacy systems block modern drone and sensor integration, compromising blue-force tracking and mission coordination.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Problem = () => {
  return (
    <AnimatedSection id="problem" stagger>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Critical Gaps in Multi-Domain Logistics
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Today's battlefields are data-rich but wisdom-poor. Disconnected tools create dangerous delays and vulnerabilities.
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
