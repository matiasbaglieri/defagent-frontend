
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const navLinks = [
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "demo", label: "Demo" },
  { id: "team", label: "Team" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">DefAgent</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <a href="https://api.whatsapp.com/send?text=i want to contact sales of defagent &phone=5491164616122" target="_blank" rel="noopener noreferrer">
              Contact Sales
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
