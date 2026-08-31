import { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/donate.css';

const ease = [0.22, 1, 0.36, 1];
const PRESETS = [10, 25, 50, 100];

const JUSTGIVING_URL = '#';   // paste the real JustGiving link
const STEWARDSHIP_URL = '#';  // paste the real Stewardship link

export default function Donate() {
  const [amount, setAmount] = useState(50);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');

  const total = Number(amount) > 0 ? Number(amount) : 0;

  const onDonate = () => {
    // wire to your payment flow later
    console.log({ amount: total, first, last, email });
  };

  return (
    <section className="dn">
      <div className="dn__inner">
        {/* LEFT — ways to give */}
               {/* LEFT — ways to give */}
        <motion.div
          className="dn__card dn__ways"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="dn__lead">
            You can make a real difference in the life of one child or one widow in Kenya by making a donation.
          </p>

          <div className="dn__block">
            <h4 className="dn__h">Donate online</h4>
            <div className="dn__give-row">
              <a className="dn__justgiving" href={JUSTGIVING_URL} target="_blank" rel="noopener noreferrer">
                Donate with <strong>JustGiving</strong>
              </a>
              <a className="dn__stewardship" href={STEWARDSHIP_URL} target="_blank" rel="noopener noreferrer">
                Stewardship
              </a>
            </div>
          </div>

          <div className="dn__block">
            <h4 className="dn__h">By bank transfer</h4>
            <ul className="dn__details">
              <li>Epaphras Trust – Kenya Thriving</li>
              <li><span>Sort Code</span> 30-93-48</li>
              <li><span>Account No</span> 71927260</li>
            </ul>
          </div>

          <p className="dn__note">
            Prefer a cheque? Make it payable to Epaphras Trust / Kenya Thriving — 24 Lakeview Lane, Mytchett, Camberley, GU16 6HA.
          </p>
        </motion.div>

        {/* RIGHT — donation form */}
        <motion.div
          className="dn__card dn__form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <h3 className="dn__title">Your Donation</h3>

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

          <div className="dn__presets">
            {PRESETS.map((v) => (
              <button
                key={v}
                type="button"
                className={`dn__preset${Number(amount) === v ? ' is-active' : ''}`}
                onClick={() => setAmount(v)}
              >
                £{v.toFixed(2)}
              </button>
            ))}
          </div>

          <h3 className="dn__title dn__title--sep">Personal Info</h3>

          <div className="dn__row">
            <label className="dn__field">
              <span>First Name <b>*</b></span>
              <input value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First Name" />
            </label>
            <label className="dn__field">
              <span>Last Name <b>*</b></span>
              <input value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last Name" />
            </label>
          </div>

          <label className="dn__field">
            <span>Email Address <b>*</b></span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
          </label>

          <p className="dn__total">Donation Total: <strong>£{total.toFixed(2)}</strong></p>

          <button type="button" className="dn__submit" onClick={onDonate}>Donate Now</button>
        </motion.div>
      </div>
    </section>
  );
}