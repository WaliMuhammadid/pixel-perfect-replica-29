"use client";

import { use } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const nextProject = projectsData[(projectsData.indexOf(project) + 1) % projectsData.length];

  return (
    <SmoothScroll>
      <Cursor />
      <div className="noise-bg" />
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className={`pt-40 pb-32 px-6 ${project.image} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
             <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold uppercase tracking-widest mb-8 inline-block">
                 {project.category}
               </span>
               <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8">{project.title}</h1>
               <div className="flex flex-wrap justify-center gap-4">
                 {project.tags.map(t => (
                   <span key={t} className="px-4 py-1 rounded-full border border-white/10 text-white/70 text-sm">{t}</span>
                 ))}
               </div>
             </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
             <div className="md:col-span-2">
               <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
               <p className="text-foreground/70 text-lg leading-relaxed">{project.overview}</p>
             </div>
             <div>
               <h3 className="font-bold mb-4 text-primary uppercase tracking-widest">Tech Stack</h3>
               <ul className="flex flex-col gap-2 text-foreground/70">
                 {project.tech.map(t => <li key={t}>{t}</li>)}
               </ul>
             </div>
           </div>

           <div className="mb-24">
             <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
             <p className="text-foreground/70 text-lg leading-relaxed">{project.challenge}</p>
           </div>

           <div className="mb-24">
             <h2 className="text-3xl font-display font-bold mb-6">The Solution</h2>
             <p className="text-foreground/70 text-lg leading-relaxed">{project.solution}</p>
           </div>

           <div>
             <h2 className="text-3xl font-display font-bold mb-6">Results</h2>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {project.results.map((r, i) => (
                 <div key={i} className="glass-card p-8 border-primary/20 bg-primary/5">
                   <p className="font-bold text-xl">{r}</p>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Next Project */}
        <section className="py-32 px-6 text-center border-t border-white/5 bg-white/[0.01]">
          <p className="text-foreground/50 uppercase tracking-widest font-bold mb-6">Next Project</p>
          <Link href={`/projects/${nextProject.slug}`} className="group inline-flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 group-hover:text-primary transition-colors">
              {nextProject.title}
            </h2>
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6 group-hover:-rotate-45 transition-transform" />
            </div>
          </Link>
        </section>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
