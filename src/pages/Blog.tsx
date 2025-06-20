import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: t("blogPost1Title"),
      date: t("blogPost1Date"),
      summary: t("blogPost1Summary"),
      link: t("blogPost1Link"),
    },
    {
      title: t("blogPost2Title"),
      date: t("blogPost2Date"),
      summary: t("blogPost2Summary"),
      link: t("blogPost2Link"),
    },
    {
      title: t("blogPost3Title"),
      date: t("blogPost3Date"),
      summary: t("blogPost3Summary"),
      link: t("blogPost3Link"),
    },
    {
      title: t("blogPost4Title"),
      date: t("blogPost4Date"),
      summary: t("blogPost4Summary"),
      link: t("blogPost4Link"),
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
            {t("blogTitle")}
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center">
            {t("blogSubtitle")}
          </p>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-500 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-400 mb-3">🗓 {post.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{post.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog; 