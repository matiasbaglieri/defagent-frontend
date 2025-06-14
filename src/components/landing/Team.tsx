
import { AnimatedSection } from "./AnimatedSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
    { name: "CTO", role: "Founder x3 Startups, Expert in IA and Blockchain", image: "/lovable-uploads/8a9a0c68-8f5a-4de8-89e9-6adb3a22580a.png" },
    { name: "CEO", role: "Former CamGroupDefense, Technomeca, Crescent Hill Capital", image: "/lovable-uploads/0d151261-672f-433d-8921-4f5e6c232e9b.png" }
];


export const Team = () => {
    return (
        <AnimatedSection id="team" className="bg-card border-y border-border">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Elite Operators & Open-Source Pioneers
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Our team blends deep operational experience with world-class engineering talent.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
