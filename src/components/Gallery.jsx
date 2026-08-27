import { motion } from 'motion/react';
import { FiImage, FiArrowRight } from 'react-icons/fi';
import '../styles/gallery.css';

const ease = [0.22, 1, 0.36, 1];

// paste your 6 image URLs here
const images = ['https://res.cloudinary.com/gjpfbvzb/image/upload/v1787743843/h4-banner05_b4y6ul.png', 
'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821706/IMG_4176-1-scaled_lpbuoq.webp', 
'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787744589/images_zqnc5m.jpg', 
'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787748336/images_2_wbod3v.jpg', 
'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821796/Crochet-2019_b6kuwe.jpg', 
'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821901/IMG_4354-scaled_ds3z6l.webp'];

const rotations = [-8, 6, -5, 7, -6, 5];

// each card starts stacked at the grid's centre, then flies to its slot
const cardVariants = {
  hidden: ({ col, row, rot }) => ({
    x: `${(1 - col) * 110}%`,
    y: `${(0.5 - row) * 118}%`,
    rotate: rot,
    scale: 0.86,
    opacity: 1,
  }),
  show: {
    x: '0%', y: '0%', rotate: 0, scale: 1, opacity: 1,
    transition: { duration: 0.75, ease },
  },
};

export default function Gallery() {
  return (
    <section className="gallery">
      <motion.div
        className="gallery__head"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.span
          className="gallery__eyebrow"
          variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.5, ease }}
        >
          <FiImage /> Gallery
        </motion.span>
        <motion.h2
          className="gallery__title"
          variants={{ hidden: { y: 22, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6, ease }}
        >
          Impact in Action
        </motion.h2>
      </motion.div>

      <motion.div
        className="gallery__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ show: { transition: { delayChildren: 0.3, staggerChildren: 0.08 } } }}
      >
        {images.map((src, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <motion.div
              key={i}
              className="gallery__card"
              custom={{ col, row, rot: rotations[i % rotations.length] }}
              variants={cardVariants}
              style={{ zIndex: images.length - i }}
            >
              {src
                ? <img src={src} alt={`Kenya Thriving — moment ${i + 1}`} />
                : <div className="gallery__ph" aria-hidden="true" />}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.a
        className="gallery__more"
        href="/gallery"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
      >
        See more in the gallery <FiArrowRight />
      </motion.a>
    </section>
  );
}