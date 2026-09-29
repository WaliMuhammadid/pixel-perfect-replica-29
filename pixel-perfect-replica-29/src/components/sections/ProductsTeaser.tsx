"use client";

import { motion } from "framer-motion";
import { productsData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProductsTeaser() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Softadex Labs</h2>
          <p className="text-foreground/70 text-lg max-w-xl">
            Beyond client work, we incubate and launch our own digital products that solve complex industry problems.
          </p>
        </div>
        <Link 
          href="/products"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors"
        >
          View all products <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {productsData.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass-card p-8 flex flex-col justify-between aspect-square group overflow-hidden relative`}
          >
            <div className={`absolute inset-0 ${product.image} opacity-50 mix-blend-overlay transition-opacity group-hover:opacity-80`} />
            
            <div className="relative z-10 flex justify-between items-start">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
                {product.status}
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all">
                 <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="font-display text-3xl font-bold mb-3">{product.name}</h3>
              <p className="text-white/70 line-clamp-2">
                {product.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
