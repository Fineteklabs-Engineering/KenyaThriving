import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaPlay } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import '../styles/learning-stars.css';

const ease = [0.22, 1, 0.36, 1];
const bounce = { type: 'spring', stiffness: 140, damping: 12, mass: 0.9 };
const YOUTUBE_ID = 'd70S3kM38aY';

// pattern background — paste your image URL
const PATTERN_BG = 'https://pub-69c28885ad5a46889ef25035975f7ba1.r2.dev/4090026_88332.jpg';
// the two side images
const LEFT_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787834772/IMG_1305_n80m9d.jpg';
const RIGHT_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788179983/IMG_4164-scaled_ru1pwl.webp';

const features = [
  { title: 'Enrolled in Boarding Schools', text: 'We place orphaned and vulnerable children in reputable boarding schools.' },
  { title: 'Fully Supported', text: 'School fees, uniforms, books and learning materials — all covered.' },
  { title: 'Mentored to Thrive', text: 'Mentorship, counselling and life skills for lasting change.' },
];

const stats = [
  { value: '51',   label: 'Children Supported' },
  { value: '46',   label: 'Partner Schools' },
  { value: '100%', label: 'To the Children' },
];

export default function LearningStars() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="ls">
      {/* pattern + white overlay */}
      <div className="ls__pattern" style={PATTERN_BG ? { backgroundImage: `url(${PATTERN_BG})` } : undefined} aria-hidden="true" />
      <div className="ls__wash" aria-hidden="true" />

      {/* side images — bounce together + fade out on play */}
      <motion.div
        className="ls__side ls__side--left"
        style={{ backgroundImage: `url(${LEFT_IMG})` }}
        animate={{ x: playing ? '46vw' : 0, opacity: playing ? 0 : 1 }}
        transition={bounce}
        aria-hidden="true"
      />
      <motion.div
        className="ls__side ls__side--right"
        style={{ backgroundImage: `url(${RIGHT_IMG})` }}
        animate={{ x: playing ? '-46vw' : 0, opacity: playing ? 0 : 1 }}
        transition={bounce}
        aria-hidden="true"
      />

      {/* centered content (fades out while playing) */}
      <motion.div
        className="ls__panel"
        animate={{ opacity: playing ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: playing ? 'none' : 'auto' }}
      >
        <h2 className="ls__title">The <em>Learning Stars</em></h2>
        <p className="ls__lead">
          We give orphaned and vulnerable children in Kenya a place in boarding school and support
          them all the way — from school fees and uniforms to mentorship and life skills.
        </p>

        <div className="ls__features">
          {features.map((f) => (
            <div className="ls__feature" key={f.title}>
              <h3 className="ls__feature-title">{f.title}</h3>
              <p className="ls__feature-text">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="ls__divider" />

        <div className="ls__stats">
          {stats.map((s) => (
            <div className="ls__stat" key={s.label}>
              <span className="ls__stat-value">{s.value}</span>
              <span className="ls__stat-label">{s.label}</span>
            </div>
          ))}

          <button className="ls__playstat" onClick={() => setPlaying(true)}>
            <span className="ls__playstat-ic"><FaPlay /></span>
            <span className="ls__stat-label">Watch Video</span>
          </button>
        </div>
      </motion.div>

      {/* video (scales in bigger, over the section) */}
      <div className="ls__videowrap">
        <AnimatePresence>
          {playing && (
            <motion.div
              className="ls__video"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease, delay: 0.35 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Learning Stars video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <button className="ls__close" onClick={() => setPlaying(false)} aria-label="Close video">
                <FiX />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}