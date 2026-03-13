import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Cost } from "./components/Cost";
import { Approach } from "./components/Approach";
import { Solution } from "./components/Solution";
import { Method } from "./components/Method";
import { Difference } from "./components/Difference";
import { Results } from "./components/Results";
import { FAQ } from "./components/FAQ";
import { Vision } from "./components/Vision";
import { CTA } from "./components/CTA";
import { Closing } from "./components/Closing";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-accent/30 selection:text-accent-light">
      {/* Background Effects */}
      <div className="mesh-gradient" />
      <div className="noise" />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-accent"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Section Divider Glow - Enhanced for smoother transition */}
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
        
        <div className="relative py-12 flex justify-center">
           <div className="h-32 w-32 rounded-full border border-white/5 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-accent/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="h-4 w-4 rounded-full bg-accent shadow-[0_0_20px_rgba(124,92,252,0.8)]" />
           </div>
        </div>

        <Results />
        
        <FAQ />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Vision />
        
        <CTA />

        <Closing />
      </main>

      <Footer />
    </div>
  );
}
