import { motion } from 'motion/react';
import { FiHeart } from 'react-icons/fi';
import '../styles/about.css';

const ease = [0.22, 1, 0.36, 1];


const ABOUT_IMAGE = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787818591/DONATE_Page_Picture-removebg-preview_idllda.png';


const ABOUT_BG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787819354/ChatGPT_Image_Aug_27_2026_11_28_52_AM_e23i4w.png';

export default function About() {
  
  return (
    <section className="about">
      {ABOUT_BG && (
        <div
          className="about__bg"
          style={{ backgroundImage: `url(${ABOUT_BG})` }}
          aria-hidden="true"
        />
      )}

      <motion.div
        className="about__content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.span
          className="about__eyebrow"
          variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.5, ease }}
        >
          <FiHeart /> About Us
        </motion.span>

        <motion.h2
          className="about__title"
          variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          Empowering Kenya&apos;s Orphaned Children Through Education, Care, and Community
        </motion.h2>

        <motion.a
          className="about__btn"
          href="/about-us"
          variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.5, ease }}
        >
          Our Story
        </motion.a>
      </motion.div>

      {ABOUT_IMAGE && (
        <motion.div
          className="about__image"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          <img src={ABOUT_IMAGE} alt="Children supported by Kenya Thriving" />
        </motion.div>
      )}
    </section>
  );
}