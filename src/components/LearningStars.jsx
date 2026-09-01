import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiStar, FiX } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import '../styles/learning-stars.css';

const ease = [0.22, 1, 0.36, 1];
const YOUTUBE_ID = 'GX4umtP9EaM';

const stats = [
  { value: '51',   label: 'Children Supported' },
  { value: '46',   label: 'Partner Schools' },
  { value: '100%', label: 'To the Children' },
];

export default function LearningStars() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="ls">
      <div className="ls__inner">
        {/* LEFT — cyan card */}
        <motion.div
          className="ls__card"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="ls__eyebrow"><FiStar /> Learning Stars</span>
          <h2 className="ls__title">Empowering Lives Through Education</h2>
          <p className="ls__text">
            We place orphaned and vulnerable children in boarding schools and support them all the
            way - school fees, uniforms and learning materials, plus mentorship, counselling and
            life skills.
          </p>
          <img className="ls__art" src="https://res.cloudinary.com/gjpfbvzb/image/upload/v1788245048/ChatGPT_Image_Sep_1_2026_09_40_02_AM_y8gwfm.png" alt="" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="ls__media"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          {playing ? (
            <div className="ls__video">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Learning Stars video"
                allow="accelerated-diagnostics; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <button className="ls__close" onClick={() => setPlaying(false)} aria-label="Close video">
                <FiX />
              </button>
            </div>
          ) : (
            <>
              <img className="ls__media-img" src="https://res.cloudinary.com/gjpfbvzb/image/upload/v1787748336/images_2_wbod3v.jpg" alt="Learning Stars children in class" />
              <div className="ls__media-scrim" aria-hidden="true" />

              <motion.button
                className="ls__play"
                onClick={() => setPlaying(true)}
                aria-label="Play the Learning Stars video"
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: 0.25 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay />
              </motion.button>

              <motion.ul
                className="ls__stats"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
              >
                {stats.map((s) => (
                  <motion.li
                    key={s.label}
                    variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <span className="ls__stat-value">{s.value}</span>
                    <span className="ls__stat-label">{s.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}