"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020204] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Big CTA */}
        <div id="contact" className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-32">
          <div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              LET&apos;S BUILD <br />
              <span className="text-primary">TOMORROW.</span>
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl max-w-md">
              Ready to transform your digital presence? Drop us a line.
            </p>
          </div>
          <button className="flex items-center gap-4 bg-white text-black px-8 py-6 rounded-full font-medium text-lg hover:bg-primary hover:text-white transition-all group">
            hello@softadex.com
            <ArrowRight className="group-hover:-rotate-45 transition-transform" />
          </button>
        </div>
        
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 text-sm">
          <div>
            <h4 className="font-bold mb-6 text-white">Agency</h4>
            <ul className="flex flex-col gap-4 text-foreground/60">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Social</h4>
            <ul className="flex flex-col gap-4 text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Awwwards</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-foreground/60 mb-6 max-w-sm">
              Subscribe to get the latest insights on design, technology, and AI.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex-1 outline-none focus:border-primary transition-colors text-white"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-foreground/40 font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Softadex. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
