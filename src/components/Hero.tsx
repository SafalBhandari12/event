'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/assets/poster.svg"
        >
          <source src="/assets/hero.webm" type="video/webm" />
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-dark)] via-[var(--bg-mid)] to-black z-0" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-pink)]/20 via-transparent to-[var(--accent-cyan)]/20 animate-pulse z-10" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 z-20" />

      {/* Floating Gradient Shapes */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            style={{ y: y1 }}
            className="absolute top-20 left-20 w-96 h-96 bg-[var(--accent-pink)]/30 rounded-full blur-3xl animate-float"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--accent-cyan)]/20 rounded-full blur-3xl animate-float"
            transition={{ delay: 2 }}
          />
          <motion.div
            style={{ y: y1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[var(--accent-yellow)]/10 rounded-full blur-3xl animate-float"
            transition={{ delay: 4 }}
          />
        </>
      )}

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading font-black text-6xl md:text-8xl lg:text-9xl mb-6 leading-none"
        >
          <span className="block text-white">THE</span>
          <span className="block neon-text tracking-wider">FLOW PARTY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto tracking-wide"
        >
          A neon-filled night of beats, art, and waves
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-[var(--muted)] text-lg md:text-xl mb-12 font-body"
        >
          Riverside Amphitheater • Sat, Aug 30
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#tickets"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 59, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-yellow)] text-black font-body font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Buy Tickets
          </motion.a>
          
          <motion.a
            href="#lineup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-body font-semibold text-lg rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            View Lineup
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
