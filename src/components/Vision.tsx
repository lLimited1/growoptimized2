import { motion } from "motion/react";

export const Vision = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            El nuevo estándar
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            Los lanzamientos que más van a crecer no serán solo los que tengan más tráfico.<br />
            Serán los que mejor sepan <span className="font-serif italic font-medium text-accent-light">acompañar a su gente.</span>
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-white/50 font-light leading-relaxed">
            <p>
              La atención será cada vez más costosa. La competencia será cada vez más fuerte. Y la improvisación va a costar cada vez más caro.
            </p>
            <p>
              La verdadera ventaja competitiva estará en quién logra mover mejor al lead desde que se registra hasta que toma la decisión final de compra.
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
            <p className="font-serif text-2xl italic font-medium leading-relaxed text-white/90 md:text-3xl">
              "La inteligencia artificial no viene a quitarle alma a tu lanzamiento. <span className="text-accent-light not-italic font-display font-bold">Viene a darle estructura a una parte que hoy se te puede estar escapando."</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
