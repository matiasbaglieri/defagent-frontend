import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Team() {
  const { t } = useTranslation();

  const team = [
    {
      name: t("teamMember1Name"),
      role: t("teamMember1Role"),
      description: t("teamMember1Desc"),
      image: "/lovable-uploads/8a9a0c68-8f5a-4de8-89e9-6adb3a22580a.png",
    },
    {
      name: t("teamMember2Name"),
      role: t("teamMember2Role"),
      description: t("teamMember2Desc"),
      image: "/lovable-uploads/0d151261-672f-433d-8921-4f5e6c232e9b.png",
    },
    {
      name: t("teamMember3Name"),
      role: t("teamMember3Role"),
      description: t("teamMember3Desc"),
      image: "/lovable-uploads/1596672846729.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
              {t("teamPageTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              {t("teamPageSubtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center mb-4">
                    <Avatar className="w-24 h-24 mb-4 border-2 border-cyan-400">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-cyan-900 text-cyan-300">
                        {member.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cyan-500 mb-2 font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 