"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the 3D scene with SSR disabled
const Scene = dynamic(() => import("../canvas/Scene"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Scene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Engineering the Future
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-bold leading-[0.9] tracking-tighter mb-8"
          style={{ fontSize: "clamp(56px, 10vw, 160px)" }}
        >
          WE BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            DIGITAL EXCELLENCE
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-foreground/70 mb-12"
        >
          Softadex is a premium digital agency crafting cinematic websites, mobile applications, and AI products for visionary brands.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 glass-glow"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 active:scale-95"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
