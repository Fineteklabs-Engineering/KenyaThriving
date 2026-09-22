import { motion } from 'motion/react';
import { FiPlay, FiCheck, FiArrowRight } from 'react-icons/fi';
import '../styles/stories-hero.css';

const IMAGES = {
  topLeft:     'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788165649/Nessy-Atieno-Grade-9-2025_vwlumk.jpg',
  bottomLeft:  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787748336/images_2_wbod3v.jpg',
  topRight:    'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787743843/h4-banner05_b4y6ul.png',
  bottomRight: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1790030005/Jane-Asiko_krwxaj.jpg',
};

const FEATURES = ['Education', 'Healthcare', 'Mentorship'];

// each mosaic slot; `to` + `name` turn it into a clickable story card
const CELLS = [
  { slot: 1, src: IMAGES.topLeft,     alt: 'Nessy, a Learning Stars child',        to: '/inspiring-stories/nessy',      name: 'Nessy' },
  { slot: 2, src: IMAGES.bottomLeft,  alt: 'Children supported by Kenya Thriving', to: null, name: null },
  { slot: 3, src: IMAGES.topRight,    alt: 'A Kenya Thriving community programme', to: null, name: null },
  { slot: 4, src: IMAGES.bottomRight, alt: 'Jane Asiko, a Learning Stars child',   to: '/inspiring-stories/jane-asiko', name: 'Jane Asiko' },
];

// left-column copy: simple fade-up on load
const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

// mosaic parent: orchestrates the stagger on scroll-in
const mosaic = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const STACK = {
  1: { x: 90,  y: 70,  rotate: -8 },
  2: { x: 90,  y: -70, rotate: 6 },
  3: { x: -90, y: 70,  rotate: 8 },
  4: { x: -90, y: -70, rotate: -6 },
};

const card = (slot) => ({
  hidden: { opacity: 0, scale: 0.72, ...STACK[slot] },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 130, damping: 17, mass: 0.9 },
  },
});

function Cell({ cell }) {
  const media = (
    <>
      <img src={cell.src} alt={cell.to ? '' : cell.alt} aria-hidden={cell.to ? true : undefined} />
      {cell.to && (
        <span className="sh__cap">
          <span className="sh__cap-name">{cell.name}</span>
          <span className="sh__cap-cta">Read the story <FiArrowRight /></span>
        </span>
      )}
    </>
  );

  return (
    <motion.figure
      className={`sh__cell sh__cell--${cell.slot}${cell.to ? ' sh__cell--link' : ''}`}
      variants={card(cell.slot)}
    >
      {cell.to ? (
        <a href={cell.to} className="sh__cell-link" aria-label={`Read ${cell.name}'s story`}>
          {media}
        </a>
      ) : (
        media
      )}
    </motion.figure>
  );
}

export default function StoriesHero() {
  return (
    <section className="sh">
      <div className="sh__inner">
        {/* left — copy */}
        <div className="sh__copy">
          <motion.h1 className="sh__title" variants={fade} custom={0} initial="hidden" animate="show">
            Stories of <span className="sh__accent">impact</span><br />
            real lives, real change
          </motion.h1>

          <motion.p className="sh__lede" variants={fade} custom={1} initial="hidden" animate="show">
            Behind every number is a child. Meet the orphaned and vulnerable
            children across Kenya whose lives are being changed through
            education, care and community.
          </motion.p>

          <motion.div className="sh__actions" variants={fade} custom={2} initial="hidden" animate="show">
            <a href="/donation" className="sh__btn">Donate now</a>
              <a
              href="https://www.youtube.com/watch?v=d70S3kM38aY"
              target="_blank"
              rel="noopener noreferrer"
              className="sh__play"
              aria-label="Watch our story on YouTube"
            >
              <FiPlay />
            </a>
          </motion.div>

          <motion.ul className="sh__feats" variants={fade} custom={3} initial="hidden" animate="show">
            {FEATURES.map((f) => (
              <li key={f} className="sh__feat">
                <span className="sh__feat-ic"><FiCheck /></span>
                {f}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* right — image mosaic: stacks in the centre, then deals out on scroll */}
        <motion.div
          className="sh__mosaic"
          variants={mosaic}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {CELLS.map((cell) => (
            <Cell key={cell.slot} cell={cell} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}