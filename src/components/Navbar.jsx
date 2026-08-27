import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

import '../styles/navbar.css'

const links = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about-us' },
  { label: 'How We Help', href: '/how-we-help' },
  { label: 'Our Stories', href: '/inspring-stories' },
  { label: 'Gallery',     href: '/gallery' },
  { label: 'Contact',     href: '/contact-us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
      <motion.nav
        className="kt-nav"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <a href="/" className="kt-nav__brand" aria-label="Kenya Thriving — home">
          <img src="/images/logo.png" alt="Kenya Thriving" className="kt-nav__logo" />
        </a>
        <button
          className="kt-nav__toggle"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open menu"
        >
          <span>Menu</span>
          <FiMenu />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="kt-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="kt-menu__bar">
              <img src={logo} alt="Kenya Thriving" className="kt-menu__logo" />
              <button className="kt-menu__close" onClick={() => setOpen(false)} aria-label="Close menu">
                <FiX />
              </button>
            </div>

            <nav className="kt-menu__links">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="kt-menu__link"
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
              href="/donation"
              className="kt-menu__cta"
              onClick={() => setOpen(false)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12 + links.length * 0.06, duration: 0.4 }}
            >
              Donate Now <FiArrowUpRight />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}