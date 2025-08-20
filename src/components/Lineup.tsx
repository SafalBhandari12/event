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
    name: "DJ Zen",
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
  {
    name: "Varyxx",
    genre: "Bass & Future",
    time: "1:00 AM - 2:30 AM",
    bio: "Bass music innovator pushing boundaries with futuristic sounds and heavy drops.",
    image: "/assets/artist-placeholder.svg",
  },
];

const ArtistCard = ({ artist, index }: { artist: Artist; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handlePlaySample = () => {
    // Placeholder for audio sample functionality
    console.log(`Playing sample for ${artist.name}`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='relative group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className='glass rounded-2xl overflow-hidden shadow-2xl'
      >
        <div className='relative h-64 overflow-hidden'>
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className='absolute inset-0 bg-[var(--accent-pink)]/20 backdrop-blur-sm flex items-center justify-center'
          >
            <motion.button
              onClick={handlePlaySample}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30'
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='white'>
                <path d='M8 5v14l11-7z' />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <div className='p-6'>
          <h3 className='font-heading font-bold text-2xl text-white mb-2'>
            {artist.name}
          </h3>
          <p className='text-[var(--accent-cyan)] font-body font-semibold mb-2'>
            {artist.genre}
          </p>
          <p className='text-[var(--muted)] font-body text-sm mb-4'>
            {artist.time}
          </p>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            className='overflow-hidden'
          >
            <p className='text-white/70 font-body text-sm leading-relaxed'>
              {artist.bio}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Lineup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id='lineup'
      className='py-20 px-6 bg-[var(--bg-dark)] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute top-20 left-0 w-72 h-72 bg-[var(--accent-yellow)]/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-0 w-96 h-96 bg-[var(--accent-pink)]/10 rounded-full blur-3xl' />

      <div className='container mx-auto max-w-7xl relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white'>
            Artist <span className='neon-text'>Lineup</span>
          </h2>
          <p className='font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto'>
            Experience world-class artists bringing their unique sounds to
            create an unforgettable musical journey
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className='md:hidden'>
          <div className='flex space-x-6 overflow-x-auto pb-6 scrollbar-hide'>
            {artists.map((artist, index) => (
              <div key={artist.name} className='flex-none w-80'>
                <ArtistCard artist={artist} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {artists.map((artist, index) => (
            <ArtistCard key={artist.name} artist={artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;
