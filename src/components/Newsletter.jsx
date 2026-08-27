import { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/news-letter.css';

const ease = [0.22, 1, 0.36, 1];

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const onJoin = () => {
  
    if (email.trim()) console.log('subscribe:', email);
  };

  return (
    <section className="nl">
      <div className="nl__inner">
        <motion.h2
          className="nl__title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          Stay Updated With Our Latest Impact Stories
        </motion.h2>

        <motion.div
          className="nl__form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <p className="nl__note">Join our community of changemakers and get weekly updates on impact.</p>

          <div className="nl__field">
            <input
              type="email"
              className="nl__input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onJoin()}
              aria-label="Your email address"
            />
            <button type="button" className="nl__btn" onClick={onJoin}>Join Now</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}