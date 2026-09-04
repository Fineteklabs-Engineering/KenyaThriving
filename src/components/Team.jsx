import { useState } from 'react';
import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/team.css';

const ease = [0.22, 1, 0.36, 1];

// 👇 all names/roles/bios except Martin Veal are placeholders — swap freely. Images too.
const team = [
  {
    id: 'martin-veal',
    name: 'Martin Veal',
    role: 'Patron',
    bio: 'Martin brings extensive experience in politics, international relations, and Rotary, helping raise awareness and support for Kenya Thriving as our Patron.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788511346/Screenshot_2026-09-04_114205_icurl2.png',
  },
  {
    id: 'coral-hart',
    name: 'Coral Hart',
    role: 'Trustee',
    bio: 'Compassion and bringing change for children who are unheard and unseen, is my motivation for working with Kenya Thriving. ',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788511724/Screenshot_2026-09-04_114811_jh5id1.png',
  },
  {
    id: 'ken-hart',
    name: 'Ken Hart',
    role: 'Trustee',
    bio: 'Champions 51 children in Kenya, bringing hope, nurturing their potential, and advocating for a brighter future despite the challenges of poverty and orphanhood.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788511878/Screenshot_2026-09-04_115053_mg06xg.png',
  },
  {
    id: 'andy-taylor',
    name: 'Andy Taylor',
    role: 'Fundraising Support',
    bio: 'Partners with Kenya Thriving to support vulnerable children, helping create safe family homes and giving them the opportunity to grow, flourish, and build brighter futures.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788512027/Screenshot_2026-09-04_115317_xh3ybc.png',
  },
  {
    id: 'grant-sheppard',
    name: 'Grant Sheppard',
    role: 'Trustee',
    bio: 'Supports disadvantaged children through Kenya Thriving, helping improve their home life and education while inspiring the same values of compassion and giving in their own children.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788512213/Screenshot_2026-09-04_115552_u5ibmk.png',
  },
  {
    id: 'alan-rogers',
    name: 'Alan Rogers',
    role: 'Trustee',
    bio: 'Supports disadvantaged children through education and family support, while encouraging the next generation to value compassion, generosity, and helping others.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788512358/Screenshot_2026-09-04_115814_mzac6u.png',
  },
  {
    id: 'liz-greeves',
    name: 'Liz Greeves',
    role: 'Supporter',
    bio: 'Supports students with essential school resources, football kits, and even basic lighting, helping remove everyday barriers to learning that are often taken for granted.',
    img: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788512422/Screenshot_2026-09-04_115846_hrmhgi.png',
  },
];

function TeamCard({ person, index }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <motion.article
      className={`team__card${flipped ? ' is-flipped' : ''}`}
      onClick={toggle}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`${person.name}, ${person.role}. Activate to read bio.`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease, delay: (index % 4) * 0.09 }}
    >
      <div className="team__inner">
        {/* front */}
        <div className="team__face team__face--front">
          <img className="team__photo" src={person.img} alt={person.name} />
          <div className="team__overlay">
            <h3 className="team__name">{person.name}</h3>
            <span className="team__role">{person.role}</span>
          </div>
        </div>
        {/* back */}
        <div className="team__face team__face--back">
          <span className="team__back-role">{person.role}</span>
          <h3 className="team__back-name">{person.name}</h3>
          <p className="team__bio">{person.bio}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Team() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? team : team.slice(0, 4);

  return (
    <section className="team">
      <motion.div
        className="team__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2
          className="team__title"
          variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          The People Behind Kenya Thriving
        </motion.h2>
        <motion.p
          className="team__sub"
          variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          A small, dedicated team of trustees and volunteers working to give
          Kenya&apos;s orphaned and vulnerable children the chance to thrive.
        </motion.p>
      </motion.div>

      <div className="team__grid">
        {visible.map((p, i) => (
          <TeamCard key={p.id} person={p} index={i} />
        ))}
      </div>

      {team.length > 4 && (
        <div className="team__more-wrap">
          <button className="team__more" onClick={() => setExpanded((e) => !e)}>
            {expanded ? 'Show less' : 'More'}
            <span className="team__more-ic"><FiArrowRight /></span>
          </button>
        </div>
      )}
    </section>
  );
}