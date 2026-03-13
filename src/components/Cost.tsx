import { motion } from "motion/react";

const costs = [
  {
    num: "01",
    text: "Pagaste para captar esa atención con anuncios y creativos.",
  },
  {
    num: "02",
    text: "Pagaste para llevar a esa persona al registro del evento.",
  },
  {
    num: "03",
    text: "Pagaste para montar la clase, el equipo, la operación, el carrito.",
  },
  {
    num: "04",
    text: "Y aun así, demasiado dinero se quedó sobre la mesa.",
  },
];

export const Cost = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            El costo invisible
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            Cada lead que no asiste o no recibe atención a tiempo hace que tu lanzamiento <span className="font-serif italic font-medium text-accent-light">rinda menos</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/60">
            Porque tú ya hiciste el trabajo pesado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05]"
            >
              <div className="mb-4 font-display text-5xl font-bold text-accent/20 transition-colors group-hover:text-accent/40 tracking-tight">
                {cost.num}
              </div>
              <p className="text-white/80 leading-relaxed">{cost.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 border-l-2 border-accent bg-gradient-to-r from-accent/5 to-transparent p-8"
        >
          <p className="font-serif text-xl italic font-medium leading-relaxed text-white/90 md:text-2xl">
            "No siempre vendes menos porque tu oferta sea mala. <span className="text-accent-light not-italic font-display font-bold">Muchas veces vendes menos porque demasiados leads no llegaron al momento correcto."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
