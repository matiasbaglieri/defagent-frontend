import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shield, ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useState, useEffect } from "react";

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black border-b border-gray-800 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:block text-white">DefAgent</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-gray-300 hover:text-white">
                  <span>{t("navCustomers")}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild><Link to="/solutions">{t("navSolution")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><a href="/pitch_deck.pdf" target="_blank" rel="noopener noreferrer">{t("navWhitepaper")}</a></DropdownMenuItem>
                <DropdownMenuItem asChild><a href="https://api.whatsapp.com/send?text=i%20need%20support&phone=5491164616122" target="_blank" rel="noopener noreferrer">{t("navSupport")}</a></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-gray-300 hover:text-white">
                  <span>{t("navPartners")}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild><Link to="/aws">{t("navAWS")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/skyfi">{t("navSkyFi")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/freetakserver">{t("navFreeTAKServer")}</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-gray-300 hover:text-white">
                  <span>{t("navAboutUs")}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild><Link to="/team">{t("navTeam")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/core-values">{t("navCoreValues")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/events">{t("navEvents")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/news-media">{t("navNewsMedia")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/partners-alliances">{t("navPartnersAlliances")}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/compliance">{t("navCompliance")}</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/blog" className="text-gray-300 hover:text-white">{t("navBlog")}</Link>
            <Link to="/careers" className="text-gray-300 hover:text-white">{t("navCareers")}</Link>
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center gap-4">
            {/* Desktop Only */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <Button asChild className="hidden sm:flex">
              <a href="https://api.whatsapp.com/send?text=i want to contact sales of defagent &phone=5491164616122" target="_blank" rel="noopener noreferrer">
                {t("contactSales")}
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 bg-gray-800 rounded-md"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-16"></div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden">
          {/* Mobile Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gray-900 shadow-xl flex flex-col overflow-hidden">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg text-white">DefAgent</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-800">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="flex flex-col gap-4">
                {/* Customers Section */}
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection('customers')}
                    className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    <span className="font-medium">{t("navCustomers")}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'customers' ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'customers' && (
                    <div className="p-2 bg-gray-900">
                      <Link 
                        to="/solutions" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navSolution")}
                      </Link>
                      <a 
                        href="/pitch_deck.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navWhitepaper")}
                      </a>
                      <a 
                        href="https://api.whatsapp.com/send?text=i%20need%20support&phone=5491164616122" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navSupport")}
                      </a>
                    </div>
                  )}
                </div>

                {/* Partners Section */}
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection('partners')}
                    className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    <span className="font-medium">{t("navPartners")}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'partners' ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'partners' && (
                    <div className="p-2 bg-gray-900">
                      <Link 
                        to="/aws" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navAWS")}
                      </Link>
                      <Link 
                        to="/skyfi" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navSkyFi")}
                      </Link>
                      <Link 
                        to="/freetakserver" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navFreeTAKServer")}
                      </Link>
                    </div>
                  )}
                </div>

                {/* About Us Section */}
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection('aboutUs')}
                    className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    <span className="font-medium">{t("navAboutUs")}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'aboutUs' ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'aboutUs' && (
                    <div className="p-2 bg-gray-900">
                      <Link 
                        to="/team" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navTeam")}
                      </Link>
                      <Link 
                        to="/core-values" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navCoreValues")}
                      </Link>
                      <Link 
                        to="/events" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navEvents")}
                      </Link>
                      <Link 
                        to="/news-media" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navNewsMedia")}
                      </Link>
                      <Link 
                        to="/partners-alliances" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navPartnersAlliances")}
                      </Link>
                      <Link 
                        to="/compliance" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navCompliance")}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Resources Section */}
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection('resources')}
                    className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    <span className="font-medium">Resources</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'resources' ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'resources' && (
                    <div className="p-2 bg-gray-900">
                      <Link 
                        to="/blog" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navBlog")}
                      </Link>
                      <Link 
                        to="/careers" 
                        className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white" 
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("navCareers")}
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Menu Footer */}
            <div className="p-4 border-t border-gray-800 bg-gray-900">
              <Button asChild className="w-full mb-4">
                <a href="https://api.whatsapp.com/send?text=i want to contact sales of defagent &phone=5491164616122" target="_blank" rel="noopener noreferrer">
                  {t("contactSales")}
                </a>
              </Button>
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
