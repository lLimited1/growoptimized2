import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Revisamos tus números y tu forma de lanzar",
    desc: "Vemos cuántos leads generas, cuántos llegan al vivo, qué capacidad tiene tu equipo y dónde se escapan más oportunidades.",
  },
  {
    num: "02",
    title: "Diseñamos el sistema según tu realidad",
    desc: "Porque no es lo mismo manejar 4.000 leads que 50.000. Y como no es lo mismo, tampoco debería usarse la misma lógica para todo el mundo.",
  },
  {
    num: "03",
    title: "Montamos el ecosistema para tu lanzamiento",
    desc: "Adaptamos la estructura, cargamos el contexto del evento, la oferta, el experto y dejamos el sistema listo para acompañar al lead.",
  },
  {
    num: "04",
    title: "Acompañamos la ejecución",
    desc: "Nos metemos en el lanzamiento contigo, vemos cómo responde la gente, ajustamos lo necesario y hacemos que sume donde importa.",
  },
];

export const Method = () => {
  return (
    <section id="metodo" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-accent/5 blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Nuestro método
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            Así lo trabajamos <span className="font-serif italic font-medium text-accent-light">contigo</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/50 font-light leading-relaxed">
            Primero entendemos tu lanzamiento. Después construimos lo que realmente necesitas para escalar tu facturación de forma previsible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl font-display font-bold text-white shadow-[0_0_20px_rgba(124,92,252,0.3)] group-hover:shadow-[0_0_30px_rgba(124,92,252,0.5)] transition-all">
                {step.num}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-accent-light transition-colors">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
