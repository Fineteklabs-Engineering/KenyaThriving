import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiVolume2, FiVolumeX } from 'react-icons/fi';
import '../styles/about-hero.css';
const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutHero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play?.().catch(() => {});
  };

  return (
    <section className="ah">
      <video
        ref={videoRef}
        className="ah__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/about-hero-poster.jpg"
      >
        {/* 👇 paste your video link here */}
        <source src="https://res.cloudinary.com/gjpfbvzb/video/upload/v1788442933/LS_Trailer_Promo_Ed_4_kujrtl.mp4" type="video/mp4" />
      </video>

      <div className="ah__scrim" />
      <div className="ah__topscrim" />

      <div className="ah__inner">
        <motion.div className="ah__card" variants={card} initial="hidden" animate="show">
          <motion.h1 className="ah__title" variants={rise}>
            About Kenya Thriving
          </motion.h1>
          <motion.p className="ah__desc" variants={rise}>
            A UK charity giving orphaned and vulnerable children in Kenya the
            chance to learn and thrive.
          </motion.p>
          <motion.div variants={rise}>
            <Link to="/donate" className="ah__cta">
              Donate Now <FiArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className={`ah__sound${muted ? ' ah__sound--muted' : ''}`}
        onClick={toggleSound}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        aria-pressed={!muted}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {muted ? <FiVolumeX aria-hidden="true" /> : <FiVolume2 aria-hidden="true" />}
      </motion.button>
    </section>
  );
}