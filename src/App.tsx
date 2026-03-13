import { motion, useScroll, useSpring } from "motion/react";
import React, { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const Problem = lazy(() => import("./components/Problem").then(m => ({ default: m.Problem })));
const Cost = lazy(() => import("./components/Cost").then(m => ({ default: m.Cost })));
const Approach = lazy(() => import("./components/Approach").then(m => ({ default: m.Approach })));
const Solution = lazy(() => import("./components/Solution").then(m => ({ default: m.Solution })));
const Method = lazy(() => import("./components/Method").then(m => ({ default: m.Method })));
const Difference = lazy(() => import("./components/Difference").then(m => ({ default: m.Difference })));
const Results = lazy(() => import("./components/Results").then(m => ({ default: m.Results })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const Vision = lazy(() => import("./components/Vision").then(m => ({ default: m.Vision })));
const CTA = lazy(() => import("./components/CTA").then(m => ({ default: m.CTA })));
const Closing = lazy(() => import("./components/Closing").then(m => ({ default: m.Closing })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-accent/30 selection:text-accent-light overflow-x-hidden">
      {/* Background Effects */}
      <div className="mesh-gradient" />
      <div className="noise" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-accent"
        style={{ scaleX }}
      />

      <main>
        <Hero />

        <Suspense fallback={<div className="h-96" />}>
          <div className="relative">
            <div className="absolute -top-24 left-1/2 -z-10 h-[400px] w-full -translate-x-1/2 bg-gradient-to-b from-accent/10 to-transparent blur-[120px] opacity-50" />
            <Problem />
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Cost />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Approach />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Solution />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Method />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Difference />

          {/* Solar System Decoration */}
          <div className="relative py-24 flex justify-center overflow-hidden">
            <div className="relative h-64 w-64 md:h-80 md:w-80 flex items-center justify-center">
              {/* Outer Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/5 will-change-transform"
              >
                <div className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[2px]" />
              </motion.div>

              {/* Middle Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-white/5 will-change-transform"
              >
                <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/30 blur-[1px]" />
                <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/30 blur-[1px]" />
              </motion.div>

              {/* Inner Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-20 rounded-full border border-accent/10 will-change-transform"
              >
                <div className="absolute top-1/2 right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(124,92,252,0.8)]" />
              </motion.div>

              {/* Sun / Core */}
              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-xl will-change-transform"
                />
                <div className="h-6 w-6 rounded-full bg-accent shadow-[0_0_30px_rgba(124,92,252,1)]" />
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full -z-20" />
            </div>
          </div>

          <Results />
          <FAQ />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Vision />
          <CTA />
          <Closing />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
