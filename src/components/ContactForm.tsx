'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mdkdjkar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] as const }
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6 max-w-lg mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fieldVariants}>
        <motion.label 
          htmlFor="name" 
          className="block text-sm font-medium text-gray-300 mb-2"
          whileHover={{ color: "#60a5fa" }}
          transition={{ duration: 0.2 }}
        >
          Name
        </motion.label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Your name"
          whileFocus={{ 
            scale: 1.02,
            borderColor: "#3b82f6",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      <motion.div variants={fieldVariants}>
        <motion.label 
          htmlFor="email" 
          className="block text-sm font-medium text-gray-300 mb-2"
          whileHover={{ color: "#60a5fa" }}
          transition={{ duration: 0.2 }}
        >
          Email
        </motion.label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="your.email@example.com"
          whileFocus={{ 
            scale: 1.02,
            borderColor: "#3b82f6",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      <motion.div variants={fieldVariants}>
        <motion.label 
          htmlFor="message" 
          className="block text-sm font-medium text-gray-300 mb-2"
          whileHover={{ color: "#60a5fa" }}
          transition={{ duration: 0.2 }}
        >
          Message
        </motion.label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
          placeholder="Your message..."
          whileFocus={{ 
            scale: 1.02,
            borderColor: "#3b82f6",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      {/* Status Messages */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div 
            className="p-4 bg-green-800/20 border border-green-600 rounded-lg"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-green-400 text-center">Message sent successfully! I&apos;ll get back to you soon.</p>
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div 
            className="p-4 bg-red-800/20 border border-red-600 rounded-lg"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-red-400 text-center">Failed to send message. Please try again or contact me directly.</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div variants={fieldVariants}>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
            isSubmitting 
              ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          whileHover={!isSubmitting ? { 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
          } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.span 
                className="flex items-center justify-center"
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg 
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </motion.svg>
                Sending...
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </motion.form>
  );
}
