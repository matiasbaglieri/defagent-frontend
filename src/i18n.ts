
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Header
      navProblem: "Problem",
      navSolution: "Solution",
      navDemo: "Demo",
      navTeam: "Team",
      contactSales: "Contact Sales",
      // Hero
      heroTitle: "Fusing AI-driven logistics with real-time Earth intelligence",
      heroSubtitle: "Unify siloed battlefield tools into a single OS. We empower joint forces with seamless \"Sense-Evaluate-Effect\" cycles to dominate the invisible battlespace.",
      viewDemo: "View Demo",
      requestAccess: "Request Access",
      // CTA
      ctaTitle: "Ready to Dominate the Battlespace?",
      ctaSubtitle: "Integrate your forces with the next generation of C2 and intelligence. Get in touch to schedule a private demonstration for your unit.",
      ctaButton: "Request a Demo",
    }
  },
  es: {
    translation: {
      // Header
      navProblem: "Problema",
      navSolution: "Solución",
      navDemo: "Demostración",
      navTeam: "Equipo",
      contactSales: "Contactar Ventas",
      // Hero
      heroTitle: "Fusionando logística impulsada por IA con inteligencia terrestre en tiempo real",
      heroSubtitle: "Unifique herramientas de campo de batalla aisladas en un único SO. Empoderamos a las fuerzas conjuntas con ciclos \"Sentir-Evaluar-Efectuar\" para dominar el espacio de batalla invisible.",
      viewDemo: "Ver Demostración",
      requestAccess: "Solicitar Acceso",
      // CTA
      ctaTitle: "¿Listo para dominar el campo de batalla?",
      ctaSubtitle: "Integre sus fuerzas con la próxima generación de C2 e inteligencia. Póngase en contacto para programar una demostración privada para su unidad.",
      ctaButton: "Solicitar una Demostración",
    }
  },
  fr: {
    translation: {
      // Header
      navProblem: "Problème",
      navSolution: "Solution",
      navDemo: "Démo",
      navTeam: "Équipe",
      contactSales: "Contacter les ventes",
      // Hero
      heroTitle: "Fusionner la logistique basée sur l'IA avec l'intelligence terrestre en temps réel",
      heroSubtitle: "Unifiez les outils de champ de bataille cloisonnés en un seul SE. Nous donnons aux forces interarmées les moyens de cycles \"Détecter-Évaluer-Agir\" fluides pour dominer l'espace de bataille invisible.",
      viewDemo: "Voir la Démo",
      requestAccess: "Demander l'accès",
      // CTA
      ctaTitle: "Prêt à dominer l'espace de bataille ?",
      ctaSubtitle: "Intégrez vos forces à la nouvelle génération de C2 et de renseignement. Contactez-nous pour planifier une démonstration privée pour votre unité.",
      ctaButton: "Demander une démo",
    }
  },
  pt: {
    translation: {
      // Header
      navProblem: "Problema",
      navSolution: "Solução",
      navDemo: "Demonstração",
      navTeam: "Equipe",
      contactSales: "Contatar Vendas",
      // Hero
      heroTitle: "Fundindo logística orientada por IA com inteligência terrestre em tempo real",
      heroSubtitle: "Unifique ferramentas de campo de batalha isoladas em um único SO. Capacitamos forças conjuntas com ciclos contínuos de \"Sentir-Avaliar-Efetuar\" para dominar o espaço de batalha invisível.",
      viewDemo: "Ver Demonstração",
      requestAccess: "Solicitar Acesso",
      // CTA
      ctaTitle: "Pronto para dominar o espaço de batalha?",
      ctaSubtitle: "Integre suas forças com a próxima geração de C2 e inteligência. Entre em contato para agendar uma demonstração privada para sua unidade.",
      ctaButton: "Solicitar uma Demonstração",
    }
  },
  he: {
    translation: {
      // Header
      navProblem: "בעיה",
      navSolution: "פתרון",
      navDemo: "הדגמה",
      navTeam: "צוות",
      contactSales: "צור קשר עם המכירות",
      // Hero
      heroTitle: "מיזוג לוגיסטיקה מבוססת בינה מלאכותית עם מודיעין כדור הארץ בזמן אמת",
      heroSubtitle: "אחד כלי שדה קרב מבודדים למערכת הפעלה אחת. אנו מעצימים כוחות משותפים עם מחזורי \"חישה-הערכה-השפעה\" חלקים כדי לשלוט במרחב הקרב הבלתי נראה.",
      viewDemo: "צפה בהדגמה",
      requestAccess: "בקש גישה",
      // CTA
      ctaTitle: "מוכן לשלוט בשדה הקרב?",
      ctaSubtitle: "שלב את כוחותיך עם הדור הבא של C2 ומודיעין. צור קשר לקביעת הדגמה פרטית ליחידה שלך.",
      ctaButton: "בקש הדגמה",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = i18n.dir(lng);
});

export default i18n;
