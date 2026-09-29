"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <SmoothScroll>
      <Cursor />
      <div className="noise-bg" />
      <Navbar />
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DO BEST</span>
          </h1>
          <p className="text-xl text-foreground/70">
            End-to-end digital solutions that scale, perform, and captivate.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 flex flex-col lg:flex-row gap-12 group hover:border-primary/50 transition-colors"
            >
              <div className="lg:w-1/3">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center font-display text-2xl font-bold mb-6">
                  0{index + 1}
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Get a quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
