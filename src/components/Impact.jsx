import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiHeart, FiArrowRight } from 'react-icons/fi';
import '../styles/impacts.css';

const ease = [0.22, 1, 0.36, 1];
const ROTATE_MS = 4000;

const items = [
  {
    heading: 'Boarding School Enrolment',
    desc: 'We enrol orphaned and vulnerable children in reputable boarding schools.',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821623/IMG_4235-scaled_l9tpjh.webp',
  },
  {
    heading: 'Learning Materials',
    desc: 'We supply essential educational materials - uniforms, books and stationery.',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821706/IMG_4176-1-scaled_lpbuoq.webp',
  },
  {
    heading: 'Practical Skills',
    desc: 'We provide practical skills training so children can find work and break the cycle of poverty.',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787903109/IMG_1261_i8rwml.jpg',
  },
  {
    heading: 'Mentorship & Counselling',
    desc: 'We offer ongoing mentorship, counselling and life-skills support.',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821901/IMG_4354-scaled_ds3z6l.webp',
  },
];

export default function Impact() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = items[active];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  const select = (i) => setActive(i);

  return (
    <section className="impact">
      <motion.div
        className="impact__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.span
          className="impact__eyebrow"
          variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.5, ease }}
        >
          <FiHeart /> Our Impact
        </motion.span>
        <motion.h2
          className="impact__title"
          variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          The Difference We Make Together
        </motion.h2>
      </motion.div>

      <motion.div
        className="impact__card"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* LEFT */}
        <div className="impact__panel">
          <div className="impact__list">
            {items.map((it, i) => (
              <button
                key={it.heading}
                type="button"
                className={`impact__item${i === active ? ' is-active' : ''}`}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                onClick={() => select(i)}
                aria-pressed={i === active}
              >
                <span>{it.heading}</span>
                <span className="impact__arrow"><FiArrowRight /></span>
              </button>
            ))}
          </div>

          <div className="impact__foot">
            <p>Explore the full picture of the difference we make together.</p>
            <a className="impact__see" href="/how-we-help">
              See all our impact <FiArrowRight />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="impact__media">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={current.image}
              alt={current.heading}
              className="impact__img"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="impact__overlay"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease }}
            >
              <h3>{current.heading}</h3>
              <p>{current.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}