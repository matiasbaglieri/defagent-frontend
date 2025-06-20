import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import Aws from "./pages/Aws";
import SkyFi from "./pages/SkyFi";
import FreeTAKServer from "./pages/FreeTAKServer";
import NotFound from "./pages/NotFound";
import CoreValues from "./pages/CoreValues";
import Events from "./pages/Events";
import NewsMedia from "./pages/NewsMedia";
import PartnersAlliances from "./pages/PartnersAlliances";
import Compliance from "./pages/Compliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aws" element={<Aws />} />
          <Route path="/skyfi" element={<SkyFi />} />
          <Route path="/freetakserver" element={<FreeTAKServer />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/partners-alliances" element={<PartnersAlliances />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
