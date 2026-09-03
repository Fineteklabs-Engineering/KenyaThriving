import { motion } from 'motion/react';
import { FiHeart, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import '../styles/impacts.css';

const ease = [0.22, 1, 0.36, 1];

const cards = [
  {
    label: 'Boarding School Enrolment',
    color: '#0BA3C4',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821623/IMG_4235-scaled_l9tpjh.webp',
    link: '/how-we-help',
  },
  {
    label: 'Learning Materials',
    color: '#16333B',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821706/IMG_4176-1-scaled_lpbuoq.webp',
    link: '/how-we-help',
  },
  {
    label: 'Practical Skills',
    color: '#8FA31E',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787903109/IMG_1261_i8rwml.jpg',
    link: '/how-we-help',
  },
  {
    label: 'Mentorship & Counselling',
    color: '#B0413E',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821901/IMG_4354-scaled_ds3z6l.webp',
    link: '/how-we-help',
  },
];

export default function Impact() {
  return (
    <section className="impact">
      <motion.div
        className="impact__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
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
          Human Services with a<br />Global Heart.
        </motion.h2>
      </motion.div>

      <motion.div
        className="impact__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {cards.map((c) => (
          <motion.a
            key={c.label}
            href={c.link}
            className="impact__card"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="impact__card-head" style={{ background: c.color }}>
              <span className="impact__card-label">{c.label}</span>
              <span className="impact__card-ic"><FiArrowUpRight /></span>
            </div>
            <div className="impact__card-media" style={{ backgroundImage: `url(${c.image})` }} aria-hidden="true" />
          </motion.a>
        ))}
      </motion.div>

      <motion.a
        className="impact__bar"
        href="/how-we-help"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="impact__bar-text">Ready to help them? Explore the difference we make together.</span>
        <span className="impact__bar-cta">View All Impacts <span className="impact__bar-ic"><FiArrowRight /></span></span>
      </motion.a>
    </section>
  );
}