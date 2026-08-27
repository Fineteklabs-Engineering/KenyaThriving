import { motion } from 'motion/react';
import '../styles/how-we-support.css';

const ease = [0.22, 1, 0.36, 1];


const SUPPORT_BG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787834772/IMG_1305_n80m9d.jpg';

export default function HowWeSupport() {
  return (
    <section className="hws">
      <div
        className="hws__bg"
        style={SUPPORT_BG ? { backgroundImage: `url(${SUPPORT_BG})` } : undefined}
        aria-hidden="true"
      />
      <div className="hws__scrim" aria-hidden="true" />

      <div className="hws__inner">
        {/* left overlaid heading — slides in from the left */}
        <motion.div
          className="hws__intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            className="hws__eyebrow"
            variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            How We Support
          </motion.span>
          <motion.h2
            className="hws__title"
            variants={{ hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1 } }}
            transition={{ duration: 0.7, ease }}
          >
            Creating bright futures from the ground up
          </motion.h2>
        </motion.div>

        {/* right white card — slides in from the right */}
        <motion.div
          className="hws__card"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
        >
          <span className="hws__card-eyebrow">Education</span>
          <h3 className="hws__card-title">Education: A Pathway to a Brighter Future</h3>
          <p className="hws__card-text">
            Education is a cherished gift, and every Kenyan child is grateful for the opportunity to
            learn. Beyond acquiring knowledge, education instills confidence and critical thinking
            skills essential for future success. Grants from Kenya Thriving enable the Learning Stars
            initiative to provide these opportunities to all participating children.
          </p>
          <p className="hws__card-text">
            While the Kenyan government contributes to education, additional costs such as uniforms,
            shoes, books, school levies, exam fees, and boarding expenses pose significant challenges.
            For families with multiple children, these expenses can be overwhelming. The Learning
            Stars initiative alleviates this burden by covering these costs, ensuring that financial
            constraints do not hinder a child&apos;s education.
          </p>
        </motion.div>
      </div>
    </section>
  );
}