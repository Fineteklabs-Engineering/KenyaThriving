import { motion } from 'motion/react';
import { FiHeart, FiArrowRight } from 'react-icons/fi';
import '../styles/news.css';

const ease = [0.22, 1, 0.36, 1];

const posts = [
  {
    title: 'Ireland End to End - He\u2019s Done It Again!',
    author: 'Coral Hart',
    date: 'May 25, 2026',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861579/Andy-Otacho-23_emkd5z.jpg',          
    link: '/news/ireland-end-to-end',
  },
  {
    title: 'Community Partnership',
    author: 'Coral Hart',
    date: 'August 25, 2026',
    image: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861640/20260502_082654441_iOS_x4pr2g.jpg',
    link: '/news/community-partnership',
  },
];

export default function News() {
  return (
    <section className="news">
      <motion.div
        className="news__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.span
          className="news__eyebrow"
          variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.5, ease }}
        >
          <FiHeart /> News/Updates
        </motion.span>
        <motion.h2
          className="news__title"
          variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          Voices From the Field
        </motion.h2>
      </motion.div>

      <div className="news__grid">
        {posts.map((p, i) => (
          <article key={i} className="news__card">
            <motion.div
              className="news__media"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
            >
              {p.image
                ? <img src={p.image} alt={p.title} />
                : <div className="news__ph" aria-hidden="true" />}
            </motion.div>

            <motion.div
              className="news__body"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.12 }}
            >
              <div className="news__meta">
                <span>By {p.author}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="news__card-title">{p.title}</h3>
              <a className="news__more" href={p.link}>
                Read More <FiArrowRight />
              </a>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}