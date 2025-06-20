import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function FreeTAKServerPage() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
              {t('freeTAKServerPageTitle')}
            </h1>

            <p className="text-lg text-gray-300 mb-10 text-center">
              {t('freeTAKServerPageSubtitle')}
            </p>

            <div className="space-y-14">
              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t('freeTAKServerWhyTitle')}
                </h2>
                <p className="text-gray-300">
                  {t('freeTAKServerWhyDesc')}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t('freeTAKServerEnhanceTitle')}
                </h2>
                <p className="text-gray-300">
                  {t('freeTAKServerEnhanceDesc')}
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-300 mt-2">
                  <li>{t('freeTAKServerEnhanceBenefit1')}</li>
                  <li>{t('freeTAKServerEnhanceBenefit2')}</li>
                  <li>{t('freeTAKServerEnhanceBenefit3')}</li>
                  <li>{t('freeTAKServerEnhanceBenefit4')}</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  {t('freeTAKServerEnhanceDesc2')}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t('freeTAKServerUseCasesTitle')}
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>{t('freeTAKServerUseCase1')}</li>
                  <li>{t('freeTAKServerUseCase2')}</li>
                  <li>{t('freeTAKServerUseCase3')}</li>
                  <li>{t('freeTAKServerUseCase4')}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-300 mb-3">
                  {t('freeTAKServerBenefitsTitle')}
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>{t('freeTAKServerBenefit1')}</li>
                  <li>{t('freeTAKServerBenefit2')}</li>
                  <li>{t('freeTAKServerBenefit3')}</li>
                  <li>{t('freeTAKServerBenefit4')}</li>
                  <li>{t('freeTAKServerBenefit5')}</li>
                </ul>
              </div>

              <div className="text-center mt-16">
                <p className="text-xl text-cyan-400 font-semibold mb-4">
                  {t('freeTAKServerCTATitle')}
                </p>
                <a
                  href="https://api.whatsapp.com/send?text=i%20want%20to%20contact%20sales%20of%20defagent%20&phone=5491164616122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition"
                >
                  {t('freeTAKServerCTAButton')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 