import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { WebGLShaderBackground } from "./WebGLShaderBackground";

export const CTA = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
      <WebGLShaderBackground />
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full max-w-5xl -translate-x-1/2 bg-accent/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-black/40 p-12 backdrop-blur-3xl md:p-20 shadow-[0_30px_100px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/10"
        >
          <div className="mb-8 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.25em] text-accent uppercase">
            <div className="h-[1px] w-12 bg-accent" />
            Da el siguiente paso
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          <h2 className="mb-8 font-display text-4xl font-bold leading-[1.1] md:text-6xl tracking-tight text-white transition-all">
            Mira cómo se vería este ecosistema dentro de tu <span className="font-serif italic font-medium text-accent-light">próximo lanzamiento</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-white/50 font-light leading-relaxed">
            Esto no es una llamada vacía. Es una sesión estratégica para aterrizar cómo funcionaría este sistema en un lanzamiento como el tuyo, recuperando ventas que hoy estás perdiendo.
          </p>

          <div className="flex flex-col items-center gap-8">
            <MagneticButton
              onClick={() => window.open("https://growlab.us/form-page", "_blank")}
              className="group flex items-center gap-3 rounded-full bg-accent px-12 py-6 text-xl font-bold text-white shadow-[0_0_30px_rgba(124,92,252,0.4)] transition-all hover:shadow-[0_0_60px_rgba(124,92,252,0.6)] hover:scale-105 active:scale-95"
            >
              Quiero simular mi ecosistema
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
            </MagneticButton>
            <p className="max-w-md text-xs leading-relaxed text-white/30 font-medium uppercase tracking-widest">
              exclusivo para expertos e infoproductores escalando
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
