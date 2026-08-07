import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Showrooms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}
    >
      <div className="container section-padding-sm">
        <motion.h1 
          className="display-text"
          initial="hidden" animate="visible" variants={fadeUp}
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', textAlign: 'center', marginBottom: '4rem' }}
        >
          FLAGSHIP STORES
        </motion.h1>

        {/* Large Gallery */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          style={{ width: '100%', height: '60vh', marginBottom: '6rem', position: 'relative' }}
        >
          <img src="/lookbook.png" alt="Showroom Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(10px)', padding: '1rem 2rem', border: '1px solid var(--color-accent)' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-silver)' }}>Interior</span>
            <div style={{ fontSize: '1.2rem', fontWeight: 500, color: '#fff' }}>New York City</div>
          </div>
        </motion.div>

        {/* Location Cards */}
        <div className="grid-3-col" style={{ marginBottom: '6rem' }}>
          
          {/* NYC */}
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px', fontFamily: 'var(--font-display)' }}>NEW YORK</h2>
              <p className="text-editorial" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                125 Mercer Street<br />
                SoHo, NY 10012<br />
                United States<br /><br />
                +1 (212) 555-0198
              </p>
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>HOURS</div>
              <p style={{ fontWeight: '400', fontSize: '1rem' }}>Mon - Sat: 11AM - 7PM<br />Sun: 12PM - 6PM</p>
            </div>
          </motion.div>

          {/* LDN */}
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px', fontFamily: 'var(--font-display)' }}>LONDON</h2>
              <p className="text-editorial" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                45 Redchurch Street<br />
                Shoreditch, London E2 7DJ<br />
                United Kingdom<br /><br />
                +44 20 7946 0958
              </p>
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>HOURS</div>
              <p style={{ fontWeight: '400', fontSize: '1rem' }}>Mon - Sat: 10AM - 7PM<br />Sun: 11AM - 5PM</p>
            </div>
          </motion.div>
          
          {/* JPR */}
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '2px', fontFamily: 'var(--font-display)' }}>JAIPUR</h2>
              <p className="text-editorial" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Mansarovar<br />
                Jaipur 302020<br />
                India<br /><br />
                +91 98765 43210
              </p>
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>HOURS</div>
              <p style={{ fontWeight: '400', fontSize: '1rem' }}>Mon - Sat: 10AM - 8PM<br />Sun: Closed</p>
            </div>
          </motion.div>

        </div>



      </div>
    </motion.div>
  );
};

export default Showrooms;
