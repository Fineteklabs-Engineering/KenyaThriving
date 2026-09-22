import { motion } from 'motion/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import '../styles/story.css';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Block({ block }) {
  const { k, t } = block;

  if (k === 'h')
    return (
      <motion.h2 className="story__h" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
        {t}
      </motion.h2>
    );

  if (k === 'quote')
    return (
      <motion.blockquote className="story__quote" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
        <span className="story__quote-mark" aria-hidden="true">&ldquo;</span>
        {t}
      </motion.blockquote>
    );

  return (
    <motion.p
      className={k === 'lead' ? 'story__lead' : 'story__p'}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {t}
    </motion.p>
  );
}

export default function StoryArticle({ story, others }) {
  return (
    <article className="story">
      {/* hero */}
      <header className="story__hero">
        <div className="story__hero-inner">
          <motion.div className="story__intro" variants={fadeUp} initial="hidden" animate="show">
            <nav className="story__crumb" aria-label="Breadcrumb">
              <a href="/inspiring-stories">Stories</a>
              <span aria-hidden="true">/</span>
              <span>{story.name}</span>
            </nav>

            <p className="story__eyebrow">A Learning Stars story</p>
            <h1 className="story__name">{story.name}</h1>
            <p className="story__standfirst">{story.standfirst}</p>

            {story.tags?.length > 0 && (
              <ul className="story__tags">
                {story.tags.map((tag) => (
                  <li key={tag} className="story__tag">{tag}</li>
                ))}
              </ul>
            )}
          </motion.div>

          <motion.figure
            className="story__portrait"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.6, ease: 'easeOut' }}
          >
            <img src={story.portrait} alt={`${story.name}, supported by Kenya Thriving`} />
          </motion.figure>
        </div>
      </header>

      {/* body */}
      <div className="story__body">
        <div className="story__paper">
          {story.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>

      {/* read another */}
      {others?.length > 0 && (
        <section className="story__more">
          <div className="story__more-inner">
            <h2 className="story__more-title">Read another story</h2>
            <div className="story__more-grid">
              {others.map((o) => (
                <a key={o.slug} href={`/inspiring-stories/${o.slug}`} className="story__more-card">
                  <span className="story__more-thumb">
                    <img src={o.portrait} alt="" aria-hidden="true" />
                  </span>
                  <span className="story__more-text">
                    <span className="story__more-name">{o.name}</span>
                    <span className="story__more-cta">Read the story <FiArrowRight /></span>
                  </span>
                </a>
              ))}
            </div>
            <a href="/inspiring-stories" className="story__back">
              <FiArrowLeft /> All inspiring stories
            </a>
          </div>
        </section>
      )}

      {/* donate band */}
      <section className="story__donate">
        <div className="story__donate-inner">
          <h2 className="story__donate-title">Help write the next story</h2>
          <p className="story__donate-text">
            Your support gives orphaned and vulnerable children in Kenya the care, education and encouragement to thrive.
          </p>
          <a href="/donation" className="story__donate-btn">Donate now</a>
        </div>
      </section>
    </article>
  );
}