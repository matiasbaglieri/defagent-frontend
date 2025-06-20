import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shield, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { id: "careers", label: t("navCareers"), href: "/careers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">DefAgent</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 transition-colors hover:text-primary">
                <span>{t("navCustomers")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/solutions" className="cursor-pointer">
                  {t("navSolution")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/pitch_deck.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  {t("navWhitepaper")}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://api.whatsapp.com/send?text=i%20need%20support&phone=5491164616122" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  {t("navSupport")}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 transition-colors hover:text-primary">
                <span>{t("navPartners")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/integrations" className="cursor-pointer">
                  {t("navAWS")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/skyfi" className="cursor-pointer">
                  {t("navSkyFi")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/freetakserver" className="cursor-pointer">
                  {t("navFreeTAKServer")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 transition-colors hover:text-primary">
                <span>{t("navAboutUs")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/team" className="cursor-pointer">
                  {t("navTeam")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/core-values" className="cursor-pointer">
                  {t("navCoreValues")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/events" className="cursor-pointer">
                  {t("navEvents")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/news-media" className="cursor-pointer">
                  {t("navNewsMedia")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/partners-alliances" className="cursor-pointer">
                  {t("navPartnersAlliances")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/compliance" className="cursor-pointer">
                  {t("navCompliance")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((link) => (
            <Link 
              key={link.id} 
              to={link.href} 
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <Button asChild>
            <a href="https://api.whatsapp.com/send?text=i want to contact sales of defagent &phone=5491164616122" target="_blank" rel="noopener noreferrer">
              {t("contactSales")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
