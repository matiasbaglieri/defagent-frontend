import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
import { Shield, Zap, Globe, Users, Target, CheckCircle, ArrowRight, Cpu, Server, Satellite } from 'lucide-react';

export default function Integrations() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Platform Integration
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-8 leading-tight">
              {t("integrationsPageTitle")}
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                {t("integrationsPageSubtitle1")}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t("integrationsPageSubtitle2")}
              </p>
            </div>
          </div>
        </section>

        {/* Edge Intelligence Section */}
        <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6">
                {t("integrationsEdgeTitle")}
              </h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t("integrationsEdgeDesc")}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t("integrationsEdgeDesc2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Variants Section */}
        <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6">
                {t("integrationsVariantsTitle")}
              </h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Server, 
                  title: t("integrationsVariant1Title"), 
                  description: t("integrationsVariant1Desc"),
                  color: "from-blue-600 to-cyan-600"
                },
                { 
                  icon: Shield, 
                  title: t("integrationsVariant2Title"), 
                  description: t("integrationsVariant2Desc"),
                  color: "from-green-600 to-emerald-600"
                },
                { 
                  icon: Satellite, 
                  title: t("integrationsVariant3Title"), 
                  description: t("integrationsVariant3Desc"),
                  color: "from-purple-600 to-pink-600"
                }
              ].map((variant, index) => (
                <div key={index} className="group relative overflow-hidden bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${variant.color} rounded-xl flex items-center justify-center mb-6`}>
                      <variant.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {variant.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {variant.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6">
                {t("integrationsBenefitsTitle")}
              </h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: t("integrationsBenefit1Title"), description: t("integrationsBenefit1Desc") },
                { icon: Zap, title: t("integrationsBenefit2Title"), description: t("integrationsBenefit2Desc") },
                { icon: Target, title: t("integrationsBenefit3Title"), description: t("integrationsBenefit3Desc") },
                { icon: Globe, title: t("integrationsBenefit4Title"), description: t("integrationsBenefit4Desc") },
                { icon: CheckCircle, title: t("integrationsBenefit5Title"), description: t("integrationsBenefit5Desc") }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-cyan-900/20 via-gray-900 to-blue-900/20 text-white py-20 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-800/50 border border-gray-700 rounded-3xl p-12 md:p-16">
              <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">
                Ready to Integrate DefAgent?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how DefAgent can enhance your tactical operations with AI-driven intelligence and secure communications.
              </p>
              <a
                href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition-all duration-300 font-semibold text-lg group shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Sales Team
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 