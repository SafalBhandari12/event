"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock newsletter signup
    alert(
      `Thank you for subscribing with ${email}! We'll keep you updated on future Flow Party events.`
    );
    setEmail("");
  };

  const socialLinks = [
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "YouTube", icon: "youtube", url: "#" },
    { name: "Spotify", icon: "spotify", url: "#" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Lineup", href: "#lineup" },
    { name: "Schedule", href: "#schedule" },
    { name: "Tickets", href: "#tickets" },
    { name: "Location", href: "#location" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <footer className='bg-[var(--bg-dark)] border-t border-white/10 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-[var(--accent-pink)]/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 py-16 relative z-10' ref={ref}>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-1'
          >
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-10 h-10 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-cyan)] rounded-full flex items-center justify-center'>
                <span className='text-black font-bold text-lg'>F</span>
              </div>
              <span className='font-heading font-bold text-2xl text-white'>
                Flow Party
              </span>
            </div>
            <p className='text-white/70 font-body leading-relaxed mb-6'>
              Creating unforgettable experiences where music, art, and community
              come together in perfect harmony. Join the flow.
            </p>

            {/* Social Links */}
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='w-10 h-10 bg-white/10 hover:bg-[var(--accent-pink)] rounded-lg flex items-center justify-center transition-colors group'
                  aria-label={social.name}
                >
                  <div className='w-5 h-5 bg-white group-hover:bg-black rounded' />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className='font-heading font-bold text-xl text-white mb-6'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className='text-white/70 hover:text-[var(--accent-cyan)] font-body transition-colors'
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className='font-heading font-bold text-xl text-white mb-6'>
              Legal
            </h3>
            <ul className='space-y-3'>
              {legalLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className='text-white/70 hover:text-[var(--accent-cyan)] font-body transition-colors'
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className='font-heading font-bold text-xl text-white mb-6'>
              Stay Updated
            </h3>
            <p className='text-white/70 font-body mb-4'>
              Get the latest updates on upcoming events and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className='space-y-3'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                className='w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors'
              />
              <motion.button
                type='submit'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full py-3 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-cyan)] text-black font-body font-semibold rounded-lg hover:shadow-lg transition-shadow'
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'
        >
          <p className='text-white/60 font-body text-sm'>
            © 2024 Flow Party. All rights reserved. Made with ❤️ for the music
            community.
          </p>
          <div className='flex items-center space-x-6'>
            <span className='text-white/40 font-body text-xs'>Powered by</span>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-cyan)] rounded'>
                <div className='w-full h-full bg-black/20 rounded flex items-center justify-center'>
                  <span className='text-white text-xs font-bold'>F</span>
                </div>
              </div>
              <span className='text-white/60 font-body text-xs'>
                Flow Events
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
