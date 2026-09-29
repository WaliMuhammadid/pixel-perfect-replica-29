"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Fintech", "Web3", "Fitness", "Automotive"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter) || p.tags.includes(filter));

  return (
    <SmoothScroll>
      <Cursor />
      <div className="noise-bg" />
      <Navbar />
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            OUR <span className="text-primary">WORK</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-12">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  filter === c 
                    ? "bg-primary border-primary text-white" 
                    : "bg-white/5 border-white/10 hover:border-white/30 text-foreground/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.slug}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className={`w-full aspect-[4/3] rounded-3xl ${project.image} mb-6 overflow-hidden relative glass-glow`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                      <p className="text-foreground/60">{project.category}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all group-hover:-rotate-45">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
