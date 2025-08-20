"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id='about'
      className='py-20 px-6 bg-[var(--bg-mid)] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent-pink)]/5 rounded-full blur-3xl' />

      <div className='container mx-auto max-w-4xl relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h2 className='font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-white'>
            Experience the <span className='neon-text'>Flow</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='font-body text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto'
          >
            Immerse yourself in a world where cutting-edge electronic music
            meets stunning visual artistry. The Flow Party isn't just an
            event—it's a transcendent journey through sound, light, and human
            connection. Join us for an unforgettable night where the boundaries
            between reality and dreams blur into pure magic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'
          >
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-heading font-bold text-[var(--accent-pink)] mb-2'>
                8+
              </div>
              <div className='text-white/60 font-body'>Hours of Music</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-heading font-bold text-[var(--accent-cyan)] mb-2'>
                15+
              </div>
              <div className='text-white/60 font-body'>World-Class Artists</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-heading font-bold text-[var(--accent-yellow)] mb-2'>
                5K+
              </div>
              <div className='text-white/60 font-body'>Expected Attendees</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
