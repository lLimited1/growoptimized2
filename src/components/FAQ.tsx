import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "\"Ya tengo equipo comercial\"",
    a: "Buenísimo. Esto no busca reemplazar a tu equipo. Busca que no se quede corto cuando el volumen sube. Porque cuando entran muchas personas al mismo tiempo, por muy bueno que sea el equipo, llega un punto donde la velocidad baja, el seguimiento se rompe y se pierden oportunidades.",
  },
  {
    q: "\"Ya hacemos seguimiento\"",
    a: "Seguramente sí. La pregunta es si ese seguimiento realmente aguanta el volumen de un lanzamiento sin perder calidad, velocidad y constancia. Una cosa es seguir bien a 100 personas. Otra muy distinta es mover a miles en medio del evento y del carrito.",
  },
  {
    q: "\"No sé si esto me va a dar retorno\"",
    a: "Es válido. Pero cuando subes un 10% o 15% la asistencia en una lista grande, eso puede representar cientos de personas más entrando al momento importante. Y si una parte compra, esto deja de verse como costo y empieza a verse como recuperación de oportunidad.",
  },
  {
    q: "\"Suena complejo\"",
    a: "Por dentro lo es. Pero esa no es tu preocupación. Nosotros absorbemos la complejidad para que tú no tengas que volverte técnico. Tú enfócate en lanzar. Nosotros en ayudarte a que ese lanzamiento rinda mejor.",
  },
  {
    q: "\"No sé si esto aplica a mi nicho\"",
    a: "Más que el nicho, importa la estructura. Si haces lanzamientos, manejas volumen y sientes que parte de la lista no está llegando, no está respondiendo o no está siendo atendida como debería, esto puede hacer mucho sentido para ti.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 blur-[80px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Preguntas frecuentes
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            Si estás pensando esto, <span className="font-serif italic font-medium text-accent-light">te entiendo</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/50 font-light leading-relaxed">
            Resolvemos las dudas más comunes para que solo te preocupes por lo que realmente importa: tu lanzamiento.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5 first:border-t">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group flex w-full items-center justify-between py-8 text-left transition-all hover:px-2"
              >
                <span className={`text-xl font-medium transition-colors ${openIndex === i ? "text-accent-light" : "text-white/80 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === i ? 45 : 0,
                    backgroundColor: openIndex === i ? "rgba(124, 92, 252, 0.1)" : "transparent",
                    borderColor: openIndex === i ? "rgba(124, 92, 252, 0.3)" : "rgba(255, 255, 255, 0.1)"
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors"
                >
                  <Plus className={`h-5 w-5 transition-colors ${openIndex === i ? "text-accent-light" : "text-white/40"}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg font-light text-white/40 leading-relaxed pl-2 pr-12">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
