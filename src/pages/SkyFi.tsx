import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
import { 
  Satellite, 
  Shield, 
  Zap, 
  Cpu, 
  CheckCircle, 
  Users, 
  ArrowRight,
  Wifi,
  Globe,
  Lock,
  BarChart3,
  Smartphone
} from "lucide-react";

export default function SkyFi() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-24 px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
          </div>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-6">
              <Satellite className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              {t("skyFiPageTitle")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("skyFiPageSubtitle")}
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Why SkyFi Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-lg mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("skyFiNeedTitle")}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("skyFiNeedDesc")}
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-8 border border-red-500/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Critical communication gaps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Limited connectivity in remote areas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Security vulnerabilities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl p-8 border border-green-500/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Advanced satellite communication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Global coverage capabilities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Enhanced security protocols</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("skyFiSolutionTitle")}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("skyFiSolutionDesc")}
                </p>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-4">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("skyFiHowTitle")}
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                {t("skyFiHowDesc")}
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Wifi className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Satellite Integration</h3>
                  <p className="text-gray-300">Seamless connection to satellite networks for global coverage</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Lock className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Security Layer</h3>
                  <p className="text-gray-300">Advanced encryption and authentication protocols</p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-xl p-6 border border-cyan-500/20">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Smartphone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Mobile Access</h3>
                  <p className="text-gray-300">Cross-platform compatibility for all devices</p>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/10 rounded-lg mb-4">
                  <BarChart3 className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("skyFiTechTitle")}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t("skyFiTechDesc")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-yellow-400">99.9%</span>
                  </div>
                  <p className="text-gray-300">Uptime</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-yellow-400">256-bit</span>
                  </div>
                  <p className="text-gray-300">Encryption</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-yellow-400">24/7</span>
                  </div>
                  <p className="text-gray-300">Support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-yellow-400">Global</span>
                  </div>
                  <p className="text-gray-300">Coverage</p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("skyFiBenefitsTitle")}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{t("skyFiBenefit1")}</p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{t("skyFiBenefit2")}</p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{t("skyFiBenefit3")}</p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{t("skyFiBenefit4")}</p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{t("skyFiBenefit5")}</p>
                </div>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4">
                  <Satellite className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("skyFiWhyTitle")}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("skyFiWhyDesc")}
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 rounded-2xl p-8 border border-indigo-500/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-300">Proven satellite technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-300">Military-grade security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-300">24/7 technical support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-300">Global deployment experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Needs It Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/10 rounded-lg mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("skyFiWhoTitle")}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t("skyFiWhoDesc")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-orange-400 font-semibold">Military</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-orange-400 font-semibold">Emergency</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-orange-400 font-semibold">Remote</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-orange-400 font-semibold">Critical</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("skyFiCTATitle")}
              </h2>
              <a
                href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <span>{t("skyFiCTAButton")}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 