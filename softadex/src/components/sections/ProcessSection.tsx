"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "Deep diving into your brand, market, and user needs." },
  { num: "02", title: "Design", desc: "Crafting pixel-perfect, accessible, and cinematic interfaces." },
  { num: "03", title: "Develop", desc: "Engineering robust, scalable, and high-performance solutions." },
  { num: "04", title: "Deploy", desc: "Rigorous testing and seamless launch to the world." },
  { num: "05", title: "Grow", desc: "Continuous optimization and iteration for exponential success." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 max-w-7xl mx-auto w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="md:sticky md:top-32 h-fit">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-md">
            A battle-tested methodology designed to mitigate risk and maximize creative impact from day one.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors group"
          >
            Start your journey
            <span className="block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        
        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-display font-bold opacity-5 text-white pointer-events-none">
                {step.num}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white relative z-10">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed relative z-10 max-w-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
