"use client";

import { motion } from "framer-motion";

export default function MarqueeSection() {
  const clients = [
    "Google", "Microsoft", "Amazon", "Netflix", "Spotify", "Stripe", "Vercel", "Figma", "Framer", "Linear"
  ];

  return (
    <section className="py-12 overflow-hidden border-y border-white/5 bg-white/[0.01]">
      <div className="flex relative">
        <motion.div
          className="flex flex-shrink-0 min-w-full items-center justify-around gap-16 px-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {clients.map((client, i) => (
            <span key={i} className="text-2xl font-display font-bold text-foreground/30 uppercase tracking-widest">
              {client}
            </span>
          ))}
        </motion.div>
        
        <motion.div
          className="flex flex-shrink-0 min-w-full items-center justify-around gap-16 px-8 absolute top-0 left-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {clients.map((client, i) => (
            <span key={`clone-${i}`} className="text-2xl font-display font-bold text-foreground/30 uppercase tracking-widest">
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
