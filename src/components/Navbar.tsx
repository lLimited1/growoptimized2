import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Menu, X } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { usePerformance } from "../hooks/usePerformance";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tier = usePerformance();

  const navLinks = [
    { name: "El problema", href: "#problema" },
    { name: "Ecosistema", href: "#ecosistema" },
    { name: "Método", href: "#metodo" },
    { name: "Resultados", href: "#resultados" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6"
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 ${tier === "high" ? "backdrop-blur-xl" : "backdrop-blur-md"} md:px-6 md:py-3`}>
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent shadow-[0_0_15px_rgba(124,92,252,0.5)]">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span>GrowLab AI</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="transition-colors hover:text-white">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton
              onClick={() => window.open("https://growlab.us/form-page", "_blank")}
              className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,92,252,0.3)] transition-all hover:shadow-[0_0_30px_rgba(124,92,252,0.5)] sm:block"
            >
              Simular ecosistema
            </MagneticButton>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 px-6 pt-24 backdrop-blur-2xl md:hidden"
          >
            <div className="flex w-full flex-col items-center gap-8 text-center text-2xl font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <MagneticButton
                onClick={() => window.open("https://growlab.us/form-page", "_blank")}
                className="mt-4 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(124,92,252,0.4)]"
              >
                Simular ecosistema
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
