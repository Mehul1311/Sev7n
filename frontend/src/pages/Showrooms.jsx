import React from 'react';
import { motion } from 'framer-motion';

const Showrooms = () => {
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
          style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', textAlign: 'center', marginBottom: '4rem' }}
        >
          OUR SHOWROOMS
        </motion.h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          
          {/* New York Showroom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ backgroundColor: '#0a0a0a', border: '1px solid #222', padding: '3rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: '#111', fontFamily: 'var(--font-display)', zIndex: 0, pointerEvents: 'none' }}>
              NYC
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px' }}>NEW YORK</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                125 Mercer Street<br />
                SoHo, NY 10012<br />
                United States<br /><br />
                Phone: +1 (212) 555-0198
              </p>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>HOURS</div>
              <p style={{ fontWeight: '600' }}>Mon - Sat: 11AM - 7PM<br />Sun: 12PM - 6PM</p>
            </div>
          </motion.div>

          {/* London Showroom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ backgroundColor: '#0a0a0a', border: '1px solid #222', padding: '3rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: '#111', fontFamily: 'var(--font-display)', zIndex: 0, pointerEvents: 'none' }}>
              LDN
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px' }}>LONDON</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                45 Redchurch Street<br />
                Shoreditch, London E2 7DJ<br />
                United Kingdom<br /><br />
                Phone: +44 20 7946 0958
              </p>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>HOURS</div>
              <p style={{ fontWeight: '600' }}>Mon - Sat: 10AM - 7PM<br />Sun: 11AM - 5PM</p>
            </div>
          </motion.div>

        </div>
        
        {/* Jaipur Showroom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ backgroundColor: '#0a0a0a', border: '1px solid #222', padding: '3rem', position: 'relative', overflow: 'hidden', marginTop: '3rem' }}
        >
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: '#111', fontFamily: 'var(--font-display)', zIndex: 0, pointerEvents: 'none' }}>
            JPR
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px' }}>JAIPUR</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Mansarovar<br />
              Jaipur 302020<br />
              India<br /><br />
              Phone: +91 98765 43210
            </p>
            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>HOURS</div>
            <p style={{ fontWeight: '600' }}>Mon - Sat: 10AM - 8PM<br />Sun: Closed</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Showrooms;
