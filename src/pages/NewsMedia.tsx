import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";

const NewsMedia = () => {
  const { t } = useTranslation();

  const news = [
    {
      title: t("newsItem1Title"),
      date: t("newsItem1Date"),
      link: "https://www.defenseone.com/defagent-ai-tactical",
      summary: t("newsItem1Summary"),
    },
    {
      title: t("newsItem2Title"),
      date: t("newsItem2Date"),
      link: "https://www.cyberscoop.com/defagent-skyfi-integration",
      summary: t("newsItem2Summary"),
    },
    {
      title: t("newsItem3Title"),
      date: t("newsItem3Date"),
      link: "https://defcon.org/defagent-demo",
      summary: t("newsItem3Summary"),
    },
    {
      title: t("newsItem4Title"),
      date: t("newsItem4Date"),
      link: "https://govtechreview.com/defagent-critical-infra",
      summary: t("newsItem4Summary"),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-card border-b border-border py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10">
              {t("newsMediaTitle")}
            </h1>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              {t("newsMediaSubtitle")}
            </p>

            <div className="space-y-8">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">🗓 {item.date}</p>
                  <p className="text-foreground text-sm leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsMedia; 