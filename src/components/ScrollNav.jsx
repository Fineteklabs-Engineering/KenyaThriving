import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/scroll-nav.css';

const LOGO_LIGHT = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788506681/KenyaThrivingLogo-Light_nkkqzw.png';
// 👇 dark/colour logo — shows on the white bar (scrolled, and on solid routes)
const LOGO_DARK = '/images/logo.png';

// routes where the nav is white/solid from the top (light-hero pages)
const SOLID_ROUTES = ['/learning-stars'];

const links = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about-us' },
  { label: 'Learning Stars', href: '/learning-stars' },
  { label: 'How We Help', href: '/how-we-help' },
  { label: 'Impact', href: '/inspiring-stories' },
  { label: 'Gallery',     href: '/gallery' },
];

export default function ScrollNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const probeRef = useRef(null);

  const { pathname } = useLocation();
  const forcedSolid = SOLID_ROUTES.includes(pathname);
  const showSolid = scrolled || forcedSolid;   // solid routes look scrolled from the top

  useEffect(() => {
    const el = probeRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(entry.intersectionRatio < 1),
      { threshold: [0, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div
        ref={probeRef}
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, height: '1px', width: '100%', pointerEvents: 'none' }}
      />

      <nav className={`sn${showSolid ? ' is-scrolled' : ''}${forcedSolid ? ' sn--solid' : ''}`}>
        <div className="sn__inner">
          <a href="/" className="sn__brand" aria-label="Kenya Thriving — home">
            <img src={LOGO_LIGHT} alt="Kenya Thriving" className="sn__logo sn__logo--light" />
            <img src={LOGO_DARK} alt="" aria-hidden="true" className="sn__logo sn__logo--dark" />
          </a>

          <ul className="sn__links">
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <a href="/donation" className="sn__cta">Donate</a>

          <button
            className="sn__burger"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="sn-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="sn-menu__bar">
              <img src={LOGO_LIGHT} alt="Kenya Thriving" className="sn-menu__logo" />
              <button className="sn-menu__close" onClick={() => setOpen(false)} aria-label="Close menu">
                <FiX />
              </button>
            </div>

            <nav className="sn-menu__links">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="sn-menu__link"
                  onClick={() => setOpen(false)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="/become-a-volunteer"
              className="sn-menu__cta"
              onClick={() => setOpen(false)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12 + links.length * 0.06, duration: 0.4 }}
            >
              Donate Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}