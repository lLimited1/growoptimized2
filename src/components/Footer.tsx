import { Zap, ArrowRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-20 bg-black/20 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent/5 blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent shadow-[0_0_15px_rgba(124,92,252,0.5)]">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            Grow<span className="text-accent">Lab</span>
          </div>

          <p className="text-gray-400 text-center max-w-md font-light">
            ¿Listo para llevar tu lanzamiento al siguiente nivel con inteligencia artificial activa?
          </p>

          <div className="h-[1px] w-full max-w-xl bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <p className="text-sm font-light tracking-[0.05em] text-white/20 text-center max-w-md">
            © 2026 GrowLab — Ecosistemas de IA para lanzamientos digitales de alto rendimiento.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/10">
            <span className="hover:text-accent cursor-pointer transition-colors text-white/5">Privacidad</span>
            <span className="hover:text-accent cursor-pointer transition-colors text-white/5">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
