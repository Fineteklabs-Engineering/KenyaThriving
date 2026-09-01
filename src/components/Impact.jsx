import { motion } from 'motion/react';
import { FiHeart, FiArrowRight, FiBookOpen, FiPackage, FiTool, FiUsers } from 'react-icons/fi';
import '../styles/impacts.css';

const ease = [0.22, 1, 0.36, 1];

const LEFT_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821623/IMG_4235-scaled_l9tpjh.webp';
const RIGHT_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821901/IMG_4354-scaled_ds3z6l.webp';

const features = [
  { icon: <FiBookOpen />, label: 'Boarding School Enrolment' },
  { icon: <FiPackage />,  label: 'Learning Materials' },
  { icon: <FiTool />,     label: 'Practical Skills' },
  { icon: <FiUsers />,    label: 'Mentorship & Counselling' },
];

export default function Impact() {
  return (
    <section className="impact">
      <div className="impact__stage">
        {/* side photos */}
        <div className="impact__side impact__side--left" style={{ backgroundImage: `url(${LEFT_IMG})` }} aria-hidden="true" />
        <div className="impact__side impact__side--right" style={{ backgroundImage: `url(${RIGHT_IMG})` }} aria-hidden="true" />

        {/* centered dark panel */}
        <motion.div
          className="impact__panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* TOP — eyebrow */}
          <motion.span
            className="impact__eyebrow"
            variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease }}
          >
            <FiHeart /> Our Impact
          </motion.span>

          {/* MIDDLE — heading + checks + CTA */}
          <div className="impact__mid">
            <motion.h2
              className="impact__title"
              variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease }}
            >
              We help children <span className="impact__accent">learn</span>,<br />
              <span className="impact__accent">grow</span>, and <span className="impact__accent">thrive</span>
            </motion.h2>

            <motion.div
              className="impact__checks"
              variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.5, ease }}
            >
              <span>✓ 51 children supported</span>
              <span>✓ 100% reaches the children</span>
            </motion.div>

            <motion.a
              className="impact__cta"
              href="/how-we-help"
              variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.5, ease }}
            >
              See Our Impact <FiArrowRight />
            </motion.a>
          </div>

          {/* BOTTOM — feature row */}
          <motion.ul
            className="impact__features"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
          >
            {features.map((f) => (
              <li key={f.label}>
                <span className="impact__feature-icon">{f.icon}</span>
                <span className="impact__feature-label">{f.label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}