"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    { title: "The Future of WebGL in E-Commerce", category: "Technology", date: "Oct 12, 2026", readTime: "5 min" },
    { title: "Designing for Spatial Computing: A Primer", category: "Design", date: "Sep 28, 2026", readTime: "8 min" },
    { title: "How AI is Reshaping Agency Workflows", category: "AI & Automation", date: "Sep 15, 2026", readTime: "6 min" },
    { title: "Next.js App Router: Lessons from Production", category: "Engineering", date: "Aug 30, 2026", readTime: "10 min" }
  ];

  return (
    <>
      
      
      
      
      <main className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            INSIGHTS <span className="text-primary">&</span> IDEAS
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Thoughts on design, engineering, and the future of the digital landscape from the Softadex team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <Link key={i} href="#" className="group">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 h-full flex flex-col justify-between hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10">
                      {post.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-6 group-hover:text-primary transition-colors">{post.title}</h2>
                </div>
                <div className="flex items-center justify-between text-sm text-foreground/50 font-medium">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </main>
      
      
    </>
  );
}
