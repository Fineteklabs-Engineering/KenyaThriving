import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/learning-stars-about.css';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };

export default function LearningStarsAbout() {
  return (
    <section className="lsa">
      <div className="lsa__inner">
        {/* left — heading */}
        <motion.div
          className="lsa__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span className="lsa__eyebrow" variants={rise}>The Programme</motion.span>
          <motion.h2 className="lsa__title" variants={rise}>About Learning Stars</motion.h2>
        </motion.div>

        {/* right — body */}
        <motion.div
          className="lsa__body"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
        >
          <motion.p className="lsa__text" variants={rise}>
            Kenya Thriving launched the Learning Stars Initiative to open up educational
            opportunities for orphaned and underprivileged children across Kenya. The
            programme focuses on enrolling these children in boarding schools, making sure
            they receive quality education within a safe, supportive environment where they
            can truly flourish.
          </motion.p>
          <motion.p className="lsa__text" variants={rise}>
            Beyond the classroom, Learning Stars wraps around each child with the care they
            need to thrive — school fees, uniforms, learning materials, nutritious meals,
            healthcare and mentorship. By meeting both their educational and personal needs,
            we help these children build the confidence and stability to shine, break the
            cycle of poverty, and shape a brighter future for themselves and their communities.
          </motion.p>

          <motion.div variants={rise}>
            <a href="/donation" className="lsa__btn">
              Support a Child <span className="lsa__btn-ic"><FiArrowRight /></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}