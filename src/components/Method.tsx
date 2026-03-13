import { motion } from "framer-motion";

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
    <section id="metodo" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Nuestro método
          </div>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Así lo trabajamos <span className="italic text-accent-light">contigo</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/60">
            Primero entendemos tu lanzamiento. Después construimos lo que realmente necesitas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-xl font-bold text-white shadow-[0_0_15px_rgba(124,92,252,0.3)]">
                {step.num}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
