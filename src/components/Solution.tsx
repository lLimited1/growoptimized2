import { motion } from "motion/react";
import { Mail, Eye, MessageSquare, ShoppingCart, ShieldCheck } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const Solution = () => {
  return (
    <section id="ecosistema" className="relative py-24">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-accent/10 blur-[150px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            La solución
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            Implementamos ecosistemas de IA para <span className="font-serif italic font-medium text-accent-light">lanzamientos digitales</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/60">
            No para meter tecnología por meter. Sino para ayudarte a recuperar una parte de las ventas que hoy se te están escapando.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <GlassCard className="group">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 transition-colors group-hover:bg-accent/20">
              <Mail className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Seguimiento desde el registro</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Para que no entre a tu lista y luego quede suelta entre miles de contactos sin una conversación que la mueva.
            </p>
          </GlassCard>

          <GlassCard className="group">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 transition-colors group-hover:bg-accent/20">
              <Eye className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Aumentar el show-up al vivo</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Porque no es lo mismo tener una lista grande que tener personas realmente activadas para llegar.
            </p>
          </GlassCard>

          <GlassCard className="group">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 transition-colors group-hover:bg-accent/20">
              <MessageSquare className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Conversaciones con sentido</h3>
            <p className="text-sm leading-relaxed text-white/60">
              No mensajes vacíos. Conversaciones conectadas con tu experto, tu promesa, tu evento y tu oferta.
            </p>
          </GlassCard>

          <GlassCard className="group">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 transition-colors group-hover:bg-accent/20">
              <ShoppingCart className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Sostener la apertura de carrito</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Cuando entran muchas preguntas al mismo tiempo, si la operación se pone pesada, la conversión sufre.
            </p>
          </GlassCard>

          <GlassCard className="group lg:col-span-2">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 transition-colors group-hover:bg-accent/20">
              <ShieldCheck className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Liberar presión del equipo</h3>
            <p className="text-sm leading-relaxed text-white/60">
              No para reemplazarlo, sino para que se concentre en lo que realmente necesita toque humano. El sistema absorbe el 80% de las dudas frecuentes.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

