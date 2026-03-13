import { motion } from "motion/react";

export const Approach = () => {
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
            La nueva forma de lanzar
          </div>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Hoy ya no gana solo el que capta más.<br />
            Gana el que mejor sabe <span className="italic text-accent-light">mover a sus leads.</span>
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-white/60">
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
          viewport={{ once: true }}
          className="border-l-2 border-accent bg-gradient-to-r from-accent/5 to-transparent p-8"
        >
          <p className="font-serif text-xl italic text-white/90 md:text-2xl">
            "Una lista grande sin seguimiento es solo una oportunidad mal aprovechada."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
