import { motion } from 'motion/react';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/how-we-support.css';

const ease = [0.22, 1, 0.36, 1];

const SUPPORT_BG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788173581/ChatGPT_Image_Aug_31_2026_01_52_37_PM_yftpmi.png';

export default function HowWeSupport() {
  return (
    <section className="hws">
      <div className="hws__clip">
        <div
          className="hws__bg"
          style={SUPPORT_BG ? { backgroundImage: `url(${SUPPORT_BG})` } : undefined}
          aria-hidden="true"
        />

        <div className="hws__inner">
          <motion.div
            className="hws__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="hws__eyebrow">How We Support</span>
            <h2 className="hws__title">Creating bright futures from the ground up</h2>
            <p className="hws__text">
              Covering school fees, uniforms and learning materials so financial barriers never stand
              between a child and their education.
            </p>
            <a className="hws__link" href="/how-we-help">
              Pathway to a Brighter Future <FiArrowUpRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}