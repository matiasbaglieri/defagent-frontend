
import { Shield } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-border/40">
            <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Shield className="h-6 w-6 text-primary" />
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} DefAgent. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
