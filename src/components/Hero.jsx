import { motion } from 'motion/react';
import { FiArrowRight, FiCheck, FiMapPin, FiBookOpen } from 'react-icons/fi';
import Navbar from './Navbar';
import '../styles/hero.css'


const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <header className="hero">
    
      <div className="hero__left">
        <div className="hero__media" style={{ backgroundImage: `url(https://res.cloudinary.com/gjpfbvzb/image/upload/v1787743843/h4-banner05_b4y6ul.png)` }} aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />

        <Navbar />

        <motion.div
          className="hero__copy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
        >
          <motion.h1
            className="hero__title"
            variants={{ hidden: { y: 28, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="hero__title-accent">Together,</span> We Help<br />Children Thrive
          </motion.h1>

          <motion.a
            href="/become-a-volunteer"
            className="hero__link"
            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
          Become a Volunteer <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>

      {/* ---------- RIGHT ---------- */}
            {/* ---------- RIGHT ---------- */}
      <motion.div
        className="hero__right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="hero__right-top">
          <span className="hero__eyebrow">Upcoming fundraiser</span>
          <span className="hero__tag"><FiMapPin /> Migori, Kenya</span>
        </div>

        <motion.div
          className="hero__campaign"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
        >
          <h2 className="hero__campaign-title">Cycling the Liverpool–Leeds Canal for Kenya</h2>

          <div className="hero__campaign-row">
            <div className="hero__card">
              <img src="https://res.cloudinary.com/gjpfbvzb/image/upload/v1788112381/WhatsApp_Image_2026-08-29_at_21.37.51_iofqwa.jpg" alt="Riding to raise funds for the young people we support in Migori" />
            </div>
            <a href="/donation" className="hero__donate">Donate Now</a>
          </div>
        </motion.div>

        {/* target line */}
        <motion.div
          className="hero__impact"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
        >
          <FiBookOpen className="hero__impact-icon" />
          <p>Riding 127 miles this September to raise <strong>£5,000</strong> for the students we support in Migori.</p>
        </motion.div>

        <motion.ul
          className="hero__stats"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
        >
          <li><FiCheck /> 127 miles / 203 km</li>
          <li><FiCheck /> £5,000 target</li>
          <li><FiCheck /> 46 students supported</li>
        </motion.ul>
      </motion.div>
    </header>
  );
}