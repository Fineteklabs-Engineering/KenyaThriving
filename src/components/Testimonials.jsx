import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/testimonials.css';

const ease = [0.22, 1, 0.36, 1];

const MAP_IMG = 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787826295/ChatGPT_Image_Aug_27_2026_01_23_59_PM_un9mqa.png';

// pos = scattered placement on desktop (matches the design)
const stories = [
  {
    quote: 'A Long Road to a Bright Future',
    text: 'Orphaned at four, Jane found care at a children\u2019s home and excelled in school. A Kenya Thriving grant took her to college — in 2024 she graduated in Engineering.',
    name: 'Jane Asiko', meta: 'February 2020', accent: '#D1277C', link: '/story/jane-asiko',
    pos: { left: '4%', top: '48%' },
  },
  {
    quote: 'Professional and Compassionate',
    text: 'As a partner, we value their transparency and measurable impact. It is rare to find an organisation that combines compassion with such professionalism.',
    name: 'Lucas Schneider', meta: 'Partner', accent: '#3BBCD2', link: '/inspring-stories',
    pos: { right: '4%', top: '60%' },
  },
  {
    quote: 'Smiling Again',
    text: 'From loss and grief to finding healing and hope can be a long road — but with the right support, Nessy is smiling again.',
    name: 'Nessy', meta: 'September 2025', accent: '#33AB4A', link: '/story/nessy',
    pos: { left: '20%', top: '82%' },
  },
];

export default function Testimonials() {
  return (
    <section className="tst">
      <div className="tst__backdrop" aria-hidden="true">
        <img className="tst__map" src={MAP_IMG} alt="" />
        <span className="tst__watermark">TASTIMONIAL</span>
      </div>

      <div className="tst__stage">
        {stories.map((s, i) => (
          <motion.article
            key={i}
            className="tst__card"
            style={s.pos}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
          >
            <h3 className="tst__quote">&ldquo;{s.quote}&rdquo;</h3>
            <p className="tst__text">{s.text}</p>
            <div className="tst__foot">
              <p className="tst__name" style={{ color: s.accent }}>{s.name}</p>
              <p className="tst__meta">{s.meta}</p>
              <a className="tst__more" href={s.link} style={{ color: s.accent }}>
                Read more <FiArrowRight />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}