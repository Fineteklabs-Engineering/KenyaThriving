import { motion } from 'motion/react';
import { FiHeart, FiArrowUpRight } from 'react-icons/fi';
import '../styles/testimonials.css';

const ease = [0.22, 1, 0.36, 1];

// left image (gets the fixed/parallax effect on desktop)
const STORY_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788165649/Nessy-Atieno-Grade-9-2025_vwlumk.jpg';

export default function Testimonials() {
  return (
    <section className="tst">
      <div className="tst__inner">
        {/* LEFT — image with background-attachment: fixed */}
        <motion.div
          className="tst__media"
          style={{ backgroundImage: `url(${STORY_IMG})` }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        />

        {/* RIGHT — story content */}
        <motion.div
          className="tst__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            className="tst__eyebrow"
            variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease }}
          >
            <FiHeart /> Stories of Change
          </motion.span>

          <motion.h2
            className="tst__title"
            variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            A long road to a bright future
          </motion.h2>

          <motion.p
            className="tst__text"
            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            Orphaned at four and mistreated by those meant to care for her, Jane found love at a
            children&apos;s home and excelled in school. A Kenya Thriving grant took her to college —
            and in 2024 she graduated with a degree in Engineering.
          </motion.p>

          <motion.a
            className="tst__btn"
            href="/inspring-stories"
            variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease }}
          >
            Read More Stories <FiArrowUpRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}