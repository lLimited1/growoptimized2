import { motion } from "motion/react";
import { BookOpen, Code } from "lucide-react";

export const Difference = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Nuestra diferencia
          </div>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Nuestra diferencia no es solo que sabemos de IA.<br />
            Nuestra diferencia es que sabemos de <span className="italic text-accent-light">lanzamientos.</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/60">
            Hay muchas personas que saben de herramientas. Y también hay muchas que saben producir lanzamientos. Pero casi nadie domina las dos cosas al mismo tiempo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/5 bg-white/[0.02] p-10"
          >
            <div className="mb-6 flex items-center gap-3 text-accent-light">
              <BookOpen className="h-6 w-6" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Sabemos de lanzamientos</h4>
            </div>
            <ul className="space-y-4 text-white/70">
              {[
                "Cómo se comporta una lista",
                "Qué pasa antes de una clase en vivo",
                "Qué pasa cuando se abre carrito",
                "La presión cuando entran mensajes por todos lados",
                "Lo frustrante de tener miles de leads y no poder moverlos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/5 bg-white/[0.02] p-10"
          >
            <div className="mb-6 flex items-center gap-3 text-accent-light">
              <Code className="h-6 w-6" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Y sabemos implementar IA</h4>
            </div>
            <ul className="space-y-4 text-white/70">
              {[
                "Implementación técnica completa",
                "Adaptación a distintos volúmenes",
                "Operación bajo presión real",
                "Más de 25 lanzamientos producidos por año",
                "Validación en múltiples nichos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-l-2 border-accent bg-gradient-to-r from-accent/5 to-transparent p-8"
        >
          <p className="font-serif text-xl italic text-white/90 md:text-2xl">
            "No somos una empresa que aprendió IA y quiere probar suerte en lanzamientos. Somos gente que ya vive los lanzamientos y entendió cómo usar la IA para hacerlos rendir mejor."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
