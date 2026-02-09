"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface GlowingEffectProps {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "default" | "white";
    glow?: boolean;
    className?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
}

export const GlowingEffect = ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
}: GlowingEffectProps) => {
    const [active, setActive] = useState(false);

    // For simplicity and robustness without the exact complex source, 
    // we'll implement a high-quality CSS-based glow that follows the border.
    // The 'variant' prop will control the gradient colors.

    // Custom gradient for "Bijdehand" (Yellow -> Blue -> Purple)
    // Instead of strict "default" or "white", we'll use the requested colors
    const gradient = variant === "white"
        ? "conic-gradient(from 0deg at 50% 50%, #ffffff 0deg, transparent 60deg, transparent 300deg, #ffffff 360deg)"
        : "conic-gradient(from 0deg at 50% 50%, #FACC15 0deg, #0090FF 120deg, #EB21FA 240deg, #FACC15 360deg)";

    return (
        <>
            <div
                className={cn(
                    "absolute inset-0 rounded-[inherit] border border-white/10",
                    "opacity-0 transition-opacity duration-500",
                    (glow || active) && "opacity-100",
                    className
                )}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-[inherit] overflow-hidden",
                        "mask-image:linear-gradient(white, white) content-box no-repeat",
                    )}
                >
                    <motion.div
                        className="absolute inset-[-100%]"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: movementDuration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            background: gradient,
                            filter: `blur(${blur}px)`,
                        }}
                    />
                </div>
            </div>
        </>
    );
};
