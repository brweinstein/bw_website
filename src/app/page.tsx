'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Typewriter from '@/components/Typewriter';
import { useParallax } from '@/hooks/useScrollAnimations';

export default function Home() {
  const parallaxOffset = useParallax(0.3);
  
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <AnimatedBackground />
        </div>
        <motion.div 
          className="text-center relative z-10 px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I&apos;m{' '}
            <motion.span 
              className="text-blue-400"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Ben Weinstein
            </motion.span>
          </motion.h1>
          <motion.div 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p>Honours Mathematics student at University of Waterloo</p>
            
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span>Passionate about</span>
              <Typewriter
                texts={[
                  "Rust ",
                  "Python", 
                  "TypeScript",
                  "Mathematics",
                  "Economics",
                ]}
                className="text-blue-400 font-bold"
                speed={120}
                deleteSpeed={60}
                delayBetween={2000}
              />
            </div>
            
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 py-8 px-6 border-t border-gray-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-400"
              whileHover={{ color: "#60a5fa", scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Ben Weinstein, made with Next.js
            </motion.p>
            
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
