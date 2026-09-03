import { motion } from 'motion/react';
import { FiHeart, FiArrowRight, FiCheck } from 'react-icons/fi';
import '../styles/gallery.css';

const ease = [0.22, 1, 0.36, 1];

// 4 images — big, top-right smaller, then two small on the bottom
const images = [
  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787900942/WhatsApp_Image_2026-08-28_at_08.29.18_hgewaf.jpg',
  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787900927/WhatsApp_Image_2026-08-28_at_08.32.30_ia3m7j.jpg',
  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821796/Crochet-2019_b6kuwe.jpg',
  'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787748336/images_2_wbod3v.jpg',
];

const features = [
  { title: 'We Listen & Understand', text: 'We learn about the real needs of the children and communities we serve.' },
  { title: 'We Take Action', text: 'We provide school places, learning materials, mentorship and support.' },
  { title: 'We Create Lasting Impact', text: 'We empower children to break the cycle of poverty and build a brighter future.' },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__inner">
        {/* LEFT */}
        <motion.div
          className="gallery__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span
            className="gallery__eyebrow"
            variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease }}
          >
            <FiHeart /> How We Work
          </motion.span>

          <motion.h2
            className="gallery__title"
            variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            Compassion in Action,<br />Change in Motion.
          </motion.h2>

          <motion.p
            className="gallery__lead"
            variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease }}
          >
            We&apos;re dedicated to helping acts of kindness create a big impact. Here&apos;s how we
            turn your support into real change.
          </motion.p>

          <motion.ul
            className="gallery__features"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {features.map((f) => (
              <motion.li
                key={f.title}
                variants={{ hidden: { x: -24, opacity: 0 }, show: { x: 0, opacity: 1 } }}
                transition={{ duration: 0.5, ease }}
              >
                <span className="gallery__feature-ic"><FiCheck /></span>
                <div>
                  <h3 className="gallery__feature-title">{f.title}</h3>
                  <p className="gallery__feature-text">{f.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.a
            className="gallery__more"
            href="/gallery"
            variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease }}
          >
            See More in Gallery <span className="gallery__more-ic"><FiArrowRight /></span>
          </motion.a>
        </motion.div>

        {/* RIGHT — image mosaic */}
        <motion.div
          className="gallery__mosaic"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="gallery__pic gallery__pic--a" style={{ backgroundImage: `url(${images[0]})` }}
            variants={{ hidden: { opacity: 0, scale: .92 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: .6, ease }} />
          <motion.div className="gallery__pic gallery__pic--b" style={{ backgroundImage: `url(${images[1]})` }}
            variants={{ hidden: { opacity: 0, scale: .92 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: .6, ease }} />
          <motion.div className="gallery__pic gallery__pic--c" style={{ backgroundImage: `url(${images[2]})` }}
            variants={{ hidden: { opacity: 0, scale: .92 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: .6, ease }} />
          <motion.div className="gallery__pic gallery__pic--d" style={{ backgroundImage: `url(${images[3]})` }}
            variants={{ hidden: { opacity: 0, scale: .92 }, show: { opacity: 1, scale: 1 } }} transition={{ duration: .6, ease }} />
        </motion.div>
      </div>
    </section>
  );
}