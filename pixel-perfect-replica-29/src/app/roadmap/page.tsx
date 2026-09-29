"use client";

import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import { motion, useScroll, useTransform } from "framer-motion";
import { roadmapData } from "@/lib/data";

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SmoothScroll>
      <Cursor />
      <div className="noise-bg" />
      <Navbar />
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            THE <span className="text-primary">FUTURE</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Our strategic vision and technological roadmap for 2026 and beyond. We are building the infrastructure for the next era of the web.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative py-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ height: pathHeight }} 
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-secondary -translate-x-1/2 hidden md:block shadow-[0_0_15px_rgba(124,92,255,0.8)] rounded-full" 
          />

          <div className="flex flex-col gap-24">
            {roadmapData.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                     <div className="w-6 h-6 rounded-full bg-background border-4 border-white/20 z-10" />
                  </div>

                  <div className={`md:w-1/2 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-card p-8 text-left max-w-md w-full relative"
                    >
                      <div className="text-primary font-bold tracking-widest uppercase mb-4">{item.quarter}</div>
                      <h3 className="font-display text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
