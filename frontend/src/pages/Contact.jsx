import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <motion.h1 
        className="display-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', textAlign: 'center', marginBottom: '3rem' }}
      >
        CONTACT
      </motion.h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', width: '100%', maxWidth: '1000px', padding: '0 2rem' }}>
        
        <motion.div 
          variants={formVariant}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}
        >
          <motion.div variants={itemVariant}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>GET IN TOUCH</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              Have questions about our collections, sizing, or your order? Drop us a message or reach out directly.
            </p>
          </motion.div>
          <motion.div variants={itemVariant}>
            <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '0.5rem', letterSpacing: '1px' }}>ADDRESS</h3>
            <p style={{ fontWeight: '600', lineHeight: '1.5' }}>
              Mansarovar<br />
              Jaipur 302020<br />
              India
            </p>
          </motion.div>
          <motion.div variants={itemVariant}>
            <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '0.5rem', letterSpacing: '1px' }}>DIRECT CONTACT</h3>
            <p style={{ fontWeight: '600', lineHeight: '1.5' }}>
              Phone: +91 98765 43210<br />
              Alt Phone: +91 99887 76655<br />
              Email: support@sev7n.com
            </p>
          </motion.div>
        </motion.div>

        <motion.form 
          variants={formVariant}
          initial="hidden"
          animate="visible"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <motion.div variants={itemVariant} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Name</label>
            <input type="text" style={inputStyle} placeholder="YOUR NAME" />
          </motion.div>

          <motion.div variants={itemVariant} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</label>
            <input type="email" style={inputStyle} placeholder="YOUR EMAIL" />
          </motion.div>

          <motion.div variants={itemVariant} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
            <textarea rows="5" style={inputStyle} placeholder="HOW CAN WE HELP YOU?"></textarea>
          </motion.div>

          <motion.button 
            variants={itemVariant}
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              padding: '1rem 2rem', 
              backgroundColor: 'transparent', 
              color: '#fff', 
              border: '1px solid #fff', 
              fontSize: '1rem', 
              fontWeight: '600', 
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginTop: '1rem',
              transition: 'background-color 0.3s, color 0.3s'
            }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

const inputStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '1rem',
  color: '#fff',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s'
};

export default Contact;
