"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, Palette } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Web Engineering",
    description: "High-performance, accessible, and cinematic web experiences built with Next.js and WebGL."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-secondary" />,
    title: "Mobile Architecture",
    description: "Native-feeling React Native and Flutter applications that dominate the App Store."
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: "Immersive UI/UX",
    description: "Award-winning interface design that converts users into loyal brand advocates."
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "AI Integration",
    description: "Seamless integration of LLMs and machine learning models to supercharge your product."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Capabilities</h2>
        <p className="text-foreground/70 max-w-2xl text-lg">
          We bring together engineering excellence and elite design to deliver products that redefine industry standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
              {service.icon}
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-foreground/60 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
