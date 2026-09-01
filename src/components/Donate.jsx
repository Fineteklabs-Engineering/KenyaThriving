import { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/donate.css';

const ease = [0.22, 1, 0.36, 1];
const PRESETS = [10, 25, 50, 100];

// section background photo
const FEATURE_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787834772/IMG_1305_n80m9d.jpg';
// transparent cut-out PNG of the boy
const BOY_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788251362/ChatGPT_Image_Sep_1__2026__11_27_11_AM-removebg-preview_zlfonp.png';

export default function Donate() {
  const [amount, setAmount] = useState(50);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const total = Number(amount) > 0 ? Number(amount) : 0;

  const onDonate = () => {
    console.log({ amount: total, name, email });
  };

  return (
    <section className="dn">
      {/* section background + overlay */}
      <div className="dn__bg" style={{ backgroundImage: `url(${FEATURE_IMG})` }} aria-hidden="true" />
      <div className="dn__overlay" aria-hidden="true" />

      <div className="dn__inner">
        {/* LEFT — donation text */}
        <motion.div
          className="dn__text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="dn__title">Make a Donation</h2>
          <p className="dn__lead">
            You may not be able to change the whole world, but you can make a real difference in the
            life of one child or one widow in Kenya.
          </p>
          <p className="dn__lead">
            Every gift funds school fees, uniforms and learning materials — and <strong>100% reaches
            the children</strong> we support.
          </p>
        </motion.div>

        {/* RIGHT — form (taller than section) + boy on top */}
        <motion.div
          className="dn__panel"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          {BOY_IMG && <img className="dn__boy" src={BOY_IMG} alt="" aria-hidden="true" />}

          <div className="dn__card">
            <label className="dn__amount-wrap">
              <span className="dn__amount-label">Your donation</span>
              <div className="dn__amount">
                <span className="dn__currency">£</span>
                <input
                  type="number" min="1" inputMode="decimal"
                  className="dn__amount-input"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label="Donation amount"
                />
              </div>
            </label>

            <div className="dn__presets">
              {PRESETS.map((v) => (
                <button
                  key={v}
                  type="button"
                  className={`dn__preset${Number(amount) === v ? ' is-active' : ''}`}
                  onClick={() => setAmount(v)}
                >
                  £{v}
                </button>
              ))}
            </div>

            <div className="dn__field">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" aria-label="Name" />
            </div>
            <div className="dn__field">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-label="Email" />
            </div>

            <p className="dn__total">Donation Total: <strong>£{total.toFixed(2)}</strong></p>

            <button type="button" className="dn__submit" onClick={onDonate}>Donate Now</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}