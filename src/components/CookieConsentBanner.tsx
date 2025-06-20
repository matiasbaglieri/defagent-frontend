import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CookieConsentBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const preferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const rejectAll = () => {
    const preferences = {
      necessary: true, // Necessary cookies can't be disabled
      functional: false,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return;
    setCookiePreferences({
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    });
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white p-5 z-50 shadow-lg border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-2 text-cyan-300">{t('cookie_banner_title')}</h3>
              <p className="text-sm text-gray-300">
                {t('cookie_banner_p1_1')}
                <Link to="/cookie-policy" className="text-cyan-400 underline hover:text-cyan-300">{t('cookie_banner_p1_link')}</Link>
                {t('cookie_banner_p1_2')}
              </p>
            </div>
            
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <button 
                onClick={() => setShowPreferences(true)}
                className="px-5 py-2 text-sm font-medium bg-gray-700/50 border border-gray-600 rounded-md hover:bg-gray-700 transition-colors"
              >
                {t('cookie_banner_customize')}
              </button>
              <button 
                onClick={rejectAll}
                className="px-5 py-2 text-sm font-medium bg-red-800/80 rounded-md hover:bg-red-700 transition-colors"
              >
                {t('cookie_banner_reject')}
              </button>
              <button 
                onClick={acceptAll}
                className="px-5 py-2 text-sm font-medium bg-cyan-600 rounded-md hover:bg-cyan-500 transition-colors"
              >
                {t('cookie_banner_accept')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 text-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <h3 className="text-xl font-bold text-cyan-300">{t('cookie_modal_title')}</h3>
                <button 
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  &#x2715;
                </button>
              </div>
              
              <div className="space-y-5">
                {['necessary', 'functional', 'analytics', 'marketing'].map((key) => (
                  <div className="border-b border-gray-800 pb-4" key={key}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-200">{t(`cookie_modal_${key}_title`)}</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={cookiePreferences[key as keyof typeof cookiePreferences]}
                          onChange={() => togglePreference(key as keyof typeof cookiePreferences)}
                          disabled={key === 'necessary'}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-cyan-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-400 pr-12">
                      {t(`cookie_modal_${key}_p`)}
                    </p>
                  </div>
                ))}
                
                <div className="flex justify-end gap-3 pt-5">
                  <button 
                    onClick={rejectAll}
                    className="px-5 py-2 text-sm font-medium bg-gray-700/50 border border-gray-600 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    {t('cookie_banner_reject')}
                  </button>
                  <button 
                    onClick={acceptSelected}
                    className="px-5 py-2 text-sm font-medium bg-cyan-600 rounded-md hover:bg-cyan-500 transition-colors"
                  >
                    {t('cookie_modal_save')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner; 