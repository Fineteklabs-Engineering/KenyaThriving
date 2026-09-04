import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import '../styles/learning-stars-impact.css';

const ease = [0.22, 1, 0.36, 1];
const ROTATE_MS = 6000;

// 👇 replace each img with your real image URL (one per impact)
const impacts = [
  {
    n: '01',
    text: 'Enrolled numerous children in reputable boarding schools.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821623/IMG_4235-scaled_l9tpjh.webp',
  },
  {
    n: '02',
    text: 'Supplied essential educational materials, including uniforms, books, and stationery.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861640/20260502_082654441_iOS_x4pr2g.jpg',
  },
  {
    n: '03',
    text: 'Provision of learning practical skills to get them into work and break the cycle of poverty.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787903109/IMG_1261_i8rwml.jpg',
  },
];

export default function LearningStarsImpact() {
  const [active, setActive] = useState(0);

  // auto-rotate; restarts whenever active changes (so a dot click resets the timer)
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % impacts.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [active]);

  const current = impacts[active];

  return (
    <section className="lsi">
      {/* heading */}
      <motion.div
        className="lsi__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2
          className="lsi__title"
          variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          The Difference We&apos;re Making
        </motion.h2>
        <motion.p
          className="lsi__sub"
          variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          Through Learning Stars, your support is already changing lives. Here&apos;s the
          impact it creates for children across Kenya.
        </motion.p>
      </motion.div>

      {/* rotating stage */}
      <motion.div
        className="lsi__stage-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="lsi__stage">
          {/* image */}
          <div className="lsi__media-slot">
            <AnimatePresence>
              <motion.div
                key={active}
                className="lsi__media"
                style={{ backgroundImage: `url(${current.img})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease }}
              />
            </AnimatePresence>
          </div>

          {/* overlapping card */}
          <div className="lsi__card-slot">
            <AnimatePresence>
              <motion.article
                key={active}
                className="lsi__card"
                initial={{ opacity: 0, x: 46 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.6, ease }}
              >
                <div className="lsi__num">
                  <span className="lsi__num-dash" aria-hidden="true" />
                  {current.n}
                </div>
                <p className="lsi__statement">{current.text}</p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* dots */}
        <div className="lsi__dots">
          {impacts.map((im, i) => (
            <button
              key={im.n}
              className={`lsi__dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show impact ${im.n}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}