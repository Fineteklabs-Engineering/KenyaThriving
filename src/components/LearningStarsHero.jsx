import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/learning-stars-hero.css';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };

// 👇 paste your hero background image URL
const HERO_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787744589/images_zqnc5m.jpg';

export default function LearningStarsHero() {
  return (
    <section className="lsh">
      <div className="lsh__bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
      <div className="lsh__overlay" aria-hidden="true" />

      <div className="lsh__inner">
        <motion.div
          className="lsh__content"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.span className="lsh__eyebrow" variants={rise}>
            The Learning Stars Initiative
          </motion.span>
          <motion.h1 className="lsh__title" variants={rise}>
            Where Every Child<br />Can Shine
          </motion.h1>
          <motion.p className="lsh__text" variants={rise}>
            Learning Stars gives orphaned and vulnerable children in Kenya access to quality
            education, care and mentorship — the support they need not just to survive, but to thrive.
          </motion.p>
          <motion.div className="lsh__actions" variants={rise}>
            <a href="/donation" className="lsh__btn lsh__btn--primary">
              Donate Now <span className="lsh__btn-ic"><FiArrowRight /></span>
            </a>
            <a href="/how-we-help" className="lsh__btn lsh__btn--ghost">
              Learn More <span className="lsh__btn-ic"><FiArrowRight /></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}