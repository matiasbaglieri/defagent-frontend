import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="border-t border-white/10 bg-gray-950">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/apple-touch-icon.png" alt="DefAgent Logo" className="h-10" />
                            <span className="text-2xl font-bold text-white">DefAgent</span>
                        </Link>
                        <p className="mt-4 text-gray-400 max-w-xs text-sm">{t('footer_line_1')}</p>
                        <p className="text-gray-400 max-w-xs text-sm">{t('footer_line_2')}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
                        {/* <div className="space-y-4">
                            <h3 className="font-semibold text-white tracking-wider uppercase">{t("Platform")}</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white">{t("APIs")}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">{t("Integrations")}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">{t("Security")}</a></li>
                            </ul>
                        </div> */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white tracking-wider uppercase">{t("Solutions")}</h3>
                            <ul className="space-y-3">
                                <li><Link to="/solutions" className="text-gray-400 hover:text-white">{t("Defense")}</Link></li>
                                <li><Link to="/solutions" className="text-gray-400 hover:text-white">{t("Enterprise")}</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white tracking-wider uppercase">{t("Company")}</h3>
                            <ul className="space-y-3">
                                <li><Link to="/blog" className="text-gray-400 hover:text-white">{t("Blog")}</Link></li>
                                <li><Link to="/team" className="text-gray-400 hover:text-white">{t("About Us")}</Link></li>
                                <li><Link to="/careers" className="text-gray-400 hover:text-white">{t("Careers")}</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white tracking-wider uppercase">{t("Legal")}</h3>
                            <ul className="space-y-3">
                                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">{t("Privacy Policy")}</Link></li>
                                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white">{t("Terms of Service")}</Link></li>
                                <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white">{t("cookie_policy_title")}</Link></li>
                                <li><Link to="/compliance" className="text-gray-400 hover:text-white">{t("Compliance")}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} DefAgent Inc. {t("All rights reserved")}</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        {/* Social links can be added here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
