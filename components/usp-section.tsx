import React from "react";
import { cn } from "@/lib/utils";
import { Shield, MapPin, Wallet } from "lucide-react";

interface KnockoutCardProps {
    title: string;
    icon: React.ElementType;
    className?: string;
}

const KnockoutCard = ({
    title,
    icon: Icon,
    className,
}: KnockoutCardProps) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col items-start justify-center p-6 md:p-8",
                "bg-black rounded-2xl",
                "border border-white/10", // Subtle glassy border
                "transition-all duration-200 hover:border-white/20 hover:bg-white/[0.02]",
                className
            )}
        >
            {/* Icon */}
            <div className="mb-4 p-3 md:p-4 rounded-full bg-white/5 border border-white/5">
                <Icon className="w-8 h-8 md:w-16 md:h-16 text-neutral-200" />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white text-left">
                {title}
            </h3>
        </div>
    );
};

export function USPSection() {
    const features = [
        {
            title: "Private by design",
            icon: Shield,
        },
        {
            title: "Slimme locaties",
            icon: MapPin,
        },
        {
            title: "Widgets & Wallet",
            icon: Wallet,
        },
    ];

    return (
        <section className="py-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <KnockoutCard
                            key={index}
                            title={feature.title}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
