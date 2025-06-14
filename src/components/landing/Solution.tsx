
import { AnimatedSection } from "./AnimatedSection";

export const Solution = () => {
  return (
    <AnimatedSection id="solution" className="bg-card border-y border-border">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            TAK-X: The Unified Battlefield OS
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our platform fuses real-time satellite intelligence with AI-powered logistics to deliver a decisive tactical advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Real-Time Fusion</h3>
              <p className="text-muted-foreground">Integrates FreeTAKServer’s CoT protocol with SkyFi’s satellite tasking for live geospatial overlays and unparalleled situational awareness.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">AI Auto-Routing</h3>
              <p className="text-muted-foreground">Predicts ambush zones and supply-chain risks using DLA models and hyperspectral terrain analysis to ensure asset safety and mission success.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">3D Mission Visualization</h3>
              <p className="text-muted-foreground">Renders NATO-compliant order-of-battle maps enriched with SkyFi’s SAR and optical imagery for immersive mission planning and execution.</p>
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
