
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Demo } from "@/components/landing/Demo";
import { Team } from "@/components/landing/Team";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
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

const CtaSection = () => (
  <AnimatedSection>
    <div className="container">
      <div className="bg-card border border-border rounded-lg p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Dominate the Battlespace?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Integrate your forces with the next generation of C2 and intelligence. Get in touch to schedule a private demonstration for your unit.
        </p>
        <Button size="lg" asChild>
            <a href="https://api.whatsapp.com/send?text=request access to defagent&phone=5491164616122" target="_blank" rel="noopener noreferrer">
                Request a Demo
            </a>
        </Button>
      </div>
    </div>
  </AnimatedSection>
);

export default Index;
