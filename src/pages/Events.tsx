import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Events = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: t("eventsNatoTitle"),
      date: t("eventsNatoDate"),
      location: t("eventsNatoLocation"),
      description: t("eventsNatoDesc"),
    },
    {
      title: t("eventsBlackHatTitle"),
      date: t("eventsBlackHatDate"),
      location: t("eventsBlackHatLocation"),
      description: t("eventsBlackHatDesc"),
    },
    {
      title: t("eventsDefConTitle"),
      date: t("eventsDefConDate"),
      location: t("eventsDefConLocation"),
      description: t("eventsDefConDesc"),
    },
    {
      title: t("eventsAIDefenseTitle"),
      date: t("eventsAIDefenseDate"),
      location: t("eventsAIDefenseLocation"),
      description: t("eventsAIDefenseDesc"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
            {t("eventsTitle")}
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center">
            {t("eventsSubtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-500 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">📅 {event.date}</p>
                <p className="text-sm text-gray-400 mb-4">📍 {event.location}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events; 