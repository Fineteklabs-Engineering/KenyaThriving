import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { FiAward, FiTool, FiBookOpen, FiBook, FiEdit3 } from 'react-icons/fi';
import '../styles/how-we-help-impact.css';

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };

// 👇 content from your reference (sums to the 46 children we support). Reorder/relabel freely.
const stats = [
  { icon: <FiAward />,    value: 1,  label: 'College' },
  { icon: <FiTool />,     value: 10, label: 'Vocational Training Institution' },
  { icon: <FiBookOpen />, value: 13, label: 'High School' },
  { icon: <FiBook />,     value: 15, label: 'Junior Secondary School' },
  { icon: <FiEdit3 />,    value: 7,  label: 'Primary School' },
];

/* counts from 0 → `to` when scrolled into view; respects reduced-motion */
function CountUp({ to, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const prefersReduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (prefersReduced) { setValue(to); return; }
    if (!inView) { setValue(0); return; }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, prefersReduced]);

  return <span ref={ref}>{value}</span>;
}

export default function HowWeHelpImpact() {
  return (
    <section className="hwi">
      <motion.div
        className="hwi__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2 className="hwi__title" variants={rise}>Impacts</motion.h2>
        <motion.p className="hwi__sub" variants={rise}>
          Every child we support is on a path forward. Here&apos;s where the 46 children and
          young people in our care are learning today.
        </motion.p>
      </motion.div>

      <motion.div
        className="hwi__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
      >
        {stats.map((s) => (
          <motion.div className="hwi__item" key={s.label} variants={rise}>
            <span className="hwi__icon" aria-hidden="true">{s.icon}</span>
            <span className="hwi__num"><CountUp to={s.value} /></span>
            <span className="hwi__label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}