"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        // Random increment for a more organic loading feel
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#05060A]"
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo Drawing */}
          <div className="w-32 h-32 mb-8 relative">
             <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full stroke-primary"
                strokeWidth="2"
                fill="none"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M20 80 L50 20 L80 80"
                  variants={{
                    hidden: { pathLength: 0 },
                    visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } }
                  }}
                />
             </motion.svg>
          </div>
          
          {/* Counter */}
          <div className="text-4xl md:text-6xl font-display font-bold text-white">
            {Math.min(progress, 100)}%
          </div>
          
          <div className="absolute bottom-12 text-sm text-foreground/50 uppercase tracking-widest font-medium">
            Engineering the Future
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
