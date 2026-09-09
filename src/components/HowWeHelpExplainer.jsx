import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/how-we-help-explainer.css';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };
const fromLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };

// 👇 replace with your image
const IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788958934/IMG_0857_033x_05x_fp07ig.jpg';

export default function HowWeHelpExplainer() {
  return (
    <section className="hwe">
      <div className="hwe__inner">
        {/* LEFT — image */}
        <motion.div
          className="hwe__media"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={fromLeft}
        >
          <div className="hwe__img" style={{ backgroundImage: `url(${IMG})` }} />
        </motion.div>

        {/* RIGHT — content */}
        <motion.div
          className="hwe__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
        >
          <motion.span className="hwe__eyebrow" variants={rise}>
            <span className="hwe__eyebrow-mark" aria-hidden="true" />
            Our Approach
          </motion.span>

          <motion.h2 className="hwe__title" variants={rise}>How We Help</motion.h2>

          <motion.p className="hwe__text" variants={rise}>
            We help orphaned and vulnerable children grow and thrive within their own
            community and culture. Each child receives the love, care and support they need
            to recover, stay in school, and step into the future as a healthy, educated and
            well-rounded young person.
          </motion.p>

          <motion.p className="hwe__text" variants={rise}>
            Through the Learning Stars initiative, our grants place children in boarding
            schools that offer a home-like environment and comprehensive care. And because
            100% of every donation is spent within the local economy, each gift also helps
            reduce dependency and strengthen the wider community.
          </motion.p>

          <motion.div variants={rise}>
            <a href="/donation" className="hwe__btn">
              How to Help <span className="hwe__btn-ic"><FiArrowRight /></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}