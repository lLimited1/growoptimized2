import { motion } from "motion/react";

export const Approach = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            La nueva forma de lanzar
          </div>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-6xl uppercase tracking-tight">
            Hoy ya no gana solo el que capta más.<br />
            Gana el que mejor sabe <span className="text-accent-light text-glow">mover a sus leads.</span>
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-white/60 leading-relaxed font-light">
            <p>
              El mercado cambió. Hoy la atención vale más. La competencia es más dura. Los leads comparan más. Y responder tarde cuesta más.
            </p>
            <p>
              Si todo el proceso depende de recordar, escribir, responder y hacer seguimiento manualmente, tarde o temprano el volumen te pasa por encima. Y ahí es donde muchos lanzamientos se frenan.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative border-l-4 border-accent bg-white/[0.03] p-10 backdrop-blur-sm rounded-r-2xl border-y border-r border-white/5">
            <p className="font-display text-2xl font-bold italic text-white/90 md:text-4xl leading-snug uppercase tracking-tight">
              "Una lista grande sin seguimiento es solo una oportunidad mal aprovechada."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
