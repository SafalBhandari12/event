"use client";

import { motion } from "framer-motion";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Lineup from "../src/components/Lineup";
import Schedule from "../src/components/Schedule";
import Tickets from "../src/components/Tickets";
import Gallery from "../src/components/Gallery";
import Location from "../src/components/Location";
import Sponsors from "../src/components/Sponsors";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className='relative'>
      {/* Bottom Right Floating Button */}
      <div className='fixed bottom-6 right-6 z-50'>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className='px-6 py-3 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-cyan)] text-black font-body font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm'
        >
          Join Community
        </motion.button>
      </div>

      <Hero />
      <About />
      <Lineup />
      <Schedule />
      <Tickets />
      <Gallery />
      <Location />
      <Sponsors />
      <Footer />
    </main>
  );
}
