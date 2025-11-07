'use client';

import { motion } from 'framer-motion';
import ProjectCard from './TitleCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

export default function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <section id="projects" className="bg-gray-800 py-20 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of my latest work and experiments
          </motion.p>
        </motion.div>

        {/* Projects Grid - 2 per row */}
        <motion.div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={cardsVisible ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants}>
            <ProjectCard
              title="Cryptography Visualizer"
              description="Interactive cryptography demos powered by Rust + WebAssembly and a Next.js UI. Features include: RSA key generation and visualizer, Diffie–Hellman key exchange walkthrough, AES round breakdown, SHA‑256 stepper, and Discrete Log exploration."
              githubUrl="https://github.com/brweinstein/corsa"
              imageUrl="/demo/corsa-demo.gif"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <ProjectCard
              title="greprs"
              description="A lightning-fast grep clone written in Rust with parallel processing and modern features. Optimized to be competitive with GNU Grep (~5% slower) on most workloads."
              githubUrl="https://github.com/brweinstein/greprs"
              imageUrl="/demo/greprs-demo.png"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <ProjectCard
              title="Tree Navigator"
              description="A lightweight Obsidian plugin that adds a dedicated, keyboard-navigable tree view of your vault. Expand, collapse, and open folders and files without touching the mouse."
              githubUrl="https://github.com/brweinstein/obsidian-tree"
              imageUrl="/demo/tree-navigator-demo.gif"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <ProjectCard
              title="runmd"
              description="A high-performance Rust tool to execute code blocks in Markdown files and insert their outputs inline. Perfect for maintaining up-to-date documentation with live code examples."
              githubUrl="https://github.com/brweinstein/runmd"
              imageUrl="/demo/runmd-demo.gif"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}