import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { WebGLShaderBackground } from "./WebGLShaderBackground";

export const CTA = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <WebGLShaderBackground />
      <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 bg-accent/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-[3rem] border border-white/10 bg-white/[0.02] p-12 backdrop-blur-3xl md:p-20"
        >
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Da el siguiente paso
          </div>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Mira cómo se vería este ecosistema dentro de tu <span className="italic text-accent-light">próximo lanzamiento</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
            Esto no es una llamada vacía. No es una demo genérica. Es una forma de aterrizar cómo funcionaría este sistema en un lanzamiento como el tuyo.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <MagneticButton className="group flex items-center gap-2 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-[0_0_30px_rgba(124,92,252,0.4)] transition-all hover:shadow-[0_0_50px_rgba(124,92,252,0.6)]">
              Quiero simular mi ecosistema
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <p className="max-w-md text-xs leading-relaxed text-white/30">
              Pensado para expertos, infoproductores, launch managers y negocios digitales que ya hacen lanzamientos y quieren rescatar más asistencia, responder mejor y vender más.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
