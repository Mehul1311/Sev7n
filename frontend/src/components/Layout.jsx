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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="nav-links desktop-only">
          <Link to="/about">About Us</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/showrooms">Showrooms</Link>
        </div>
        
        <div className="nav-brand-container">
          <Link to="/" className="nav-brand" aria-label="Home">
            SEV7N
          </Link>
        </div>
        
        <div className="nav-icons">
          <button aria-label="Shopping Cart"><ShoppingCart size={22} /></button>
          <button aria-label="User Account" className="desktop-only"><User size={22} /></button>
          {/* Hamburger Icon for Mobile */}
          <button 
            aria-label="Open Mobile Menu"
            className="mobile-only menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
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
              <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                <a href="#">IG</a>
                <a href="#">TW</a>
                <a href="#">TK</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>

      <footer className="footer-luxury">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-section">
              <h2 className="display-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)'}}>SEV7N</h2>
              <p className="text-editorial" style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                Redefining modern luxury streetwear.<br/>Built for the fearless.
              </p>
            </div>
            <div className="footer-links-section">
              <div className="footer-col">
                <h4>Explore</h4>
                <Link to="/catalog">Shop Collection</Link>
                <Link to="/about">Brand Story</Link>
                <Link to="/showrooms">Showrooms</Link>
              </div>
              <div className="footer-col">
                <h4>Support</h4>
                <Link to="/contact">Contact Us</Link>
                <a href="#">Shipping</a>
                <a href="#">Returns</a>
              </div>
              <div className="footer-col">
                <h4>Connect</h4>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">TikTok</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SEV7N WEAR. ALL RIGHTS RESERVED.</p>
            <div className="footer-legal">
              <a href="#">PRIVACY POLICY</a>
              <a href="#">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
