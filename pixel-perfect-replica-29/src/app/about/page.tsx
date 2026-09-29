"use client";

import { motion } from "framer-motion";

export default function About() {
  const team = [
    { name: "Ali Khan", role: "CEO & Founder", image: "bg-neutral-800" },
    { name: "Sara Ahmed", role: "Design Director", image: "bg-neutral-700" },
    { name: "Omar Tariq", role: "Lead Engineer", image: "bg-neutral-900" },
    { name: "Fatima Noor", role: "AI Specialist", image: "bg-neutral-800" },
  ];

  return (
    <>
      
      
      
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            BEYOND <span className="text-primary">EXPECTATIONS</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed">
            We are a collective of designers, engineers, and visionaries. Our mission is to elevate brands by engineering digital experiences that are as beautiful as they are functional.
          </p>
        </motion.div>

        {/* Values */}
        <section className="mb-32">
          <h2 className="font-display text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {["Relentless Innovation", "Pixel Perfection", "Uncompromising Performance"].map((val, i) => (
                <div key={i} className="glass-card p-8">
                  <div className="text-primary font-display text-5xl font-bold mb-4 opacity-30">0{i+1}</div>
                  <h3 className="text-2xl font-bold mb-4">{val}</h3>
                  <p className="text-foreground/60">
                    We push the boundaries of what&apos;s possible on the web, never settling for &apos;good enough&apos; when &apos;extraordinary&apos; is within reach.
                  </p>
                </div>
             ))}
          </div>
        </section>

        {/* Team Grid */}
        <section className="mb-32">
          <h2 className="font-display text-4xl font-bold mb-12">The Minds Behind The Magic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`aspect-[3/4] ${member.image} rounded-2xl mb-6 overflow-hidden relative glass-glow`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 backdrop-blur-sm">
                    <span className="font-bold tracking-widest uppercase">View Profile</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      
    </>
  );
}
