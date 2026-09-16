import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { FiPlay } from 'react-icons/fi';
import '../styles/why-we-started.css';

const VIDEO_URL = 'https://res.cloudinary.com/gjpfbvzb/video/upload/v1789534049/WhatsApp_Video_2026-09-13_at_20.02.46_it4hcg.mp4';
// poster auto-generated from the video (frame at 2s). Change so_2 to another second if that frame isn't ideal.
const POSTER = 'https://res.cloudinary.com/gjpfbvzb/video/upload/so_2/v1789534049/WhatsApp_Video_2026-09-13_at_20.02.46_it4hcg.jpg';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };

export default function WhyWeStarted() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="wws">
      <div className="wws__inner">
        <motion.div
          className="wws__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2 className="wws__title" variants={rise}>Why We Started</motion.h2>
          <motion.p className="wws__text" variants={rise}>
            Hear from the people behind Kenya Thriving on what moved them to begin this journey,
            and the children whose lives it set out to change.
          </motion.p>
        </motion.div>

        <motion.div
          className="wws__player"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <video
            ref={videoRef}
            className="wws__video"
            poster={POSTER}
            controls={playing}
            preload="none"
            playsInline
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>

          {!playing && (
            <button className="wws__overlay" onClick={play} aria-label="Play the video">
              <span className="wws__play"><FiPlay /></span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}