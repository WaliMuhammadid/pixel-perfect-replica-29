"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, MessageSquare, Link2, Globe } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate Netlify form submission delay
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <>
      
      
      
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              LET&apos;S <br/> <span className="text-primary">TALK</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-12">
              Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
            
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-foreground/70">Karachi, Pakistan<br/>Serving clients globally.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-foreground/70">hello@softadex.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                <Link2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors border border-white/10">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-10"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/50">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">Message Sent</h3>
                  <p className="text-foreground/70 mb-8">Thank you for reaching out. We&apos;ll be in touch shortly.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="px-8 py-3 bg-white text-black font-bold rounded-full">
                    Send Another
                  </button>
                </motion.div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <input required type="text" id="name" name="name" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-primary transition-colors peer" placeholder=" " />
                  <label htmlFor="name" className="absolute left-0 top-3 text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Your Name</label>
                </div>
                <div className="relative group">
                  <input required type="email" id="email" name="email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-primary transition-colors peer" placeholder=" " />
                  <label htmlFor="email" className="absolute left-0 top-3 text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                </div>
              </div>

              <div className="relative group mb-8">
                <select id="service" name="service" required defaultValue="" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-primary transition-colors appearance-none text-white">
                  <option value="" disabled hidden>Select a Service</option>
                  <option value="web" className="bg-background text-white">Web Development</option>
                  <option value="mobile" className="bg-background text-white">Mobile Apps</option>
                  <option value="design" className="bg-background text-white">UI/UX Design</option>
                  <option value="ai" className="bg-background text-white">AI Solutions</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-foreground/50 text-sm mb-4">Project Budget</label>
                <input type="range" name="budget" min="10" max="100" defaultValue="50" className="w-full accent-primary" />
                <div className="flex justify-between text-xs text-foreground/40 mt-2 font-mono">
                  <span>$10k</span>
                  <span>$50k</span>
                  <span>$100k+</span>
                </div>
              </div>

              <div className="relative group mb-12">
                <textarea required id="message" name="message" rows={4} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-primary transition-colors peer resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-foreground/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Tell us about your project</label>
              </div>

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/80 transition-colors disabled:opacity-50 glass-glow"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      
      
    </>
  );
}
