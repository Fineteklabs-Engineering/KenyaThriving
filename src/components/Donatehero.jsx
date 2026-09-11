import { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/donate-hero.css';


const DONATE_HERO_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788165649/Nessy-Atieno-Grade-9-2025_vwlumk.jpg';

const PRESETS = [10, 25, 50, 100];

const ease = [0.22, 1, 0.36, 1];
const rise = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } };

export default function DonateHero() {
  const [amount, setAmount] = useState(50);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [notice, setNotice] = useState(false);

  const total = (parseFloat(amount) || 0).toFixed(2);

  return (
    <section className="dh">
      <div className="dh__bg" style={{ backgroundImage: `url(${DONATE_HERO_IMG})` }} />
      <div className="dh__scrim" aria-hidden="true" />

      <div className="dh__inner">
        {/* LEFT — text (bottom-left) */}
        <motion.div
          className="dh__intro"
          initial="hidden" animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.span className="dh__eyebrow" variants={rise}>Make a Real Difference</motion.span>
          <motion.h1 className="dh__title" variants={rise}>We Can<br />Save the Future</motion.h1>
        </motion.div>

        {/* RIGHT — form card */}
        <motion.div
          className="dh__card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          <h2 className="dh__card-title">Your Donation</h2>
          <div className="dh__rule" />

          <div className="dh__amount">
            <span className="dh__amount-currency">£</span>
            <input
              type="number" min="1" inputMode="decimal"
              className="dh__amount-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-label="Donation amount"
            />
          </div>

          <div className="dh__presets">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                className={`dh__preset${Number(amount) === p ? ' is-active' : ''}`}
                onClick={() => setAmount(p)}
              >
                £{p.toFixed(2)}
              </button>
            ))}
          </div>

          <h3 className="dh__section-title">Personal Info</h3>
          <div className="dh__rule" />

          <div className="dh__fields">
            <div className="dh__field">
              <label className="dh__label" htmlFor="dh-first">First Name <span className="dh__req">*</span></label>
              <input id="dh-first" className="dh__input" placeholder="First Name"
                value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="dh__field">
              <label className="dh__label" htmlFor="dh-last">Last Name</label>
              <input id="dh-last" className="dh__input" placeholder="Last Name"
                value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="dh__field dh__field--full">
              <label className="dh__label" htmlFor="dh-email">Email Address <span className="dh__req">*</span></label>
              <input id="dh-email" type="email" className="dh__input" placeholder="Email Address"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <p className="dh__total">
            Donation Total: <span className="dh__total-amount">£{total}</span>
          </p>

          <button type="button" className="dh__submit" onClick={() => setNotice(true)}>
            DONATE NOW
          </button>

          {notice && (
            <p className="dh__notice">
              Online payment is being set up — thank you for your support. Please check back soon.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}