"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      
      
      
      
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary font-display font-bold text-9xl md:text-[200px] leading-none mb-8 opacity-80"
        >
          404
        </motion.div>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Lost in the Void</h1>
        <p className="text-foreground/70 text-lg mb-12 max-w-md mx-auto">
          The page you are looking for has evaporated into the digital ether. Let&apos;s get you back on track.
        </p>
        
        <Link 
          href="/"
          className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-primary hover:text-white transition-all glass-glow"
        >
          Return Home
        </Link>
      </main>
      
      
    </>
  );
}
