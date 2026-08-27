import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FiHeart } from 'react-icons/fi';
import '../styles/support.css';

const ease = [0.22, 1, 0.36, 1];
const HEADING = 'Be Part of Something Meaningful';
const TYPE_MS = 55; // per-character speed

// ONE background image spanning the whole band — paste URL here
const SUPPORT_BG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787822423/Making-masks-2023_vrq3xa.jpg';

const actions = [
  {
    title: 'Become\nA Volunteer',
    desc: 'Join a community giving their time and skills to help Kenya\u2019s children thrive.',
    link: '/become-a-volunteer',
  },
  {
    title: 'Donate &\nChange Lives',
    desc: 'Your gift funds school fees, uniforms and learning materials - 100% reaches the children.',
    link: '/donation',
    cta: 'Donate Now',
    middle: true,
  },
  {
    title: 'Start A\nFundraiser',
    desc: 'Rally your friends and raise funds for a child\u2019s education through your own campaign.',
    link: '/become-a-volunteer',
  },
];

function useTypewriter(text, active, speed) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) { setCount(0); return; }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);

  return { typed: text.slice(0, count), done: count >= text.length };
}

export default function Support() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { amount: 0.6 });
  const { typed, done } = useTypewriter(HEADING, inView, TYPE_MS);

  return (
    <section className="support">
      <div className="support__head" ref={headRef}>
        <motion.span
          className="support__eyebrow"
          initial={{ y: 16, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <FiHeart /> Take Action
        </motion.span>

        <h2 className="support__title">
          <span className="support__typed">{typed}</span>
          <span className={`support__caret${done ? ' is-done' : ''}`} aria-hidden="true" />
        </h2>
      </div>

      <div className="support__band">
        {/* one shared background image + base darkening */}
        <div
          className="support__bg"
          style={SUPPORT_BG ? { backgroundImage: `url(${SUPPORT_BG})` } : undefined}
          aria-hidden="true"
        />
        <div className="support__base" aria-hidden="true" />

        <motion.div
          className="support__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
        >
          {actions.map((a) => (
            <motion.a
              key={a.title}
              href={a.link}
              className={`support__col${a.middle ? ' is-middle' : ''}`}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="support__body">
                <h3 className="support__col-title">
                  {a.title.split('\n').map((line, k) => (
                    <span key={k} className="support__line">{line}</span>
                  ))}
                </h3>
                <p className="support__desc">{a.desc}</p>
                {a.cta && <span className="support__btn">{a.cta}</span>}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}