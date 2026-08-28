import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

import '../styles/footer.css';

const ease = [0.22, 1, 0.36, 1];

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'How We Help', href: '/how-we-help' },
  { label: 'Our Stories', href: '/inspring-stories' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
];

const utility = [
  { label: 'Our Team', href: '/our-team' },
  { label: 'Core Values', href: '/core-values' },
  { label: 'Become a Volunteer', href: '/become-a-volunteer' },
  { label: 'Donate', href: '/donation' },
  { label: 'Contact', href: '/contact-us' },
];

const socials = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/kenyathriving', label: 'Facebook' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@kenyathriving4508', label: 'Youtube' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaXTwitter />, href: 'https://x.com/Kenyathriving', label: 'X' },
];

export default function Footer() {
  return (
    <footer className="ft">
      <motion.div
        className="ft__panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="ft__top">
          {/* brand */}
          <div className="ft__brand">
            <img className="ft__logo" src="/images/logo.png" alt="Kenya Thriving" />
            <p className="ft__tagline">
              Empowering orphaned children in Kenya through education, care, and community.
            </p>
            <a className="ft__donate" href="/donation">
              Make a Donation <FiArrowRight />
            </a>
            <div className="ft__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="ft__social" aria-label={s.label}
                   target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* navigation */}
          <nav className="ft__col">
            <h4 className="ft__heading">Navigation</h4>
            <ul>{nav.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
          </nav>

          {/* utility */}
          <nav className="ft__col">
            <h4 className="ft__heading">Explore</h4>
            <ul>{utility.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
          </nav>

          {/* contact */}
          <div className="ft__col">
            <h4 className="ft__heading">Contact</h4>
            <ul className="ft__contact">
              <li><a href="mailto:coral@kenyathriving.com">coral@kenyathriving.com</a></li>
              <li><a href="mailto:ken@kenyathriving.com">ken@kenyathriving.com</a></li>
              <li><a href="tel:+447738734130">+44 7738 734130</a></li>
              <li>Camberley, Surrey, UK</li>
            </ul>
          </div>
        </div>

        {/* enquiries strip */}
        <div className="ft__enquiry">
          <div>
            <p className="ft__enquiry-title">Any Enquiries</p>
            <a className="ft__enquiry-mail" href="mailto:coral@kenyathriving.com">coral@kenyathriving.com</a>
          </div>
          <a className="ft__enquiry-btn" href="/contact-us">
            Contact Us Now <FiArrowRight />
          </a>
        </div>
      </motion.div>

      {/* bottom bar */}
      <div className="ft__bottom">
        <p>© {new Date().getFullYear()} Kenya Thriving. Registered UK charity.</p>
        <div className="ft__legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}