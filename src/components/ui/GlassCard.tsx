import { motion } from "motion/react";
import React from "react";
import { BorderBeam } from "./BorderBeam";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GlassCard = ({ children, className, showBorderBeam = true }: { children: React.ReactNode, className?: string, showBorderBeam?: boolean }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
        className
      )}
    >
      {showBorderBeam && <BorderBeam />}
      {children}
    </motion.div>
  );
};
