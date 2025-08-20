"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  tier: string;
}

const sponsors: Sponsor[] = [
  { name: "TechFlow", logo: "/assets/logo.svg", tier: "title" },
  { name: "BeatSync", logo: "/assets/logo.svg", tier: "platinum" },
  { name: "NeonLights", logo: "/assets/logo.svg", tier: "gold" },
  { name: "SoundWave", logo: "/assets/logo.svg", tier: "gold" },
  { name: "ElectroVibes", logo: "/assets/logo.svg", tier: "silver" },
  { name: "FlowEnergy", logo: "/assets/logo.svg", tier: "silver" },
  { name: "BassDrop", logo: "/assets/logo.svg", tier: "bronze" },
  { name: "RhythmBox", logo: "/assets/logo.svg", tier: "bronze" },
];

const SponsorTier = ({
  title,
  sponsors,
  delay,
}: {
  title: string;
  sponsors: Sponsor[];
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className='mb-12'
    >
      <h3 className='font-heading font-bold text-2xl text-white text-center mb-8'>
        {title}
      </h3>
      <div className='flex flex-wrap justify-center items-center gap-8'>
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: delay + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className='glass rounded-xl p-6 flex items-center justify-center h-24 w-40 hover:bg-white/10 transition-colors'
          >
            <div className='relative w-full h-full flex items-center justify-center'>
              {/* Placeholder logo */}
              <div className='w-12 h-12 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-cyan)] rounded-lg flex items-center justify-center'>
                <span className='text-black font-bold text-xl'>
                  {sponsor.name.charAt(0)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const titleSponsors = sponsors.filter((s) => s.tier === "title");
  const platinumSponsors = sponsors.filter((s) => s.tier === "platinum");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");
  const bronzeSponsors = sponsors.filter((s) => s.tier === "bronze");

  return (
    <section
      id='sponsors'
      className='py-20 px-6 bg-[var(--bg-mid)] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-[var(--accent-pink)]/5 rounded-full blur-3xl' />

      <div className='container mx-auto max-w-6xl relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white'>
            Our <span className='neon-text'>Sponsors</span>
          </h2>
          <p className='font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto'>
            We're grateful to our amazing sponsors who make The Flow Party
            possible
          </p>
        </motion.div>

        {isInView && (
          <div>
            {titleSponsors.length > 0 && (
              <SponsorTier
                title='Title Sponsor'
                sponsors={titleSponsors}
                delay={0.2}
              />
            )}

            {platinumSponsors.length > 0 && (
              <SponsorTier
                title='Platinum Partners'
                sponsors={platinumSponsors}
                delay={0.4}
              />
            )}

            {goldSponsors.length > 0 && (
              <SponsorTier
                title='Gold Sponsors'
                sponsors={goldSponsors}
                delay={0.6}
              />
            )}

            {silverSponsors.length > 0 && (
              <SponsorTier
                title='Silver Sponsors'
                sponsors={silverSponsors}
                delay={0.8}
              />
            )}

            {bronzeSponsors.length > 0 && (
              <SponsorTier
                title='Bronze Sponsors'
                sponsors={bronzeSponsors}
                delay={1.0}
              />
            )}
          </div>
        )}

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='text-center mt-16'
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
