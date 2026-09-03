import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/hero.css';

const ease = [0.22, 1, 0.36, 1];

const HERO_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787743843/h4-banner05_b4y6ul.png';

const stats = [
  { value: '51',   label: 'Children Supported' },
  { value: '46',   label: 'Partner Schools' },
  { value: '100%', label: 'To the Children' },
  { value: '2012', label: 'Helping Since' },
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${HERO_IMG})` }} aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        >
          <motion.span
            className="hero__eyebrow"
            variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease }}
          >
            Every Child Deserves a Chance
          </motion.span>

          <motion.h1
            className="hero__title"
            variants={{ hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            Change Lives<br />With Your Gift.
          </motion.h1>

          <motion.p
            className="hero__text"
            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            At Kenya Thriving, we give orphaned and vulnerable children in Kenya the education, care
            and support they need to build a brighter future.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            <a href="/donation" className="hero__btn hero__btn--primary">
              Donate Now <span className="hero__btn-ic"><FiArrowRight /></span>
            </a>
            <a href="/how-we-help" className="hero__btn hero__btn--ghost">
              Learn More <span className="hero__btn-ic"><FiArrowRight /></span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* stat cards */}
      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.5 }}
      >
        {stats.map((s) => (
          <div className="hero__stat" key={s.label}>
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </header>
  );
}