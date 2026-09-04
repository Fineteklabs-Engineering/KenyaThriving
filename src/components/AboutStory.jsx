import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import '../styles/about-story.css';

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const staggerWrap = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

const stats = [
  { value: '51',  suffix: '',  label: 'Children Supported' },
  { value: '46',  suffix: '',  label: 'Partner Schools' },
  { value: '100', suffix: '%', label: 'To the Children' },
];

export default function AboutStory() {
  return (
    <section className="story">
      <div className="story__inner">
        {/* left — eyebrow + heading */}
        <motion.div
          className="story__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span className="story__eyebrow" variants={rise}>
            <span className="story__dot" aria-hidden="true" />
           Our Story
          </motion.span>
          <motion.h2 className="story__title" variants={rise}>
            Transforming Lives,<br />Building Futures
          </motion.h2>
        </motion.div>

        {/* right — paragraph + button + stats */}
        <motion.div
          className="story__body"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.p className="story__text" variants={rise}>
           In 2008, a young Kenyan couple began providing basic education to children whose families could not afford school fees. With very little, they opened a simple two-room school in the Kakaro community and continued teaching despite the challenges they faced.

During a visit to the area, two of our trustees met the couple and saw firsthand the poverty and struggles facing these children. Moved by what they witnessed, they knew they had to help. Kenya Thriving was born from this encounter, with a commitment to give vulnerable children hope and opportunity.

Since 2012, we have supported children with school fees, uniforms, learning materials, food, medical care, hygiene supplies, and mentorship. Today, through our Learning Stars Initiative, we continue this work with a strong focus on education—helping children learn, grow, pursue their dreams, and build brighter futures.

Together, we are transforming lives and building futures, one child at a time.
          </motion.p>

          <motion.div variants={rise}>
            <Link to="/learning-stars" className="story__btn">Our Mission</Link>
          </motion.div>

          <motion.div className="story__stats" variants={staggerWrap}>
            {stats.map((s) => (
              <motion.div className="story__stat" key={s.label} variants={rise}>
                <span className="story__stat-value">
                  {s.value}<sup className="story__stat-suffix">{s.suffix}</sup>
                </span>
                <span className="story__stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}