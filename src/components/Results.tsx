import { motion } from "framer-motion";

const metrics = [
  { val: "+30", lbl: "Lanzamientos en 2.5 años" },
  { val: "2–3", lbl: "Lanzamientos por mes" },
  { val: "7", lbl: "Con este sistema" },
  { val: "3", lbl: "Nichos validados" },
  { val: "+10–20%", lbl: "Mejora en asistencia" },
  { val: "+5–15%", lbl: "Mejora en tasa de compra" },
];

export const Results = () => {
  return (
    <section id="resultados" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Resultados reales
          </div>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Esto no nace de una idea bonita.<br />
            Nace de lo que ya hemos visto <span className="italic text-accent-light">funcionar.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 100, damping: 20 }}
              className="relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center backdrop-blur-sm"
            >
              <div className="mb-2 font-serif text-3xl font-bold text-accent-light md:text-4xl">
                {m.val}
              </div>
              <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                {m.lbl}
              </div>
              <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-accent transition-all group-hover:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
