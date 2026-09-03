import { motion } from 'motion/react';
import { FiHeart, FiArrowRight, FiStar, FiUsers } from 'react-icons/fi';
import '../styles/about.css';

const ease = [0.22, 1, 0.36, 1];

// greyish decorative mark (top-left) — paste your icon URL
const ABOUT_MARK = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788422893/image-removebg-preview_1_ies04g.png';
// the portrait image on the right
const ABOUT_IMAGE = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788165649/Nessy-Atieno-Grade-9-2025_vwlumk.jpg';
// small avatars for the volunteer card (optional) — paste URLs or leave empty
const AVATARS = ['', '', '', ''];

const features = [
  { icon: <FiHeart />, title: 'Be Someone\u2019s Miracle', text: 'Sponsor a child\u2019s education and change the course of their life.' },
  { icon: <FiStar />,  title: 'Your Kindness Starts Here', text: 'Every gift funds school fees, uniforms and learning materials.' },
  { icon: <FiUsers />, title: 'Together We Change Lives', text: 'Join a community giving orphaned children in Kenya a brighter future.' },
];

export default function About() {
  return (
    <section className="about">
      {ABOUT_MARK && (
        <img className="about__mark" src={ABOUT_MARK} alt="" aria-hidden="true" />
      )}

      <div className="about__inner">
        {/* LEFT */}
        <motion.div
          className="about__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
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
            Educating Kenya&apos;s<br />Children with Heart.
          </motion.h2>

          <motion.p
            className="about__lead"
            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            We give orphaned and vulnerable children in Kenya the education, care and community they
            need to thrive.
          </motion.p>

          <motion.ul
            className="about__features"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {features.map((f) => (
              <motion.li
                key={f.title}
                className="about__feature"
                variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="about__feature-icon">{f.icon}</span>
                <div className="about__feature-body">
                  <h3 className="about__feature-title">{f.title}</h3>
                  <p className="about__feature-text">{f.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.a
            className="about__btn"
            href="/about-us"
            variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease }}
          >
            More About Us <span className="about__btn-ic"><FiArrowRight /></span>
          </motion.a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="about__media"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="about__photo">
            {ABOUT_IMAGE && <img src={ABOUT_IMAGE} alt="Children supported by Kenya Thriving" />}
          </div>

          <div className="about__badge">
            <p className="about__badge-title">Volunteer 12k+</p>
            <div className="about__avatars">
              {AVATARS.map((a, i) => (
                <span key={i} className="about__avatar" style={a ? { backgroundImage: `url(${a})` } : undefined} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}