import { motion } from "motion/react";

export const Vision = () => {
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
            El nuevo estándar
          </div>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Los lanzamientos que más van a crecer no serán solo los que tengan más tráfico.<br />
            Serán los que mejor sepan <span className="italic text-accent-light">acompañar a su gente.</span>
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-white/60">
            <p>
              La atención será cada vez más costosa. La competencia será cada vez más fuerte. Y la improvisación va a costar cada vez más caro.
            </p>
            <p>
              La ventaja estará en quién logra mover mejor al lead desde que se registra hasta que toma la decisión de compra.
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
            "La inteligencia artificial no viene a quitarle alma a tu lanzamiento. Viene a darle estructura a una parte que hoy se te puede estar escapando."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
