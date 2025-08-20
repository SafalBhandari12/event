"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface Artist {
  name: string;
  genre: string;
  time: string;
  bio: string;
  image: string;
}

const artists: Artist[] = [
  {
    name: "Kjnrwhite",
    genre: "Progressive House",
    time: "10:00 PM - 11:30 PM",
    bio: "Master of progressive soundscapes with over 15 years of experience in underground scenes.",
    image: "/assets/artist-placeholder.svg",
  },
  {
    name: "Luna Verde",
    genre: "Melodic Techno",
    time: "8:30 PM - 10:00 PM",
    bio: "Rising star known for ethereal melodies and hypnotic rhythms that transport listeners.",
    image: "/assets/artist-placeholder.svg",
  },
  {
    name: "MK & Co",
    genre: "Deep House",
    time: "11:30 PM - 1:00 AM",
    bio: "Dynamic duo creating deep, soulful house music with modern electronic elements.",
    image: "/assets/artist-placeholder.svg",
  },
  {
    name: "Echo Beats",
    genre: "Ambient Electronica",
    time: "7:00 PM - 8:30 PM",
    bio: "Experimental artist blending organic sounds with digital manipulation for unique experiences.",
    image: "/assets/artist-placeholder.svg",
  },
];

const ArtistCard = ({ artist, index }: { artist: Artist; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handlePlaySample = () => {
    // Placeholder for play functionality
    console.log(`Playing sample for ${artist.name}`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className='group cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='glass rounded-2xl overflow-hidden shadow-2xl relative'>
        <div className='relative h-64 overflow-hidden'>
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />

          {/* Text Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6'
          >
            <motion.h3
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className='font-heading font-bold text-3xl text-white mb-2'
            >
              {artist.name}
            </motion.h3>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className='text-[var(--accent-cyan)] font-body font-semibold mb-2 text-lg'
            >
              {artist.genre}
            </motion.p>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className='text-[var(--muted)] font-body text-sm mb-4'
            >
              {artist.time}
            </motion.p>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className='text-white/80 font-body text-sm leading-relaxed'
            >
              {artist.bio}
            </motion.p>

            <motion.button
              onClick={handlePlaySample}
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='mt-4 w-12 h-12 bg-[var(--accent-pink)]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30'
            >
              <svg width='20' height='20' viewBox='0 0 24 24' fill='white'>
                <path d='M8 5v14l11-7z' />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <div className='p-4 sm:p-6'>
          <h3 className='font-heading font-bold text-xl sm:text-2xl text-white mb-2'>
            {artist.name}
          </h3>
          <p className='text-[var(--accent-cyan)] font-body font-semibold mb-2 text-sm sm:text-base'>
            {artist.genre}
          </p>
          <p className='text-[var(--muted)] font-body text-xs sm:text-sm mb-4'>
            {artist.time}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Lineup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id='lineup'
      className='py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-dark)] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute top-0 left-10 w-72 h-72 bg-[var(--accent-pink)]/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-10 w-80 h-80 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl' />

      <div className='container mx-auto max-w-7xl relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12 sm:mb-16'
        >
          <h2 className='font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-white'>
            Artist <span className='neon-text'>Lineup</span>
          </h2>
          <p className='font-body text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto'>
            Experience world-class artists bringing their unique sounds to life
            with Kjnrwhite
          </p>
        </motion.div>

        {/* Mobile & Tablet: Horizontal scroll */}
        <div className='block lg:hidden'>
          <div className='flex space-x-4 sm:space-x-6 overflow-x-auto pb-6 scrollbar-hide'>
            {artists.map((artist, index) => (
              <div key={artist.name} className='flex-none w-72 sm:w-80'>
                <ArtistCard artist={artist} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Single row with 4 columns */}
        <div className='hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8'>
          {artists.map((artist, index) => (
            <ArtistCard key={artist.name} artist={artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;
