"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "2,500" : "3,000",
      description: "Perfect for startups needing a robust digital presence.",
      features: ["Custom Web Design", "Next.js Frontend", "Basic Animations", "CMS Integration", "Standard Support"]
    },
    {
      name: "Growth",
      price: isAnnual ? "7,500" : "8,500",
      description: "For scaling businesses demanding high performance.",
      features: ["Everything in Starter", "WebGL / 3D Elements", "E-Commerce Integration", "Advanced SEO Setup", "Priority 24/7 Support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Bespoke engineering for industry leaders.",
      features: ["Dedicated Team", "Custom AI Integrations", "Mobile App (React Native)", "Enterprise Architecture", "White-glove Service"]
    }
  ];

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
          className="mb-16 text-center"
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            INVEST IN <span className="text-primary">EXCELLENCE</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
            Transparent pricing for world-class digital engineering.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isAnnual ? 'text-white' : 'text-foreground/50'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 rounded-full bg-white/10 border border-white/20 relative p-1 transition-colors hover:border-primary/50"
            >
              <motion.div 
                className="w-6 h-6 rounded-full bg-primary"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-white' : 'text-foreground/50'}`}>Annually (Save 20%)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col relative ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(124,92,255,0.2)]' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/70 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-display font-bold">
                  {plan.price !== "Custom" && "$"}
                  {plan.price}
                </span>
                {plan.price !== "Custom" && <span className="text-foreground/50">/mo</span>}
              </div>

              <div className="flex flex-col gap-4 mb-12 flex-grow">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary/80 glass-glow' : 'bg-white/10 hover:bg-white/20'}`}>
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
