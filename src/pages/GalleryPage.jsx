import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import '../styles/gallery-page.css';

const IMAGES = [
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788458752/ChatGPT_Image_Sep_3_2026_09_04_41_PM_nxnuz6.png',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788259370/IMG_9800_vjktet.jpg',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788179983/IMG_4164-scaled_ru1pwl.webp',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788165649/Nessy-Atieno-Grade-9-2025_vwlumk.jpg',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787903109/IMG_1261_i8rwml.jpg',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787900927/WhatsApp_Image_2026-08-28_at_08.32.30_ia3m7j.jpg',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861640/20260502_082654441_iOS_x4pr2g.jpg',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787861579/Andy-Otacho-23_emkd5z.jpg',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787834772/IMG_1305_n80m9d.jpg',  caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787822423/Making-masks-2023_vrq3xa.jpg', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821901/IMG_4354-scaled_ds3z6l.webp', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821796/Crochet-2019_b6kuwe.jpg', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821706/IMG_4176-1-scaled_lpbuoq.webp', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787821623/IMG_4235-scaled_l9tpjh.webp', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787748336/images_2_wbod3v.jpg', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788780267/IMG_0998_cmi7zb.jpg', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788958934/IMG_0857_033x_05x_fp07ig.jpg', caption: '' },
  { src: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1787900942/WhatsApp_Image_2026-08-28_at_08.29.18_hgewaf.jpg', caption: '' },
];

const PER_PAGE = 6;
const LAYOUTS = ['gp--a', 'gp--b', 'gp--c']; // cycles → structure changes each page

const ease = [0.22, 1, 0.36, 1];

export default function GalleryPage() {
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState(null); // global index into IMAGES, or null

  const totalPages = Math.max(1, Math.ceil(IMAGES.length / PER_PAGE));
  const layout = LAYOUTS[page % LAYOUTS.length];
  const items = IMAGES.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const go = (dir) => setPage((p) => (p + dir + totalPages) % totalPages);

  const open = (globalIndex) => setLightbox(globalIndex);
  const close = () => setLightbox(null);
  const step = (dir) => setLightbox((n) => (n + dir + IMAGES.length) % IMAGES.length);

  // keyboard: Escape closes, arrows navigate — only while lightbox open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // lock body scroll while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <Helmet>
        <title>Gallery | Kenya Thriving</title>
        <meta name="description" content="Impact in action — moments from Kenya Thriving's work with orphaned and vulnerable children in Kenya." />
      </Helmet>

      <section className="gp">
        <div className="gp__inner">
          <header className="gp__head">
            <div>
              <h1 className="gp__title">Gallery</h1>
              <p className="gp__subtitle">Impact in Action</p>
            </div>
            <span className="gp__watermark" aria-hidden="true">impact</span>
          </header>

          <div className="gp__stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                className={`gp__grid ${layout}`}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                  exit: { opacity: 0, transition: { duration: 0.25 } },
                }}
              >
                {items.map((it, i) => {
                  const globalIndex = page * PER_PAGE + i;
                  return (
                    <motion.figure
                      key={i}
                      className="gp__item"
                      onClick={() => open(globalIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(globalIndex); }
                      }}
                      aria-label={`View image ${globalIndex + 1}`}
                      variants={{
                        hidden: { opacity: 0, scale: 0.96 },
                        show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
                      }}
                    >
                      <img className="gp__img" src={it.src} alt={it.caption || `Gallery image ${globalIndex + 1}`} />
                      {it.caption && <figcaption className="gp__caption">{it.caption}</figcaption>}
                    </motion.figure>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="gp__pager">
            <span className="gp__page-num">{page + 1}</span>
            <span className="gp__page-total">/ {totalPages}</span>
            <div className="gp__arrows">
              <button className="gp__arrow" onClick={() => go(-1)} aria-label="Previous images">
                <FiChevronLeft />
              </button>
              <button className="gp__arrow" onClick={() => go(1)} aria-label="Next images">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="gp-lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button className="gp-lb__close" onClick={close} aria-label="Close">
              <FiX />
            </button>

            <button
              className="gp-lb__nav gp-lb__nav--prev"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>

            <motion.img
              key={lightbox}
              className="gp-lb__img"
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].caption || `Gallery image ${lightbox + 1}`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="gp-lb__nav gp-lb__nav--next"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>

            <span className="gp-lb__counter">{lightbox + 1} / {IMAGES.length}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}