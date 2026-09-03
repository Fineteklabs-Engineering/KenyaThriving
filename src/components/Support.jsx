import { motion } from 'motion/react';
import { FiHeart, FiUsers, FiGift, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import '../styles/support.css';

const ease = [0.22, 1, 0.36, 1];

const actions = [
  {
    icon: <FiUsers />,
    title: 'Become a Volunteer',
    desc: 'Give your time and skills — mentor a child, help at events, or lend a professional hand. Volunteers are the heart of everything we do in Kenya.',
    cta: 'Join Us',
    link: '/become-a-volunteer',
  },
  {
    icon: <FiGift />,
    title: 'Donate & Change a Life',
    desc: 'Your gift covers school fees, uniforms and learning materials — and 100% of it reaches the children. A single donation can change a child\u2019s entire future.',
    cta: 'Donate Now',
    link: '/donation',
    middle: true,
  },
  {
    icon: <FiTrendingUp />,
    title: 'Start a Fundraiser',
    desc: 'Rally your friends, family or workplace behind a cause that matters. Set up your own campaign and help send more children to school.',
    cta: 'Get Started',
    link: '/become-a-volunteer',
  },
];

export default function Support() {
  return (
    <section className="support">
            <motion.div
        className="support__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2
          className="support__title"
          variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          Be Part of Something Meaningful
        </motion.h2>
        <motion.p
          className="support__sub"
          variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          There are many ways to help Kenya&apos;s orphaned and vulnerable children thrive. Choose the
          one that fits you.
        </motion.p>
      </motion.div>

      <motion.div
        className="support__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.16 } } }}
      >
        {actions.map((a) => (
          <motion.a
            key={a.title}
            href={a.link}
            className={`support__card${a.middle ? ' is-middle' : ''}`}
            variants={{ hidden: { opacity: 0, x: -70 }, show: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="support__icon">{a.icon}</span>
            <h3 className="support__card-title">{a.title}</h3>
            <p className="support__desc">{a.desc}</p>
            <span className="support__btn">
              {a.cta} <span className="support__btn-ic"><FiArrowRight /></span>
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}