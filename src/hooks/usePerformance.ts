import { useState, useEffect } from "react";

export type PerformanceTier = "low" | "mid" | "high";

export const usePerformance = () => {
    const [tier, setTier] = useState<PerformanceTier>("mid");

    useEffect(() => {
        // Detect mobile or low-end hardware
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const cores = navigator.hardwareConcurrency || 4;

        if (isMobile || cores <= 2) {
            setTier("low");
        } else if (cores >= 8) {
            setTier("high");
        } else {
            setTier("mid");
        }
    }, []);

    return tier;
};
