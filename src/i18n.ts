
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
      // Problem
      problemTitle: "Critical Gaps in Multi-Domain Logistics",
      problemSubtitle: "Today's battlefields are data-rich but wisdom-poor. Disconnected tools create dangerous delays and vulnerabilities.",
      problem1Title: "Fragmented Data",
      problem1Desc: "80% of DLA’s suppliers are small businesses, causing supply chain vulnerabilities and siloed information across proprietary systems.",
      problem2Title: "Delayed Threat Response",
      problem2Desc: "Manual fuel logistics planning—'stubby pencil math'—slows crisis response by over 8 minutes, a critical delay in high-stakes scenarios.",
      problem3Title: "Interoperability Failures",
      problem3Desc: "Legacy systems block modern drone and sensor integration, compromising blue-force tracking and mission coordination.",
      // Solution
      solutionTitle: "TAK-X: The Unified Battlefield OS",
      solutionSubtitle: "Our platform fuses real-time satellite intelligence with AI-powered logistics to deliver a decisive tactical advantage.",
      solution1Title: "Real-Time Fusion",
      solution1Desc: "Integrates FreeTAKServer’s CoT protocol with SkyFi’s satellite tasking for live geospatial overlays and unparalleled situational awareness.",
      solution2Title: "AI Auto-Routing",
      solution2Desc: "Predicts ambush zones and supply-chain risks using DLA models and hyperspectral terrain analysis to ensure asset safety and mission success.",
      solution3Title: "3D Mission Visualization",
      solution3Desc: "Renders NATO-compliant order-of-battle maps enriched with SkyFi’s SAR and optical imagery for immersive mission planning and execution.",
      // Demo
      demoTitle: "Live Demo: Convoy Protection Workflow",
      demoSubtitle: "See how DefAgent turns raw data into decisive action in seconds.",
      demoStep1Title: "1. Sense",
      demoStep1Desc: "A SkyFi SAR satellite detects critical bridge damage and automatically feeds a Cursor-on-Target (CoT) alert to FreeTAKServer.",
      demoStep2Title: "2. Evaluate",
      demoStep2Desc: "AI cross-references DLA fuel data and EW threat maps, instantly plotting a safer, optimized route for the convoy.",
      demoStep3Title: "3. Effect",
      demoStep3Desc: "A medevac request is sent via secure TAK-Chat while Close Air Support is coordinated over a live WinTAK 3D map.",
      // Team
      teamTitle: "Elite Operators & Open-Source Pioneers",
      teamSubtitle: "Our team blends deep operational experience with world-class engineering talent.",
      teamMember1Name: "CTO",
      teamMember1Desc: "Founder x3 Startups, Expert in IA and Blockchain",
      teamMember2Name: "CEO",
      teamMember2Desc: "Former CamGroupDefense, Technomeca, Crescent Hill Capital",
      // CTA
      ctaTitle: "Ready to Dominate the Battlespace?",
      ctaSubtitle: "Integrate your forces with the next generation of C2 and intelligence. Get in touch to schedule a private demonstration for your unit.",
      ctaButton: "Request a Demo",
      // Footer
      footerAllRightsReserved: "All rights reserved.",
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
      // Problem
      problemTitle: "Brechas Críticas en la Logística Multi-Dominio",
      problemSubtitle: "Los campos de batalla de hoy son ricos en datos pero pobres en sabiduría. Las herramientas desconectadas crean retrasos y vulnerabilidades peligrosas.",
      problem1Title: "Datos Fragmentados",
      problem1Desc: "El 80% de los proveedores de la DLA son pequeñas empresas, lo que causa vulnerabilidades en la cadena de suministro e información aislada en sistemas propietarios.",
      problem2Title: "Respuesta a Amenazas Retrasada",
      problem2Desc: "La planificación manual de la logística de combustible —'cálculos a lápiz'— ralentiza la respuesta a crisis en más de 8 minutos, un retraso crítico en escenarios de alto riesgo.",
      problem3Title: "Fallas de Interoperabilidad",
      problem3Desc: "Los sistemas heredados bloquean la integración de drones y sensores modernos, comprometiendo el seguimiento de fuerzas amigas y la coordinación de misiones.",
      // Solution
      solutionTitle: "TAK-X: El SO Unificado del Campo de Batalla",
      solutionSubtitle: "Nuestra plataforma fusiona inteligencia satelital en tiempo real con logística impulsada por IA para ofrecer una ventaja táctica decisiva.",
      solution1Title: "Fusión en Tiempo Real",
      solution1Desc: "Integra el protocolo CoT de FreeTAKServer con la asignación de tareas satelitales de SkyFi para superposiciones geoespaciales en vivo y una conciencia situacional sin precedentes.",
      solution2Title: "Enrutamiento Automático con IA",
      solution2Desc: "Predice zonas de emboscada y riesgos en la cadena de suministro utilizando modelos de la DLA y análisis de terreno hiperespectral para garantizar la seguridad de los activos y el éxito de la misión.",
      solution3Title: "Visualización de Misión en 3D",
      solution3Desc: "Renderiza mapas de orden de batalla compatibles con la OTAN enriquecidos con imágenes SAR y ópticas de SkyFi para una planificación y ejecución de misiones inmersivas.",
      // Demo
      demoTitle: "Demostración en Vivo: Flujo de Trabajo de Protección de Convoy",
      demoSubtitle: "Vea cómo DefAgent convierte datos brutos en acciones decisivas en segundos.",
      demoStep1Title: "1. Sentir",
      demoStep1Desc: "Un satélite SAR de SkyFi detecta daños críticos en un puente y envía automáticamente una alerta Cursor-on-Target (CoT) a FreeTAKServer.",
      demoStep2Title: "2. Evaluar",
      demoStep2Desc: "La IA cruza datos de combustible de la DLA y mapas de amenazas de EW, trazando instantáneamente una ruta más segura y optimizada para el convoy.",
      demoStep3Title: "3. Efectuar",
      demoStep3Desc: "Se envía una solicitud de evacuación médica a través de TAK-Chat seguro mientras se coordina el Apoyo Aéreo Cercano sobre un mapa 3D de WinTAK en vivo.",
      // Team
      teamTitle: "Operadores de Élite y Pioneros del Código Abierto",
      teamSubtitle: "Nuestro equipo combina una profunda experiencia operativa con talento de ingeniería de clase mundial.",
      teamMember1Name: "CTO",
      teamMember1Desc: "Fundador de 3 Startups, Experto en IA y Blockchain",
      teamMember2Name: "CEO",
      teamMember2Desc: "Ex CamGroupDefense, Technomeca, Crescent Hill Capital",
      // CTA
      ctaTitle: "¿Listo para dominar el campo de batalla?",
      ctaSubtitle: "Integre sus fuerzas con la próxima generación de C2 e inteligencia. Póngase en contacto para programar una demostración privada para su unidad.",
      ctaButton: "Solicitar una Demostración",
      // Footer
      footerAllRightsReserved: "Todos los derechos reservados.",
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
      // Problem
      problemTitle: "Lacunes Critiques dans la Logistique Multi-Domaines",
      problemSubtitle: "Les champs de bataille d'aujourd'hui sont riches en données mais pauvres en sagesse. Des outils déconnectés créent des retards et des vulnérabilités dangereux.",
      problem1Title: "Données Fragmentées",
      problem1Desc: "80% des fournisseurs de la DLA sont de petites entreprises, ce qui entraîne des vulnérabilités de la chaîne d'approvisionnement et des informations cloisonnées dans des systèmes propriétaires.",
      problem2Title: "Réponse aux Menaces Retardée",
      problem2Desc: "La planification manuelle de la logistique du carburant —'mathématiques au crayon'— ralentit la réponse aux crises de plus de 8 minutes, un délai critique dans des scénarios à enjeux élevés.",
      problem3Title: "Échecs d'Interopérabilité",
      problem3Desc: "Les systèmes existants bloquent l'intégration des drones et capteurs modernes, compromettant le suivi des forces amies et la coordination des missions.",
      // Solution
      solutionTitle: "TAK-X : Le SE de Champ de Bataille Unifié",
      solutionSubtitle: "Notre plateforme fusionne l'intelligence satellitaire en temps réel avec une logistique alimentée par l'IA pour offrir un avantage tactique décisif.",
      solution1Title: "Fusion en Temps Réel",
      solution1Desc: "Intègre le protocole CoT de FreeTAKServer avec la programmation satellite de SkyFi pour des superpositions géospatiales en direct et une conscience situationnelle inégalée.",
      solution2Title: "Routage Automatique par IA",
      solution2Desc: "Prédit les zones d'embuscade et les risques de la chaîne d'approvisionnement à l'aide de modèles DLA et d'analyses de terrain hyperspectrales pour garantir la sécurité des actifs et le succès de la mission.",
      solution3Title: "Visualisation de Mission 3D",
      solution3Desc: "Génère des cartes d'ordre de bataille conformes à l'OTAN enrichies d'images SAR et optiques de SkyFi pour une planification et une exécution de mission immersives.",
      // Demo
      demoTitle: "Démo en Direct : Flux de Protection de Convoi",
      demoSubtitle: "Découvrez comment DefAgent transforme les données brutes en actions décisives en quelques secondes.",
      demoStep1Title: "1. Détecter",
      demoStep1Desc: "Un satellite SAR de SkyFi détecte des dommages critiques sur un pont et envoie automatiquement une alerte Cursor-on-Target (CoT) à FreeTAKServer.",
      demoStep2Title: "2. Évaluer",
      demoStep2Desc: "L'IA croise les données de carburant de la DLA et les cartes de menaces de GE, traçant instantanément un itinéraire plus sûr et optimisé pour le convoi.",
      demoStep3Title: "3. Agir",
      demoStep3Desc: "Une demande d'évacuation sanitaire est envoyée via TAK-Chat sécurisé tandis que l'appui aérien rapproché est coordonné sur une carte 3D WinTAK en direct.",
      // Team
      teamTitle: "Opérateurs d'Élite et Pionniers de l'Open-Source",
      teamSubtitle: "Notre équipe allie une expérience opérationnelle approfondie à un talent d'ingénierie de classe mondiale.",
      teamMember1Name: "CTO",
      teamMember1Desc: "Fondateur de 3 startups, expert en IA et Blockchain",
      teamMember2Name: "CEO",
      teamMember2Desc: "Ancien de CamGroupDefense, Technomeca, Crescent Hill Capital",
      // CTA
      ctaTitle: "Prêt à dominer l'espace de bataille ?",
      ctaSubtitle: "Intégrez vos forces à la nouvelle génération de C2 et de renseignement. Contactez-nous pour planifier une démonstration privée pour votre unité.",
      ctaButton: "Demander une démo",
      // Footer
      footerAllRightsReserved: "Tous droits réservés.",
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
      // Problem
      problemTitle: "Lacunas Críticas na Logística Multidomínio",
      problemSubtitle: "Os campos de batalha de hoje são ricos em dados, mas pobres em sabedoria. Ferramentas desconectadas criam atrasos e vulnerabilidades perigosas.",
      problem1Title: "Dados Fragmentados",
      problem1Desc: "80% dos fornecedores da DLA são pequenas empresas, causando vulnerabilidades na cadeia de suprimentos e informações isoladas em sistemas proprietários.",
      problem2Title: "Resposta Atrasada a Ameaças",
      problem2Desc: "O planejamento manual da logística de combustível —'matemática de lápis'— retarda a resposta a crises em mais de 8 minutos, um atraso crítico em cenários de alto risco.",
      problem3Title: "Falhas de Interoperabilidade",
      problem3Desc: "Sistemas legados bloqueiam a integração de drones e sensores modernos, comprometendo o rastreamento de forças amigas e a coordenação de missões.",
      // Solution
      solutionTitle: "TAK-X: O SO de Campo de Batalha Unificado",
      solutionSubtitle: "Nossa plataforma funde inteligência de satélite em tempo real com logística alimentada por IA para fornecer uma vantagem tática decisiva.",
      solution1Title: "Fusão em Tempo Real",
      solution1Desc: "Integra o protocolo CoT do FreeTAKServer com o agendamento de satélites da SkyFi para sobreposições geoespaciais ao vivo e consciência situacional incomparável.",
      solution2Title: "Roteamento Automático com IA",
      solution2Desc: "Prevê zonas de emboscada e riscos na cadeia de suprimentos usando modelos da DLA e análise de terreno hiperespectral para garantir a segurança dos ativos e o sucesso da missão.",
      solution3Title: "Visualização de Missão 3D",
      solution3Desc: "Renderiza mapas de ordem de batalha compatíveis com a OTAN enriquecidos com imagens SAR e ópticas da SkyFi para planejamento e execução de missões imersivas.",
      // Demo
      demoTitle: "Demonstração ao Vivo: Fluxo de Trabalho de Proteção de Comboio",
      demoSubtitle: "Veja como o DefAgent transforma dados brutos em ações decisivas em segundos.",
      demoStep1Title: "1. Sentir",
      demoStep1Desc: "Um satélite SAR da SkyFi detecta danos críticos em uma ponte e alimenta automaticamente um alerta Cursor-on-Target (CoT) para o FreeTAKServer.",
      demoStep2Title: "2. Avaliar",
      demoStep2Desc: "A IA cruza dados de combustível da DLA e mapas de ameaças de GE, traçando instantaneamente uma rota mais segura e otimizada para o comboio.",
      demoStep3Title: "3. Efetuar",
      demoStep3Desc: "Uma solicitação de evacuação médica é enviada via TAK-Chat seguro enquanto o Apoio Aéreo Próximo é coordenado em um mapa 3D WinTAK ao vivo.",
      // Team
      teamTitle: "Operadores de Elite e Pioneiros de Código Aberto",
      teamSubtitle: "Nossa equipe combina profunda experiência operacional com talento de engenharia de classe mundial.",
      teamMember1Name: "CTO",
      teamMember1Desc: "Fundador de 3 Startups, Especialista em IA e Blockchain",
      teamMember2Name: "CEO",
      teamMember2Desc: "Ex-CamGroupDefense, Technomeca, Crescent Hill Capital",
      // CTA
      ctaTitle: "Pronto para dominar o espaço de batalha?",
      ctaSubtitle: "Integre suas forças com a próxima geração de C2 e inteligência. Entre em contato para agendar uma demonstração privada para sua unidade.",
      ctaButton: "Solicitar uma Demonstração",
      // Footer
      footerAllRightsReserved: "Todos os direitos reservados.",
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
      // Problem
      problemTitle: "פערים קריטיים בלוגיסטיקה רב-תחומית",
      problemSubtitle: "שדות הקרב של ימינו עשירים בנתונים אך עניים בחוכמה. כלים מנותקים יוצרים עיכובים ופגיעויות מסוכנות.",
      problem1Title: "נתונים מקוטעים",
      problem1Desc: "80% מספקי DLA הם עסקים קטנים, הגורמים לחולשות בשרשרת האספקה ולמידע מבודד במערכות קנייניות.",
      problem2Title: "תגובה מאוחרת לאיומים",
      problem2Desc: "תכנון לוגיסטיקת דלק ידני - 'חשבון עם עיפרון קצר' - מאט את התגובה למשברים ביותר מ-8 דקות, עיכוב קריטי בתרחישים בעלי סיכון גבוה.",
      problem3Title: "כשלי יכולת פעולה הדדית",
      problem3Desc: "מערכות מדור קודם חוסמות שילוב של רחפנים וחיישנים מודרניים, ופוגעות במעקב אחר כוחות ידידותיים ובתיאום משימות.",
      // Solution
      solutionTitle: "TAK-X: מערכת ההפעלה המאוחדת לשדה הקרב",
      solutionSubtitle: "הפלטפורמה שלנו ממזגת מודיעין לווייני בזמן אמת עם לוגיסטיקה מבוססת בינה מלאכותית כדי לספק יתרון טקטי מכריע.",
      solution1Title: "היתוך בזמן אמת",
      solution1Desc: "משלב את פרוטוקול CoT של FreeTAKServer עם תזמון משימות לוויין של SkyFi עבור שכבות גיאוגרפיות חיות ומודעות מצבית שאין שני לה.",
      solution2Title: "ניתוב אוטומטי מבוסס AI",
      solution2Desc: "חוזה אזורי מארב וסיכונים בשרשרת האספקה באמצעות מודלים של DLA וניתוח שטח היפרספקטרלי כדי להבטיח את בטיחות הנכסים והצלחת המשימה.",
      solution3Title: "הדמיית משימה תלת-ממדית",
      solution3Desc: "מציג מפות סדר-כוחות תואמות נאט\"ו המועשרות בתמונות SAR ואופטיות של SkyFi לתכנון וביצוע משימות סוחפים.",
      // Demo
      demoTitle: "הדגמה חיה: תהליך עבודה להגנת שיירות",
      demoSubtitle: "ראה כיצד DefAgent הופך נתונים גולמיים לפעולה מכרעת בשניות.",
      demoStep1Title: "1. חישה",
      demoStep1Desc: "לוויין SAR של SkyFi מזהה נזק קריטי בגשר ומזין אוטומטית התראת Cursor-on-Target (CoT) ל-FreeTAKServer.",
      demoStep2Title: "2. הערכה",
      demoStep2Desc: "בינה מלאכותית מצליבה נתוני דלק של DLA ומפות איומי ל\"א, ומתכננת באופן מיידי מסלול בטוח ומותאם יותר עבור השיירה.",
      demoStep3Title: "3. השפעה",
      demoStep3Desc: "בקשת פינוי רפואי נשלחת באמצעות TAK-Chat מאובטח בעוד סיוע אווירי קרוב מתואם על גבי מפת תלת-ממד חיה של WinTAK.",
      // Team
      teamTitle: "מפעילים מובחרים וחלוצי קוד פתוח",
      teamSubtitle: "הצוות שלנו משלב ניסיון מבצעי עמוק עם כישרון הנדסי ברמה עולמית.",
      teamMember1Name: "CTO",
      teamMember1Desc: "מייסד 3 סטארטאפים, מומחה בבינה מלאכותית ובלוקצ'יין",
      teamMember2Name: "CEO",
      teamMember2Desc: "לשעבר CamGroupDefense, Technomeca, Crescent Hill Capital",
      // CTA
      ctaTitle: "מוכן לשלוט בשדה הקרב?",
      ctaSubtitle: "שלב את כוחותיך עם הדור הבא של C2 ומודיעין. צור קשר לקביעת הדגמה פרטית ליחידה שלך.",
      ctaButton: "בקש הדגמה",
      // Footer
      footerAllRightsReserved: "כל הזכויות שמורות.",
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
