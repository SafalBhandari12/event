"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const InteractivePartyBall = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ballRef.current) {
        const ball = ballRef.current;
        const rect = ball.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) / 10;
        const deltaY = (e.clientY - centerY) / 10;

        ball.style.transform = `translate(${deltaX}px, ${deltaY}px) rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const playBeats = async () => {
    if (!audioContext) {
      const AudioContextClass =
        window.AudioContext ||
        (
          window as Window &
            typeof globalThis & { webkitAudioContext: typeof AudioContext }
        ).webkitAudioContext;
      const ctx = new AudioContextClass();
      setAudioContext(ctx);

      // Create a simple beat pattern
      const beats = [220, 330, 440, 550]; // frequencies
      let beatIndex = 0;

      const playBeat = () => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.setValueAtTime(beats[beatIndex], ctx.currentTime);
        oscillator.type = "sine";

        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);

        beatIndex = (beatIndex + 1) % beats.length;
      };

      if (!isPlaying) {
        setIsPlaying(true);
        const interval = setInterval(playBeat, 200);
        setTimeout(() => {
          clearInterval(interval);
          setIsPlaying(false);
        }, 2000);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1, type: "spring", bounce: 0.4 }}
      className='fixed top-32 right-32 z-40 cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={playBeats}
    >
      <div
        ref={ballRef}
        className='relative w-24 h-24 transition-transform duration-200 ease-out'
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main disco ball */}
        <motion.div
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "linear",
            },
            scale: { duration: 0.3 },
          }}
          className='absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-pink)] via-[var(--accent-cyan)] to-[var(--accent-yellow)] shadow-2xl'
          style={{
            background: `conic-gradient(from 0deg, 
              var(--accent-pink), 
              var(--accent-cyan), 
              var(--accent-yellow), 
              var(--accent-pink))`,
            boxShadow: `0 0 30px var(--accent-pink), 
                       0 0 60px var(--accent-cyan), 
                       0 0 90px var(--accent-yellow)`,
          }}
        >
          {/* Disco ball reflections */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-white rounded-full opacity-80'
              style={{
                top: `${20 + Math.sin((i * 30 * Math.PI) / 180) * 30}%`,
                left: `${20 + Math.cos((i * 30 * Math.PI) / 180) * 30}%`,
              }}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.8, 1, 0.8] : 0.8,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                repeat: isHovered ? Infinity : 0,
              }}
            />
          ))}
        </motion.div>

        {/* Pulsing glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute -inset-4 rounded-full blur-xl'
          style={{
            background: `radial-gradient(circle, 
              var(--accent-pink)20, 
              var(--accent-cyan)10, 
              transparent)`,
          }}
        />

        {/* Musical notes when playing */}
        {isPlaying && (
          <div className='absolute -inset-8'>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [-20, -40, -60],
                  x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: 1,
                }}
                className='absolute text-white text-xl'
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                ♪
              </motion.div>
            ))}
          </div>
        )}

        {/* Light beams */}
        {isHovered && (
          <div className='absolute inset-0'>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60'
                style={{
                  height: "120px",
                  top: "-48px",
                  left: "50%",
                  transformOrigin: "bottom center",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            ))}
          </div>
        )}

        {/* Click hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded whitespace-nowrap'
        >
          Click for beats! 🎵
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractivePartyBall;
