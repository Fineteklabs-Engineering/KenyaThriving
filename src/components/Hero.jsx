import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/hero.css';

const ease = [0.22, 1, 0.36, 1];
const ROTATE_MS = 8000;

const HERO_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787743843/h4-banner05_b4y6ul.png';
const HERO_VIDEO = 'https://res.cloudinary.com/gjpfbvzb/video/upload/v1788438532/WhatsApp_Video_2026-08-26_at_19.59.07_uwuyny.mp4';
// 👇 paste your mobile hero image URL here
const HERO_IMG_MOBILE = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788458752/ChatGPT_Image_Sep_3_2026_09_04_41_PM_nxnuz6.png';

const stats = [
  { value: '51',   label: 'Children Supported' },
  { value: '46',   label: 'Partner Schools' },
  { value: '100%', label: 'To the Children' },
  { value: '2012', label: 'Helping Since' },
];

const slides = [
  {
    type: 'image',
    media: HERO_IMG,
    eyebrow: 'Every Child Deserves a Chance',
    title: <>Change Lives<br />With Your Gift.</>,
    text: 'At Kenya Thriving, we give orphaned and vulnerable children in Kenya the education, care and support they need to build a brighter future.',
  },
  {
    type: 'video',
    media: HERO_VIDEO,
    eyebrow: 'Every Child Deserves a Chance',
    title: <>Making a Real Difference<br />Where It Counts.</>,
    text: 'We\u2019re building a world where everyone has the power to shape lives — one child, one school, one brighter future at a time.',
  },
];

/* true when viewport is mobile → hero shows one static image, no video */
function useIsMobile(query = '(max-width: 900px)') {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return isMobile;
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [active]);

  const s = slides[active];

  return (
    <header className="hero">
      {/* background media */}
      <div className="hero__bgs">
        {isMobile ? (
          /* mobile: single static image, outside the rotation */
          <div className="hero__bg-layer">
            <div
              className="hero__bg hero__bg--mobile"
              style={{ backgroundImage: `url(${HERO_IMG_MOBILE})` }}
            />
          </div>
        ) : (
          /* desktop: rotating image / video */
          <AnimatePresence>
            <motion.div
              key={active}
              className="hero__bg-layer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {s.type === 'video' && s.media ? (
                <video className="hero__video" src={s.media} autoPlay muted loop playsInline />
              ) : (
                <div className="hero__bg" style={{ backgroundImage: `url(${s.media})` }} />
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="hero__content"
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -12 }}
            variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            <motion.span
              className="hero__eyebrow"
              variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.5, ease }}
            >
              {s.eyebrow}
            </motion.span>

            <motion.h1
              className="hero__title"
              variants={{ hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease }}
            >
              {s.title}
            </motion.h1>

            <motion.p
              className="hero__text"
              variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease }}
            >
              {s.text}
            </motion.p>

            <motion.div
              className="hero__actions"
              variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease }}
            >
              <a href="/donation" className="hero__btn hero__btn--primary">
                Donate Now <span className="hero__btn-ic"><FiArrowRight /></span>
              </a>
              <a href="/how-we-help" className="hero__btn hero__btn--ghost">
                Learn More <span className="hero__btn-ic"><FiArrowRight /></span>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* stat cards */}
      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.5 }}
      >
        {stats.map((st) => (
          <div className="hero__stat" key={st.label}>
            <span className="hero__stat-value">{st.value}</span>
            <span className="hero__stat-label">{st.label}</span>
          </div>
        ))}
      </motion.div>

      {/* slide dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  );
}