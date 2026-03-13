import { motion } from "motion/react";
import { BookOpen, Code } from "lucide-react";

export const Difference = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl bg-accent/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Nuestra diferencia
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            Nuestra diferencia no es solo que sabemos de IA.<br />
            Nuestra diferencia es que sabemos de <span className="font-serif italic font-medium text-accent-light">lanzamientos.</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/50 font-light leading-relaxed">
            Hay muchas personas que saben de herramientas. Y también hay muchas que saben producir lanzamientos. Pero casi nadie domina las dos cosas al mismo tiempo con la precisión que el mercado exige hoy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-10 transition-all hover:bg-white/[0.05] hover:border-white/10"
          >
            <div className="mb-6 flex items-center gap-3 text-accent-light">
              <div className="p-2 rounded-lg bg-accent/10">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em]">Sabemos de lanzamientos</h4>
            </div>
            <ul className="space-y-4 text-white/60">
              {[
                "Cómo se comporta una lista",
                "Qué pasa antes de una clase en vivo",
                "Qué pasa cuando se abre carrito",
                "La presión cuando entran mensajes por todos lados",
                "Lo frustrante de tener miles de leads y no poder moverlos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(124,92,252,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-10 transition-all hover:bg-white/[0.05] hover:border-white/10"
          >
            <div className="mb-6 flex items-center gap-3 text-accent-light">
              <div className="p-2 rounded-lg bg-accent/10">
                <Code className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em]">Y sabemos implementar IA</h4>
            </div>
            <ul className="space-y-4 text-white/60">
              {[
                "Implementación técnica completa",
                "Adaptación a distintos volúmenes",
                "Operación bajo presión real",
                "Más de 25 lanzamientos producidos por año",
                "Validación en múltiples nichos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(124,92,252,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 group relative"
        >
          <div className="absolute inset-0 bg-accent/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative border-l-4 border-accent bg-white/[0.03] p-10 backdrop-blur-sm rounded-r-2xl border-y border-r border-white/5">
            <p className="font-serif text-2xl italic font-medium leading-relaxed text-white/90 md:text-3xl">
              "No somos una empresa que aprendió IA y quiere probar suerte en lanzamientos. <span className="text-accent-light not-italic font-display font-bold">Somos gente que ya vive los lanzamientos y entendió cómo usar la IA para hacerlos rendir mejor."</span>
            </p>
          </div>
        </motion.div>
      </div >
    </section >
  );
};
