import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '100px' }}
    >
      <div className="container">
        <motion.h1 
          className="display-text"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', textAlign: 'center', marginBottom: '4rem' }}
        >
          ABOUT US
        </motion.h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}
          >
            <p style={{ marginBottom: '2rem' }}>
              SEV7N was born on the streets, fueled by a desire to merge high fashion with everyday urban grit. We don't just follow trends; we set the pace.
            </p>
            <p>
              Every piece in our collection is meticulously crafted to empower those who wear it. Fearless style isn't just a tagline for us—it's a way of life. When you wear SEV7N, you own the room.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src="/lookbook.png" 
              alt="About Us"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', borderRadius: '10px', filter: 'grayscale(30%)' }} 
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
