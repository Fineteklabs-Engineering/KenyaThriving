import { motion } from 'motion/react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import '../styles/fundraiser.css';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };
const fromLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };


const IMG_MAIN = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788112381/WhatsApp_Image_2026-08-29_at_21.37.51_iofqwa.jpg';
const IMG_INSET = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787904495/On-the-way-to-Bantry-Day-1_psklnc.jpg';
const VIDEO_URL = '#';                        
const JUSTGIVING_URL = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861579/Andy-Otacho-23_emkd5z.jpg';

const points = [
  'Cycling the full length of the Leeds–Liverpool Canal - 127 miles (203 km).',
  'Almost entirely off-road, following the canal towpath the whole way.',
  'Raising £5,000 to support 46 children and young people in Migori, Kenya.',
];

export default function Fundraiser() {
  return (
    <section className="fnd">
      <div className="fnd__inner">
        {/* LEFT — layered images */}
        <motion.div
          className="fnd__media"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* main arched image */}
          <motion.div className="fnd__img-main" variants={fromLeft}>
            <div className="fnd__img" style={{ backgroundImage: `url(${IMG_MAIN})` }} />
            {/* award chip 
            <div className="fnd__award">
              <span className="fnd__award-mark" aria-hidden="true">★</span>
              <span>Daily ride updates on Facebook &amp; our page</span>
            </div>
            */}
          </motion.div>

          {/* floating stat badge */}
          <motion.div
            className="fnd__badge"
            variants={{ hidden: { opacity: 0, scale: 0.9, y: 10 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease } } }}
          >
            <span className="fnd__badge-num">18<sup>+</sup></span>
            <span className="fnd__badge-label">Years supporting Kenya&apos;s children</span>
          </motion.div>

          {/* inset arched image with play button */}
          <motion.div
            className="fnd__img-inset"
            variants={{ hidden: { opacity: 0, x: 40, y: 20 }, show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease } } }}
          >
            <div className="fnd__img" style={{ backgroundImage: `url(${IMG_INSET})` }} />
            <a className="fnd__play" href={VIDEO_URL} aria-label="Watch the story">
              <FiPlay />
            </a>
            <span className="fnd__dots" aria-hidden="true" />
          </motion.div>
        </motion.div>

        {/* RIGHT — content */}
        <motion.div
          className="fnd__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
        >
          <motion.span className="fnd__eyebrow" variants={rise}>
            <span className="fnd__eyebrow-mark" aria-hidden="true" />
            Upcoming Fundraiser
          </motion.span>

          <motion.h2 className="fnd__title" variants={rise}>
            Cycling 127 Miles to Change<br />Children&apos;s Lives
          </motion.h2>

          <motion.p className="fnd__lead" variants={rise}>
            This September, we&apos;re making the length of the Leeds–Liverpool Canal count —
            for the 46 young people we support in Migori, Kenya.
          </motion.p>

          <motion.ul className="fnd__points" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            {points.map((p) => (
              <motion.li key={p} className="fnd__point" variants={rise}>
                <span className="fnd__point-dot" aria-hidden="true" />
                {p}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={rise}>
            <a href={JUSTGIVING_URL} target="_blank" rel="noopener noreferrer" className="fnd__btn">
              Sponsor the Ride <span className="fnd__btn-ic"><FiArrowRight /></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}