"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const techs = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Python", "Three.js", "Flutter", "Framer Motion", "GSAP"];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto text-center overflow-hidden">
      <h2 className="font-display text-4xl font-bold mb-16">The Stack We Master</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {techs.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors hover:border-primary/50 text-foreground/80 cursor-default"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
