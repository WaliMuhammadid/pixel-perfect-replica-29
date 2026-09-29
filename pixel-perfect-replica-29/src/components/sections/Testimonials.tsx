"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Softadex didn't just build our website; they engineered a digital experience that completely transformed how our customers perceive our brand. Absolute visionaries.",
    author: "Elena Rodriguez",
    role: "CMO, Veloce Automotive"
  },
  {
    quote: "Their mastery of 3D web technologies and relentless focus on performance is unmatched. The site is buttery smooth and visually stunning.",
    author: "Marcus Chen",
    role: "Founder, Nexus VR"
  },
  {
    quote: "From discovery to deployment, the Softadex team operated with a level of precision and creativity we hadn't seen before. They delivered a $100k result on time.",
    author: "Sarah Jenkins",
    role: "Product Lead, Aetheris"
  },
  {
    quote: "The React Native app they built for us dominates the charts. It feels completely native, scales perfectly, and the UI is genuinely addictive.",
    author: "Tariq Malik",
    role: "CEO, GymHelp"
  }
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 overflow-hidden border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold">Client Praise</h2>
        <p className="text-foreground/70 text-lg mt-4">Drag to read what visionary leaders say about us.</p>
      </div>

      <div ref={carouselRef} className="cursor-grab active:cursor-grabbing max-w-[100vw] overflow-hidden pl-6 md:pl-12 lg:pl-0">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 lg:ml-[calc((100vw-80rem)/2)]"
        >
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              className="min-w-[85vw] md:min-w-[600px] glass-card p-10 md:p-12 flex flex-col justify-between select-none"
            >
              <div className="mb-12">
                <svg className="w-12 h-12 text-primary opacity-50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl md:text-3xl font-display leading-tight">
                  &quot;{test.quote}&quot;
                </p>
              </div>
              <div>
                <p className="font-bold text-lg">{test.author}</p>
                <p className="text-primary font-medium text-sm tracking-wide uppercase">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
