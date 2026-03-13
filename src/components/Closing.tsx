import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export const Closing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-12 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white"
          >
            Tu próximo lanzamiento puede seguir igual… o puede empezar a recuperar parte de lo que hoy se está <span className="font-serif italic font-medium text-accent-light">perdiendo.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-lg text-white/60"
          >
            <p>
              Si ya estás invirtiendo en tráfico… si ya estás construyendo listas… si ya estás montando eventos, clases, equipo y apertura de carrito…
            </p>
            <p>
              Entonces probablemente el siguiente salto no está solo en meter más presupuesto. <strong className="text-white font-medium">Muchas veces está en hacer que lo que ya generas rinda mejor.</strong>
            </p>
            <p>
              Porque cuando más personas llegan al vivo, cuando más leads reciben seguimiento y cuando más conversaciones se sostienen bien en el momento clave, el lanzamiento cambia.
            </p>
            <p>
              No por suerte. No por una promesa bonita. <strong className="text-white font-medium">Sino porque ahora tienes una estructura que acompaña mejor lo que antes se te estaba yendo de las manos.</strong>
            </p>

            <p className="font-serif text-2xl italic text-accent-light">
              Y eso, cuando lanzas en serio, se siente.
            </p>

            <div className="pt-8">
              <MagneticButton
                onClick={() => window.open("https://growlab.us/form-page", "_blank")}
                className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(124,92,252,0.4)] transition-all hover:shadow-[0_0_50px_rgba(124,92,252,0.6)]"
              >
                Ver mi simulación
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
