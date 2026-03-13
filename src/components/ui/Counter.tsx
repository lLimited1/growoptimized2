import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CounterProps {
    value: string;
    className?: string;
}

export const Counter = ({ value, className }: CounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Extract number and surrounding text
    const numericPart = value.match(/\d+(\.\d+)?/g);
    const prefix = value.match(/^[^\d]*/)?.[0] || "";
    const suffix = value.match(/[^\d]*$/)?.[0] || "";

    const target = numericPart ? parseFloat(numericPart[0]) : 0;

    const count = useMotionValue(0);
    const rounded = useSpring(count, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.001
    });

    const [displayValue, setDisplayValue] = useState(target > 0 ? "0" : value);

    useEffect(() => {
        if (isInView && target > 0) {
            count.set(target);
        }
    }, [isInView, target, count]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            if (numericPart && numericPart.length > 0) {
                // If it was originally an integer, show no decimals. If float, show 1.
                const decimals = numericPart[0].includes(".") ? 1 : 0;
                const formatted = latest.toFixed(decimals);

                // Split original string by the number we found and replace it
                // This is a simple version that handles the first number found
                setDisplayValue(value.replace(numericPart[0], formatted));
            }
        });
    }, [rounded, value, numericPart]);

    return (
        <span ref={ref} className={className}>
            {displayValue}
        </span>
    );
};
