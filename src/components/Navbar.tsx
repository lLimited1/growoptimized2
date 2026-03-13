import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-3 backdrop-blur-md">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent shadow-[0_0_15px_rgba(124,92,252,0.5)]">
            <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          GrowLab
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
          <a href="#problema" className="transition-colors hover:text-white">El problema</a>
          <a href="#ecosistema" className="transition-colors hover:text-white">Ecosistema</a>
          <a href="#metodo" className="transition-colors hover:text-white">Método</a>
          <a href="#resultados" className="transition-colors hover:text-white">Resultados</a>
          <a href="#faq" className="transition-colors hover:text-white">FAQs</a>
        </div>

        <MagneticButton className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,92,252,0.3)] transition-all hover:shadow-[0_0_30px_rgba(124,92,252,0.5)]">
          Simular ecosistema
        </MagneticButton>
      </div>
    </motion.nav>
  );
};
