import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/how-we-help-hero.css';

const ease = [0.22, 1, 0.36, 1];
const ROTATE_MS = 6000;


const HERO_IMAGES = [
  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861640/20260502_082654441_iOS_x4pr2g.jpg',
  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788259370/IMG_9800_vjktet.jpg',
  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788780267/IMG_0998_cmi7zb.jpg',
];

const AVATARS = [
  'REPLACE_WITH_AVATAR_1_URL',
  'REPLACE_WITH_AVATAR_2_URL',
  'REPLACE_WITH_AVATAR_3_URL',
];

const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };

export default function HowWeHelpHero() {
  const [active, setActive] = useState(0);

  // auto-advance; resets when active changes (dot click restarts the timer)
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % HERO_IMAGES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="hwh">
      {/* rotating background */}
      <div className="hwh__bgs">
        <AnimatePresence>
          <motion.div
            key={active}
            className="hwh__bg"
            style={{ backgroundImage: `url(${HERO_IMAGES[active]})` }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease }}
          />
        </AnimatePresence>
      </div>
      <div className="hwh__scrim" aria-hidden="true" />

      {/* content (fixed — only the background rotates) */}
      <div className="hwh__inner">
        <motion.div
          className="hwh__content"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.span className="hwh__eyebrow" variants={rise}>
            <span className="hwh__eyebrow-dot" aria-hidden="true" />
            Together We Can Help
          </motion.span>

          <motion.h1 className="hwh__title" variants={rise}>
            We Help Kenya&apos;s Children<br />
            <span className="hwh__title-accent">Learn and Thrive</span>
          </motion.h1>

          <motion.p className="hwh__text" variants={rise}>
            From school fees to mentorship, we give orphaned and vulnerable children the
            education, care and support they need to build a brighter future.
          </motion.p>

          <motion.div className="hwh__actions" variants={rise}>
            <a href="/donation" className="hwh__btn">
              Join Us Today <span className="hwh__btn-ic"><FiArrowRight /></span>
            </a>

            <div className="hwh__proof">
              <div className="hwh__avatars">
                {AVATARS.map((a, i) => (
                  <span key={i} className="hwh__avatar" style={{ backgroundImage: `url(${a})` }} />
                ))}
              </div>
              <div className="hwh__proof-text">
                <span className="hwh__proof-value">51+</span>
                <span className="hwh__proof-label">Children Supported</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* dots — bottom-right, on a translucent track */}
      <div className="hwh__dots-wrap">
        <div className="hwh__dots">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`hwh__dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}