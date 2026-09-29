"use client";

import { motion } from "framer-motion";
import { productsData } from "@/lib/data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Products() {
  return (
    <>
      
      
      
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <span className="text-primary font-bold tracking-widest uppercase mb-4 inline-block">Softadex Labs</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PRODUCTS</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Proprietary solutions built to disrupt industries and solve complex problems at scale.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`glass-card overflow-hidden flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className={`lg:w-1/2 ${product.image} p-12 flex items-center justify-center relative min-h-[400px]`}>
                 <div className="absolute top-6 left-6 px-4 py-1 bg-black/40 backdrop-blur border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                   {product.status}
                 </div>
                 {/* Mockup Placeholder */}
                 <div className="w-3/4 aspect-video bg-white/10 rounded-xl border border-white/20 shadow-2xl backdrop-blur-md flex items-center justify-center">
                   <span className="font-display text-4xl font-bold opacity-30">{product.name} UI</span>
                 </div>
              </div>
              
              <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-4xl font-display font-bold mb-6">{product.name}</h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="space-y-4 mb-12">
                  {product.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2 group">
                    Explore {product.name}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      
    </>
  );
}
