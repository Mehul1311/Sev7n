import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scroll Progress Bar (Crazy Cool Effect)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const menuVariants = {
    closed: { 
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    open: { 
      opacity: 1,
      clipPath: "circle(150% at 100% 0%)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #fff, #555)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 1000
        }}
      />

      {/* Main Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="nav-links desktop-only">
          <motion.div whileHover={{ opacity: 1, y: -2 }} transition={{ duration: 0.2 }}>
            <Link to="/about">About Us</Link>
          </motion.div>
          <motion.div whileHover={{ opacity: 1, y: -2 }} transition={{ duration: 0.2 }}>
            <Link to="/catalog">Catalog</Link>
          </motion.div>
          <motion.div whileHover={{ opacity: 1, y: -2 }} transition={{ duration: 0.2 }}>
            <Link to="/showrooms">Showrooms</Link>
          </motion.div>
        </div>
        
        <div className="nav-brand-container">
          <Link 
            to="/" 
            className="nav-brand"
            style={{ display: 'block', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            aria-label="Home"
          >
            SEV7N
          </Link>
        </div>
        
        <div className="nav-icons">
          <motion.button aria-label="Shopping Cart" whileHover={{ scale: 1.1, rotate: 5 }}><ShoppingCart size={20} /></motion.button>
          <motion.button aria-label="User Account" whileHover={{ scale: 1.1, rotate: -5 }} className="desktop-only"><User size={20} /></motion.button>
          {/* Hamburger Icon for Mobile */}
          <motion.button 
            aria-label="Open Mobile Menu"
            className="mobile-only menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <button 
              className="close-menu-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X size={36} />
            </button>
            <div className="mobile-menu-links">
              {['Home', 'About', 'Catalog', 'Showrooms', 'Contact'].map((item, i) => (
                <motion.div 
                  key={item} 
                  custom={i} 
                  variants={linkVariants}
                  whileHover={{ scale: 1.1, x: 20 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mobile-menu-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p>SEV7N WORLDWIDE</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <span>IG</span>
                <span>TW</span>
                <span>TK</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="footer-top">
          <div className="footer-links">
            <motion.div whileHover={{ opacity: 1, scale: 1.1 }}><Link to="/about">About Us</Link></motion.div>
            <motion.div whileHover={{ opacity: 1, scale: 1.1 }}><Link to="/catalog">Catalog</Link></motion.div>
            <motion.div whileHover={{ opacity: 1, scale: 1.1 }}><Link to="/showrooms">Showrooms</Link></motion.div>
          </div>
          <motion.div 
            className="footer-brand"
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">SEV7N</Link>
          </motion.div>
          <div className="footer-links">
            <motion.div whileHover={{ opacity: 1, scale: 1.1 }}><Link to="/contact">Contact</Link></motion.div>
            <motion.div whileHover={{ opacity: 1, scale: 1.1 }}><a href="#">Shipping</a></motion.div>
            <motion.div whileHover={{ opacity: 1, scale: 1.1 }}><a href="#">Terms</a></motion.div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Sev7n Wear. All rights reserved.
        </div>
      </motion.footer>
    </>
  );
};

export default Layout;
