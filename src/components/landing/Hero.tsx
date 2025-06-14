
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

export const Hero = () => {
  return (
    <AnimatedSection className="text-center pt-32 pb-40">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Fusing AI-driven logistics with real-time Earth intelligence
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Unify siloed battlefield tools into a single OS. We empower joint forces with seamless "Sense-Evaluate-Effect" cycles to dominate the invisible battlespace.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#demo">View Demo</a>
          </Button>
          <Button size="lg" variant="outline">
            Request Access
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};
