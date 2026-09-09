import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/fundraiser.css';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };
const fromLeft = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fromRight = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };

// 👇 two photos for the collage (the poster isn't used in this layout). Swap freely.
const IMG_A = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788112381/WhatsApp_Image_2026-08-29_at_21.37.51_iofqwa.jpg';
const IMG_B = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788963736/WhatsApp_Image_2026-08-27_at_19.41.47_kh0d8l.jpg';
// 👇 replace with your real JustGiving fundraiser link
const JUSTGIVING_URL = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861579/Andy-Otacho-23_emkd5z.jpg';

const stats = [
  { value: '127 mi', label: 'The full Leeds–Liverpool Canal route, almost all off-road.' },
  { value: '£5,000', label: 'Our fundraising target for the ride.' },
  { value: '46', label: 'Children and young people supported in Migori, Kenya.' },
];

export default function Fundraiser() {
  return (
    <section className="fnd">
      <div className="fnd__inner">
        <div className="fnd__grid">
          {/* LEFT — heading + intro, then large image */}
          <motion.div
            className="fnd__col"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          >
            <div className="fnd__head">
              <motion.h2 className="fnd__title" variants={rise}>
                Turning Compassion<br />into Meaningful Impact
              </motion.h2>
              <motion.p className="fnd__intro" variants={rise}>
                This September, we&apos;re taking on a challenge for the children and young
                people we support in Kenya.
              </motion.p>
            </div>
            <motion.div className="fnd__img fnd__img--a" variants={fromLeft}>
              <div className="fnd__img-inner" style={{ backgroundImage: `url(${IMG_A})` }} />
            </motion.div>
          </motion.div>

          {/* RIGHT — upper image, then body + button */}
          <motion.div
            className="fnd__col"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          >
            <motion.div className="fnd__img fnd__img--b" variants={fromRight}>
              <div className="fnd__img-inner" style={{ backgroundImage: `url(${IMG_B})` }} />
            </motion.div>
            <div className="fnd__body">
              <motion.p className="fnd__text" variants={rise}>
                We&apos;re cycling the full length of the Leeds–Liverpool Canal - 127 miles,
                almost entirely off-road along the towpath - to raise £5,000 for the 46
                children and young people in our care in Migori, Southwest Kenya. Every pound
                goes directly to their education, care and future.
              </motion.p>
              <motion.div variants={rise}>
                <a href={JUSTGIVING_URL} target="_blank" rel="noopener noreferrer" className="fnd__btn">
                  Sponsor the Ride <span className="fnd__btn-ic"><FiArrowRight /></span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* stat bar */}
        <motion.div
          className="fnd__stats"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
        >
          {stats.map((s) => (
            <motion.div className="fnd__stat" key={s.label} variants={rise}>
              <span className="fnd__stat-num">{s.value}</span>
              <span className="fnd__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}