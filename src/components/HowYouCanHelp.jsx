import { motion } from 'motion/react';
import { FiUserPlus, FiHeart, FiTrendingUp, FiUsers, FiShare2, FiArrowRight } from 'react-icons/fi';
import '../styles/how-you-can-help.css';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };

const items = [
  { icon: <FiUserPlus />,   title: 'Sponsor a Child',  desc: 'Help cover school fees, uniforms, and learning materials.' },
  { icon: <FiHeart />,      title: 'Make a Donation',  desc: 'Every contribution, big or small, goes directly to the initiative.' },
  { icon: <FiTrendingUp />, title: 'Fundraise',        desc: 'Organize an event or campaign to support Learning Stars.' },
  { icon: <FiUsers />,      title: 'Volunteer',        desc: 'Share your skills or time to make an impact.' },
  { icon: <FiShare2 />,     title: 'Spread the Word',  desc: 'Raise awareness about our mission and encourage others to join.' },
];

export default function HowYouCanHelp() {
  return (
    <section className="help">
      <motion.div
        className="help__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2 className="help__title" variants={rise}>How You Can Help</motion.h2>
        <motion.p className="help__join" variants={rise}>Join Us in Making a Difference</motion.p>
      </motion.div>

      <motion.div
        className="help__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
      >
        {items.map((it) => (
          <motion.div className="help__item" key={it.title} variants={rise}>
            <span className="help__icon" aria-hidden="true">{it.icon}</span>
            <h3 className="help__item-title">{it.title}</h3>
            <p className="help__item-desc">{it.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="help__cta-wrap">
        <motion.a
          href="/donation"
          className="help__btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
        >
          Donate Now <span className="help__btn-ic"><FiArrowRight /></span>
        </motion.a>
      </div>
    </section>
  );
}