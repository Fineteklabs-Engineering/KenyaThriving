import { motion } from 'motion/react';
import { FiStar } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';      
import '../styles/learning-stars.css'


const ease = [0.22, 1, 0.36, 1];
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=REPLACE_ME'; 

const stats = [
  { value: '51',   label: 'Children Supported' },
  { value: '46',   label: 'Partner Schools' },
  { value: '100%', label: 'To the Children' },
];

export default function LearningStars() {
  return (
    <section className="ls">
      <div className="ls__inner">
        {/* LEFT — cyan card */}
        <motion.div
          className="ls__card"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="ls__eyebrow"><FiStar /> Learning Stars</span>
          <h2 className="ls__title">Empowering Lives Through Education</h2>
          <p className="ls__text">
            We place orphaned and vulnerable children in boarding schools and support them all the
            way - school fees, uniforms and learning materials, plus mentorship, counselling and
            life skills.
          </p>
          <img className="ls__art" src="https://res.cloudinary.com/gjpfbvzb/image/upload/v1787750985/Gemini_Generated_Image_okdpi8okdpi8okdp-removebg-preview_garcxu.png" alt="" aria-hidden="true" />
        </motion.div>

       
        <motion.div
          className="ls__media"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <img className="ls__media-img" src="https://res.cloudinary.com/gjpfbvzb/image/upload/v1787748336/images_2_wbod3v.jpg" alt="Learning Stars children in class" />
          <div className="ls__media-scrim" aria-hidden="true" />

          <motion.a
            className="ls__play"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play the Learning Stars video"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease, delay: 0.25 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay />
          </motion.a>

          <motion.ul
            className="ls__stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          >
            {stats.map((s) => (
              <motion.li
                key={s.label}
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="ls__stat-value">{s.value}</span>
                <span className="ls__stat-label">{s.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}