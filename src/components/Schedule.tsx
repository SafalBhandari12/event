'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  type: 'performance' | 'break' | 'special';
}

const scheduleData: ScheduleItem[] = [
  {
    time: "6:00 PM",
    title: "Doors Open",
    description: "Welcome drinks and ambient music as guests arrive",
    type: "special"
  },
  {
    time: "7:00 PM",
    title: "Echo Beats",
    description: "Opening set with ambient electronica to set the mood",
    type: "performance"
  },
  {
    time: "8:30 PM",
    title: "Luna Verde",
    description: "Melodic techno journey through ethereal soundscapes",
    type: "performance"
  },
  {
    time: "10:00 PM",
    title: "DJ Zen",
    description: "Progressive house masterclass with hypnotic rhythms",
    type: "performance"
  },
  {
    time: "11:30 PM",
    title: "MK & Co",
    description: "Deep house vibes with soulful electronic elements",
    type: "performance"
  },
  {
    time: "1:00 AM",
    title: "Varyxx",
    description: "Bass-heavy finale with future sounds and heavy drops",
    type: "performance"
  },
  {
    time: "2:30 AM",
    title: "After Party",
    description: "Ambient chill-out session and networking",
    type: "special"
  }
];

const ScheduleItem = ({ item, index }: { item: ScheduleItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'performance':
        return 'var(--accent-pink)';
      case 'special':
        return 'var(--accent-cyan)';
      default:
        return 'var(--accent-yellow)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center space-x-6 p-6 glass rounded-xl hover:bg-white/10 transition-colors">
          {/* Time Indicator */}
          <div 
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: getTypeColor(item.type) }}
          />
          
          {/* Time */}
          <div className="w-24 text-[var(--muted)] font-body font-semibold text-sm">
            {item.time}
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="font-heading font-bold text-xl text-white mb-1">
              {item.title}
            </h3>
            <p className="text-white/70 font-body text-sm line-clamp-2">
              {item.description}
            </p>
          </div>
          
          {/* Expand Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-white/40 group-hover:text-white/70 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.button>
      
      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="ml-12 p-6 pt-0">
              <div className="glass rounded-lg p-4">
                <p className="text-white/80 font-body leading-relaxed">
                  {item.description}
                </p>
                {item.type === 'performance' && (
                  <div className="mt-4 flex space-x-4">
                    <button className="text-[var(--accent-cyan)] hover:text-white transition-colors text-sm font-body">
                      View Artist Profile
                    </button>
                    <button className="text-[var(--accent-pink)] hover:text-white transition-colors text-sm font-body">
                      Listen to Sample
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="schedule" className="py-20 px-6 bg-[var(--bg-mid)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-20 w-80 h-80 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-[var(--accent-yellow)]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Event <span className="neon-text">Schedule</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your complete guide to the night's journey through sound and experience
          </p>
        </motion.div>

        <div className="space-y-4">
          {scheduleData.map((item, index) => (
            <ScheduleItem key={`${item.time}-${item.title}`} item={item} index={index} />
          ))}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 glass rounded-2xl"
        >
          <h3 className="font-heading font-bold text-2xl text-white mb-6 text-center">
            Quick Timeline
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {scheduleData.map((item, index) => (
              <div
                key={`timeline-${index}`}
                className="flex flex-col items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div 
                  className="w-2 h-2 rounded-full mb-2"
                  style={{ backgroundColor: item.type === 'performance' ? 'var(--accent-pink)' : 'var(--accent-cyan)' }}
                />
                <span className="text-xs font-body text-white/60">{item.time}</span>
                <span className="text-xs font-body text-white text-center mt-1">{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
