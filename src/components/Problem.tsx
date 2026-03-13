import { motion } from "motion/react";
import { Users, MessageCircle, TrendingUp, AlertCircle } from "lucide-react";
import { FC, ReactNode } from "react";
import { Card } from "./ui/card";

interface ProblemCardProps {
  title: string;
  description: string[];
  icon?: ReactNode;
}

const ProblemCard: FC<ProblemCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full">
      <Card className="text-white rounded-2xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-accent/30 hover:shadow-accent/5 hover:shadow-3xl w-full h-full min-h-[320px]">

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-accent/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-[bounce_4s_infinite]"></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-accent/5 blur-xl animate-[ping_5s_infinite]"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-accent/5 blur-lg animate-[ping_6s_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        <div className="p-8 relative z-10 flex flex-col items-center text-center h-full">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-[ping_4s_infinite]"></div>
            <div className="absolute inset-0 rounded-full border border-accent/10 animate-[pulse_4s_infinite]"></div>
            <div className="p-6 rounded-full backdrop-blur-lg border border-accent/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-accent/20">
              <div className="transform group-hover:rotate-180 transition-transform duration-700 text-accent-light">
                {icon}
              </div>
            </div>
          </div>
          <h3 className="mb-4 text-xl font-bold bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent animate-[pulse_5s_infinite] transform group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>
          <div className="space-y-1 max-w-sm flex-grow">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-sm leading-relaxed transform group-hover:text-white transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>
          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>
        </div>

        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const Problem = () => {
  const problems = [
    {
      icon: <Users className="h-6 w-6 text-white" strokeWidth={1.5} />,
      title: "Baja Asistencia",
      description: ["Hay miles de personas registradas… pero una gran parte no llega a la clase."]
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" strokeWidth={1.5} />,
      title: "Falta de Seguimiento",
      description: ["Hay gente interesada… pero no recibe seguimiento suficiente."]
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-white" strokeWidth={1.5} />,
      title: "Equipo Saturado",
      description: ["El equipo no da abasto para responder con la velocidad que el carrito exige."]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" strokeWidth={1.5} />,
      title: "Pérdida de Fuerza",
      description: ["El lanzamiento pierde fuerza porque no hubo estructura para sostenerlo."]
    }
  ];

  return (
    <section id="problema" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 text-center md:text-left"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase md:justify-start justify-center">
            <div className="h-[1px] w-8 bg-accent" />
            El problema real
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            El problema no es que te falten leads.<br />
            El problema es todo lo que se te está <span className="font-serif italic font-medium text-accent-light">escapando después.</span>
          </h2>
          <p className="max-w-2xl text-lg text-white/60">
            Muchos expertos creen que su problema está en captar más. Pero cuando revisan el lanzamiento por dentro, se encuentran con que el dinero se queda sobre la mesa por falta de estructura.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {problems.map((prob, index) => (
            <ProblemCard
              key={index}
              title={prob.title}
              description={prob.description}
              icon={prob.icon}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 rounded-3xl border-l-4 border-accent bg-gradient-to-r from-accent/10 to-transparent p-8 md:p-12"
        >
          <p className="font-serif text-2xl italic font-medium leading-relaxed text-white/90 md:text-3xl">
            "Cuando un lead no llega, no responde o se enfría, no solo pierdes una conversación. <span className="text-accent-light not-italic font-display font-bold">Pierdes una oportunidad que ya habías pagado."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
