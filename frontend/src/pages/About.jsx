import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Simple with Moving Balls */}
      <section style={{ width: '100%', height: '80vh', position: 'relative', overflow: 'hidden', backgroundColor: '#050505' }}>
        
        {/* Floating Spheres Layer */}
        <motion.div className="chrome-sphere sphere-1" animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="chrome-sphere sphere-2" animate={{ y: [0, 40, 0], x: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="chrome-sphere sphere-3" animate={{ y: [0, -20, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="chrome-sphere sphere-4" animate={{ x: [0, 30, 0], y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

        <img 
          src="/lookbook.png" 
          alt="SEV7N Brand"
          loading="eager"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
        />
        
        <div className="container" style={{ position: 'absolute', bottom: '10%', left: '0', right: '0', zIndex: 10 }}>
          <motion.h1 
            className="display-text"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#fff', textShadow: '0px 10px 30px rgba(0,0,0,0.8)' }}
          >
            OUR STORY
          </motion.h1>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="section-padding container">
        <div className="grid-2-col about-grid">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="about-text-content">
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>The Philosophy</h2>
            <p className="text-editorial" style={{ color: 'var(--color-text-muted)' }}>
              SEV7N represents the intersection of luxury craftsmanship and raw street culture. 
              We believe in creating garments that empower the wearer—merging flawless tailoring with 
              unapologetic boldness.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="product-card-image" style={{ aspectRatio: '4/5', margin: 0 }}>
              <img src="/hero.png" alt="Philosophy" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding container">
        <div className="grid-2-col about-grid reverse-mobile">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="vision-img">
            <div className="product-card-image" style={{ aspectRatio: '4/5', margin: 0 }}>
              <img src="/outerwear.png" alt="Vision" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="about-text-content vision-text">
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>Vision</h2>
            <p className="text-editorial" style={{ color: 'var(--color-text-muted)' }}>
              To redefine modern streetwear by elevating everyday silhouettes into wearable art. 
              Every collection is a relentless pursuit of perfection, using premium textiles and 
              avant-garde cuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--color-accent)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>The Archive</h2>
        </motion.div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            { year: '2023', title: 'The Genesis', desc: 'SEV7N is founded with a limited capsule collection of 100 heavyweight hoodies.' },
            { year: '2024', title: 'Global Expansion', desc: 'Opening of the first flagship showroom in London and Paris.' },
            { year: '2025', title: 'Collection II', desc: 'A complete wardrobe overhaul featuring tailored outerwear and denim.' }
          ].map((item, index) => (
            <motion.div 
              key={item.year}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              className="timeline-item"
              style={{ 
                borderBottom: index !== 2 ? '1px solid var(--color-accent)' : 'none',
              }}
            >
              <div className="timeline-year">
                <h3 className="display-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-silver)' }}>{item.year}</h3>
              </div>
              <div className="timeline-content">
                <h4 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{item.title}</h4>
                <p className="text-editorial" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
    </motion.div>
  );
};

export default About;
