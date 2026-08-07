import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}
    >
      {/* Split Screen Hero */}
      <section className="container section-padding-sm">
        <div className="grid-2-col" style={{ gap: '6rem' }}>
          
          {/* Left Column */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h1 className="display-text" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', marginBottom: '2rem' }}>CONNECT</h1>
            <p className="text-editorial" style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '400px' }}>
              For styling inquiries, private appointments, or order assistance, our client advisors are available to assist you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Client Services</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>+91 98765 43210</span>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>General Inquiries</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>support@sev7n.com</span>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '1rem' }}>Social</span>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '1.1rem', fontWeight: 500 }}>
                <a href="#" style={{ transition: 'color 0.3s ease' }}>Instagram</a>
                <a href="#" style={{ transition: 'color 0.3s ease' }}>Twitter</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem', backgroundColor: '#0a0a0a', borderRadius: '16px', border: '1px solid var(--color-accent)' }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '3rem', fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>SEND A MESSAGE</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Floating Label Inputs */}
              <div style={{ position: 'relative' }}>
                <input type="text" id="name" className="floating-input" placeholder=" " required />
                <label htmlFor="name" className="floating-label">Full Name</label>
              </div>

              <div style={{ position: 'relative' }}>
                <input type="email" id="email" className="floating-input" placeholder=" " required />
                <label htmlFor="email" className="floating-label">Email Address</label>
              </div>

              <div style={{ position: 'relative' }}>
                <textarea id="message" rows="4" className="floating-input" placeholder=" " required style={{ resize: 'none' }}></textarea>
                <label htmlFor="message" className="floating-label">Your Message</label>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>SUBMIT INQUIRY</button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--color-accent)', marginTop: '4rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">FAQ</h2>
        </motion.div>

        <div className="grid-2-col" style={{ gap: '4rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Shipping & Returns</h3>
            <p className="text-editorial" style={{ color: 'var(--color-text-muted)' }}>
              Complimentary express shipping on all orders over $250. Returns are accepted within 14 days of delivery. All items must be unworn with original tags attached.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Authenticity</h3>
            <p className="text-editorial" style={{ color: 'var(--color-text-muted)' }}>
              Every SEV7N garment is constructed using proprietary fabrics and includes a serialized authenticity tag. We guarantee the provenance of all items purchased through official channels.
            </p>
          </motion.div>
        </div>
      </section>

      <style>{`
        .floating-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-accent);
          padding: 0.5rem 0;
          font-family: inherit;
          color: var(--color-text);
          font-size: 1.1rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .floating-input:focus {
          border-bottom: 1px solid var(--color-brand);
        }

        .floating-label {
          position: absolute;
          left: 0;
          top: 0.5rem;
          color: var(--color-text-muted);
          pointer-events: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
          top: -1.2rem;
          font-size: 0.8rem;
          color: var(--color-brand);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>

    </motion.div>
  );
};

export default Contact;
