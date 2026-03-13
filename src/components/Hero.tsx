"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, ArrowRight, Zap, MessageSquare, Clock } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { usePerformance } from "../hooks/usePerformance";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
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

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const tier = usePerformance();

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* SVG Filters from 21st.dev */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="glass-effect">
            {tier !== "low" && <feGaussianBlur stdDeviation="1" />}
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
            />
          </filter>
          <filter id="text-glow">
            <feGaussianBlur stdDeviation={tier === "high" ? 2 : 1} result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Mesh Gradient Backgrounds */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={tier === "low" ? ["#06060c", "#1e3a8a", "#06060c"] : ["#06060c", "#2e1065", "#1e3a8a", "#06060c", "#06060c"]}
          speed={tier === "high" ? 0.2 : 0.1}
          backgroundcolor="#06060c"
        />
        {tier !== "low" && (
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-10 md:opacity-20"
            colors={["#06060c", "#4c1d95", "#1e3a8a", "#06060c"]}
            speed={0.1}
            wireframe="false"
            backgroundcolor="transparent"
          />
        )}
        {/* Bottom Fade Overlay to smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#06060c] via-[#06060c]/95 to-transparent pointer-events-none z-[1]" />
      </div>

      {/* Original Radial Glows (kept for depth, but reduced opacity) */}
      <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-full max-w-[800px] -translate-x-1/2 bg-accent/10 blur-[120px] md:h-[500px]" />
      <div className="absolute top-[20%] right-0 -z-10 h-[300px] w-[300px] bg-blue-500/5 blur-[100px] md:h-[400px] md:w-[400px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center z-20"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold tracking-widest text-accent-light uppercase backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
          IA para lanzamientos digitales
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mx-auto mb-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.15] tracking-tight md:text-6xl text-white"
          style={{
            filter: (tier === "high" && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
              ? "url(#text-glow)"
              : "none"
          }}
        >
          No necesitas solo más leads.<br />
          Necesitas que más de esos leads <span className="font-serif italic font-medium text-accent-light">lleguen, respondan y compren.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mx-auto mb-10 max-w-xl text-sm italic text-white/40">
          Porque una cosa es llenar una lista. Y otra muy distinta es mover esa lista de verdad.
        </motion.p>

        {/* Video Player */}
        <motion.div variants={itemVariants} className="relative mx-auto max-w-4xl mb-12">
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-accent via-blue-500 to-accent opacity-30 blur-xl" />
          <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">
            {!isVideoPlaying ? (
              /* Video Cover / Placeholder */
              <div className="group/video relative flex h-full w-full items-center justify-center bg-gradient-to-b from-transparent to-black/60 cursor-pointer overflow-hidden">
                {/* Video Thumbnail */}
                <img
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover/video:scale-105"
                />

                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoPlaying(true)}
                  className="relative flex h-24 w-24 items-center justify-center rounded-full bg-accent text-white shadow-[0_0_40px_rgba(124,92,252,0.6)] z-10"
                >
                  <div className="absolute -inset-4 animate-pulse rounded-full border border-accent/20" />
                  <Play className="ml-1 h-10 w-10 fill-current text-white" />
                </motion.button>
              </div>
            ) : (
              /* Actual Video Embed */
              <div className="h-full w-full">
                {/*
                  REPLACE THE ID BELOW WITH YOUR YOUTUBE VIDEO ID
                  Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID is "dQw4w9WgXcQ"
                */}
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 flex flex-wrap justify-center gap-4">
          <MagneticButton
            onClick={() => window.open("https://growlab.us/form-page", "_blank")}
            className="group flex items-center gap-2 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-[0_0_30px_rgba(124,92,252,0.4)] transition-all hover:shadow-[0_0_50px_rgba(124,92,252,0.6)]"
          >
            Quiero ver cómo funcionaría en mi lanzamiento
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </motion.div>

        <motion.p variants={itemVariants} className="mx-auto mb-16 max-w-md text-xs text-white/30">
          Completa el formulario y descubre cómo se vería este sistema dentro de tu próximo lanzamiento.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-8 text-sm font-medium text-white/50">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent" strokeWidth={1.5} />
            Más personas en tu evento en vivo
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-accent" strokeWidth={1.5} />
            Seguimiento sin depender de lo manual
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" strokeWidth={1.5} />
            Más capacidad cuando toca vender
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};
