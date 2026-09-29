"use client";

import { motion } from "framer-motion";

export default function Careers() {
  const roles = [
    { title: "Senior Creative Developer", dept: "Engineering", location: "Remote / Karachi", type: "Full-time" },
    { title: "UI/UX Motion Designer", dept: "Design", location: "Remote", type: "Full-time" },
    { title: "AI Prompt Engineer", dept: "Softadex Labs", location: "Karachi", type: "Contract" },
  ];

  return (
    <>
      
      
      
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            JOIN THE <span className="text-primary">VISION</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            We are always looking for exceptional talent to join our mission of engineering the future of digital experience.
          </p>
        </motion.div>

        <section className="mb-32">
          <h2 className="font-display text-4xl font-bold mb-12">Open Roles</h2>
          <div className="flex flex-col gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{role.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                    <span className="font-medium">{role.dept}</span>
                    <span className="opacity-50">•</span>
                    <span>{role.location}</span>
                    <span className="opacity-50">•</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 rounded-full border border-white/20 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all font-medium shrink-0">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      
    </>
  );
}
