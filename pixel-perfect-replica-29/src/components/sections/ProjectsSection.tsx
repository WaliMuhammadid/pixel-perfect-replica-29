"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Quantum Pay",
    category: "Fintech App",
    image: "bg-gradient-to-br from-indigo-500 to-purple-900"
  },
  {
    title: "Aura AI",
    category: "Generative Platform",
    image: "bg-gradient-to-br from-emerald-400 to-cyan-900"
  },
  {
    title: "Nexus VR",
    category: "Immersive Web",
    image: "bg-gradient-to-br from-orange-500 to-red-900"
  },
  {
    title: "Echo E-Commerce",
    category: "Headless Storefront",
    image: "bg-gradient-to-br from-primary to-secondary"
  }
];

export default function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-background">
        
        <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-foreground/70 text-lg">Swipe to explore our latest masterworks.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12 lg:px-24 mt-24">
          {projects.map((project, i) => (
            <div key={i} className="w-[80vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 group cursor-pointer">
              <div className={`w-full aspect-[4/3] rounded-3xl ${project.image} mb-8 overflow-hidden relative glass-glow`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Simulated Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
                  <span className="font-display text-6xl font-bold">{i + 1}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all group-hover:-rotate-45">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
