import { motion } from 'motion/react';
import { FiTarget, FiEye } from 'react-icons/fi';
import '../styles/mission-vission.css';

const ease = [0.22, 1, 0.36, 1];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
const group     = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };
const fromLeft  = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fromRight = { hidden: { opacity: 0, x: 60 },  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const rise      = { hidden: { opacity: 0, y: 24 },  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };

// 👇 replace with your image
const MV_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788179983/IMG_4164-scaled_ru1pwl.webp';

export default function MissionVision() {
  return (
    <section className="mv">
      <motion.div
        className="mv__inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* left — image + overlap card, then heading + description */}
        <motion.div className="mv__left" variants={group}>
          <motion.div className="mv__media" variants={group}>
            <motion.img
              className="mv__img"
              src={MV_IMG}
              alt="Children supported by Kenya Thriving"
              variants={fromLeft}
            />
            <motion.div className="mv__badge" variants={fromRight}>
              <p className="mv__badge-text">
                Every child deserves the chance to learn, grow and thrive.
              </p>
            </motion.div>
          </motion.div>

          <motion.h3 className="mv__lead" variants={rise}>
            Guided by compassion, driven by purpose.
          </motion.h3>
          <motion.p className="mv__desc" variants={rise}>
            Since 2012, we&apos;ve helped children across Kenya stay in school and
            thrive — providing the education, care and support they need to build a
            brighter future.
          </motion.p>
        </motion.div>

        {/* right — mission + vision */}
        <motion.div className="mv__right" variants={group}>
          <motion.div className="mv__item" variants={rise}>
            <span className="mv__icon mv__icon--mission" aria-hidden="true"><FiTarget /></span>
            <h4 className="mv__item-title">Mission</h4>
            <p className="mv__item-text">
              Kenya Thriving works to change the lives of orphaned and marginalised  children by giving them a present and a future. 
            </p>
          </motion.div>

          <motion.div className="mv__item" variants={rise}>
            <span className="mv__icon mv__icon--vision" aria-hidden="true"><FiEye /></span>
            <h4 className="mv__item-title">Vision</h4>
            <p className="mv__item-text">
             We believe it’s not just what we do but how we do it. Our vision is  to care with compassion, empower through education, inspire development and watch children grow to reach their fullest potential. 
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}