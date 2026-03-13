export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-16 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="font-display text-xl font-bold tracking-tighter text-white">
            Grow<span className="text-accent">Lab</span>
          </div>
          <p className="text-sm font-light tracking-[0.05em] text-white/20 text-center max-w-md">
            © 2026 GrowLab — Ecosistemas de IA para lanzamientos digitales de alto rendimiento.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/10 transition-colors">
            <span className="hover:text-accent cursor-pointer transition-colors text-white/5">Privacidad</span>
            <span className="hover:text-accent cursor-pointer transition-colors text-white/5">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
