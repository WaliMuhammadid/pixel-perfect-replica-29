"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  });

  const text = "We don't just build websites. We engineer digital ecosystems that blur the line between art and technology, driving unimaginable growth for brands ready to step into tomorrow.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} id="about" className="py-32 px-6 max-w-5xl mx-auto min-h-[70vh] flex items-center">
      <p className="font-display text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] flex flex-wrap gap-x-3 md:gap-x-4">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          
          return (
            <motion.span key={i} style={{ opacity }} className="mt-2">
              {word}
            </motion.span>
          );
        })}
      </p>
    </section>
  );
}
