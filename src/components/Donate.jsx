import { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/donate.css';

const ease = [0.22, 1, 0.36, 1];
const PRESETS = [10, 20, 50, 100, 250];

const DONATE_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787900942/WhatsApp_Image_2026-08-28_at_08.29.18_hgewaf.jpg';

export default function Donate() {
  const [freq, setFreq] = useState('monthly');
  const [amount, setAmount] = useState(50);

  const onDonate = () => {
    console.log({ amount, freq });
  };

  return (
    <section className="dn">
      {/* LEFT — form (aligned to hero padding) */}
      <motion.div
        className="dn__form"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="dn__top">
          <div className="dn__head">
            <h2 className="dn__title">100 Different Reasons to Act.<br />One Way to Help.</h2>
            <p className="dn__lead">
              Join us in giving orphaned and vulnerable children in Kenya the education and care
              they need to thrive.
            </p>
          </div>

          <div className="dn__toggle" role="tablist" aria-label="Donation frequency">
            <button
              role="tab" aria-selected={freq === 'once'}
              className={`dn__toggle-btn${freq === 'once' ? ' is-active' : ''}`}
              onClick={() => setFreq('once')}
            >
              Give Once
            </button>
            <button
              role="tab" aria-selected={freq === 'monthly'}
              className={`dn__toggle-btn${freq === 'monthly' ? ' is-active' : ''}`}
              onClick={() => setFreq('monthly')}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="dn__divider" />

        <h3 className="dn__pick">Choose an Amount {freq === 'monthly' ? 'Per Month' : ''}</h3>

        <div className="dn__presets">
          {PRESETS.map((v) => (
            <button
              key={v}
              type="button"
              className={`dn__preset${Number(amount) === v ? ' is-active' : ''}`}
              onClick={() => setAmount(v)}
            >
              £{v} <span className="dn__preset-suffix">{freq === 'monthly' ? '/mo' : ''}</span>
            </button>
          ))}
          <div className="dn__preset dn__preset--other">
            <input
              type="number" min="1" inputMode="decimal"
              className="dn__other-input"
              placeholder="Other amount"
              onChange={(e) => setAmount(e.target.value)}
              aria-label="Other amount"
            />
          </div>
        </div>

        <button type="button" className="dn__submit" onClick={onDonate}>Join Today</button>
      </motion.div>

      {/* RIGHT — full image panel */}
      <div className="dn__media" style={{ backgroundImage: `url(${DONATE_IMG})` }} aria-hidden="true" />
    </section>
  );
}