"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id='sponsors'
      className='py-20 px-6 bg-[var(--bg-mid)] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute top-0 left-20 w-80 h-80 bg-[var(--accent-pink)]/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-20 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl' />

      <div className='container mx-auto max-w-6xl relative z-10' ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white'>
            Our <span className='neon-text'>Sponsors</span>
          </h2>
          <p className='font-body text-lg md:text-xl text-white/80 max-w-3xl mx-auto'>
            Proudly supported by amazing brands that believe in the power of music and community
          </p>
        </motion.div>

        {/* Featured Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-16'
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Sponsor 1 - BeatSync */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className='glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all'
            >
              <div className='w-20 h-20 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-purple)] rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-black font-bold text-2xl'>B</span>
              </div>
              <h3 className='font-heading font-bold text-2xl text-white mb-3'>BeatSync</h3>
              <p className='text-white/70 font-body'>Audio Technology Partner</p>
            </motion.div>

            {/* Sponsor 2 - NeonFlow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className='glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all'
            >
              <div className='w-20 h-20 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)] rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-black font-bold text-2xl'>N</span>
              </div>
              <h3 className='font-heading font-bold text-2xl text-white mb-3'>NeonFlow</h3>
              <p className='text-white/70 font-body'>Lighting & Visual Effects</p>
            </motion.div>

            {/* Sponsor 3 - SoundWave */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className='glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all'
            >
              <div className='w-20 h-20 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-orange)] rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-black font-bold text-2xl'>S</span>
              </div>
              <h3 className='font-heading font-bold text-2xl text-white mb-3'>SoundWave</h3>
              <p className='text-white/70 font-body'>Official Sound Partner</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Become Sponsor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center'
        >
          <div className='glass rounded-2xl p-8'>
            <h3 className='font-heading font-bold text-2xl text-white mb-4'>
              Become a Sponsor
            </h3>
            <p className='text-white/70 font-body mb-6 max-w-2xl mx-auto'>
              Join our community of forward-thinking brands and reach thousands
              of engaged attendees. Partner with us to create unforgettable
              experiences.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-yellow)] text-black font-body font-bold rounded-full hover:shadow-lg transition-shadow'
            >
              Partnership Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
