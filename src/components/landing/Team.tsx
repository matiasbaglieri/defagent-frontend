
import { AnimatedSection } from "./AnimatedSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
    { name: "CTO", role: "Ex-Google AI; FreeTAKServer Contributor" },
    { name: "COO", role: "Former SOCOM J6; Deployed TAK in 11 conflict zones" },
    { name: "Advisor", role: "SkyFi's Imagery Architect (ex-NASA/FAA)" },
    { name: "Advisor", role: "FreeTAKTeam Core Developer" }
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="text-center">
                            <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
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
