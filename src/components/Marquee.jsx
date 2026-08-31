import { FaHandsHelping } from 'react-icons/fa';
import '../styles/marquee.css';

const PHRASE = 'Working Together We Can Make a Difference';

export default function Marquee() {
  // repeated a few times so the strip is always full; the track is duplicated for a seamless loop
  const items = Array.from({ length: 4 });

  return (
    <section className="mq" aria-label={PHRASE}>
      <div className="mq__track">
        {[0, 1].map((half) => (
          <div className="mq__group" key={half} aria-hidden={half === 1}>
            {items.map((_, i) => (
              <span className="mq__item" key={i}>
                <span className="mq__text">{PHRASE}</span>
                <span className="mq__icon"><FaHandsHelping /></span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}