import { AnimatedSection } from "./AnimatedSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

export const Team = () => {
    const { t } = useTranslation();

    const teamMembers = [
        { name: t("teamMember1Name"), role: t("teamMember1Desc"), image: "/lovable-uploads/8a9a0c68-8f5a-4de8-89e9-6adb3a22580a.png" },
        { name: t("teamMember2Name"), role: t("teamMember2Desc"), image: "/lovable-uploads/0d151261-672f-433d-8921-4f5e6c232e9b.png" },
        { name: t("teamMember3Name"), role: t("teamMember3Desc"), image: "/lovable-uploads/1596672846729.jpeg" }
    ];

    return (
        <AnimatedSection id="team" className="bg-card border-y border-border">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {t("teamTitle")}
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        {t("teamSubtitle")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="text-center">
                            <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
                                <AvatarImage src={(member as any).image} alt={member.name} />
                                <AvatarFallback>{member.name.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};
