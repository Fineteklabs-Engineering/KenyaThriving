import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/scroll-nav.css';

const LOGO = '/images/logo.png';

const links = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about-us' },
  { label: 'How We Help', href: '/how-we-help' },
  { label: 'Our Stories', href: '/inspring-stories' },
  { label: 'Gallery',     href: '/gallery' },
];

export default function ScrollNav() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
      <AnimatePresence>
        {show && (
          <motion.nav
            className="sn"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sn__inner">
              <a href="/" className="sn__brand" aria-label="Kenya Thriving — home">
                <img src={LOGO} alt="Kenya Thriving" className="sn__logo" />
              </a>

              {/* centred links (desktop) */}
              <ul className="sn__links">
                {links.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>

              {/* right: Volunteer button (desktop) */}
              <a href="/become-a-volunteer" className="sn__cta">Volunteer</a>

              {/* mobile hamburger */}
              <button
                className="sn__burger"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-label="Open menu"
              >
                <FiMenu />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* overlay menu (mobile) */}
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
              <img src={LOGO} alt="Kenya Thriving" className="sn-menu__logo" />
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
              Volunteer
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}