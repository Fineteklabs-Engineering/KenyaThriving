import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import '../styles/hero.css';

const ease = [0.22, 1, 0.36, 1];
const ROTATE_MS = 6000;

const FUNDRAISER_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788112381/WhatsApp_Image_2026-08-29_at_21.37.51_iofqwa.jpg';

const slides = [
  {
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787834772/IMG_1305_n80m9d.jpg',
    heading: 'Making a Difference Where It Counts',
    cta: 'Donate Now',
    ctaLink: '/donation',
  },
  
  {
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788179983/IMG_4164-scaled_ru1pwl.webp',
    heading: 'Improving Lives of Orphaned Children in Kenya',
    cta: 'Donate Now',
    ctaLink: '/donation',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const s = slides[active];

  return (
    <header className="hero">
      {/* rotating backgrounds */}
      <div className="hero__bgs">
        <AnimatePresence>
          <motion.div
            key={active}
            className="hero__bg"
            style={{ backgroundImage: `url(${s.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        {/* LEFT — heading (centered) + CTA (bottom) */}
        <div className="hero__content">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="hero__heading-wrap"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <h1 className="hero__title">{s.heading}</h1>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.a
              key={active}
              href={s.ctaLink}
              className="hero__cta"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.05 }}
            >
              {s.cta} <FiArrowRight />
            </motion.a>
          </AnimatePresence>
        </div>

        {/* RIGHT — constant fundraiser promo */}
        <div className="hero__promo">
          <span className="hero__promo-eyebrow">Upcoming Fundraiser</span>
          <div className="hero__promo-card">
            <img src={FUNDRAISER_IMG} alt="Cycling the Liverpool–Leeds Canal for Kenya" />
            <div className="hero__promo-body">
              <p className="hero__promo-title">Cycling the Liverpool–Leeds Canal</p>
              <p className="hero__promo-meta">127 miles · £5,000 target</p>
            </div>
          </div>
          <a className="hero__promo-link" href="/donation">
            Learn More <FiArrowUpRight />
          </a>
        </div>
      </div>

      {/* slide dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  );
}