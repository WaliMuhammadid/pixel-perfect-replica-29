"use client";

import { motion } from "framer-motion";

export default function Legal() {
  return (
    <>
      
      
      
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            LEGAL
          </h1>
          <p className="text-foreground/70">Last updated: October 2026</p>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none text-foreground/80">
          <h2 className="text-2xl font-display font-bold text-white mt-12 mb-4">1. Privacy Policy</h2>
          <p>
            Softadex is committed to protecting your privacy. We do not sell, trade, or rent users&apos; personal identification information to others. 
            We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners.
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-12 mb-4">2. Terms of Service</h2>
          <p>
            By accessing the website at softadex.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="text-2xl font-display font-bold text-white mt-12 mb-4">3. Data Security</h2>
          <p>
            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
          </p>
        </div>
      </main>
      
      
    </>
  );
}
