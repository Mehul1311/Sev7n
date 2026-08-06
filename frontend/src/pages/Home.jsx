import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroRotate = useTransform(scrollYProgress, [0, 1], ['0deg', '5deg']);
  
  const yImage1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const yImage3 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.1, filter: 'blur(20px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero">
        <motion.div 
          className="hero-bg-text"
          style={{ y: heroY }} 
          initial="hidden"
          animate="visible"
          variants={scaleUp}
        >
          <h1 className="display-text">Sev7n</h1>
        </motion.div>
        <motion.div 
          className="hero-model"
          style={{ rotate: heroRotate }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <img src="/hero.png" alt="Sev7n Hero Model" />
        </motion.div>
        <motion.div 
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05, x: 10 }}>Urban Vibes.<br />Fearless Style.</motion.div>
          <motion.div whileHover={{ scale: 1.05, x: -10 }}>Collection<br />2025</motion.div>
        </motion.div>
      </section>

      <section id="catalog" className="split-section">
        <div className="split-image" style={{ overflow: 'hidden' }}>
          <motion.img 
            src="/tshirts.png" 
            alt="T-Shirts and Shirts"
            loading="lazy"
            decoding="async"
            style={{ y: yImage1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
            variants={imageReveal}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <motion.div 
          className="split-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={slideInRight}>
            T-Shirts<br />& Shirts
          </motion.h2>
          <motion.p className="section-desc" variants={fadeInUp}>
            Elevate your everyday look with bold streetwear essentials. From graphic tees to sleek button-ups, our collection combines comfort and style for any vibe.
          </motion.p>
          <Link to="/catalog">
            <motion.span 
              className="discover-btn"
              variants={fadeInUp}
              whileHover={{ x: 15, scale: 1.05, color: '#fff' }}
            >
              DISCOVER COLLECTION <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </section>

      <section className="split-section reverse">
        <div className="split-image" style={{ overflow: 'hidden' }}>
          <motion.img 
            src="/jeans.png" 
            alt="Jeans and Pants"
            loading="lazy"
            decoding="async"
            style={{ y: yImage2 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
            variants={imageReveal}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <motion.div 
          className="split-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={slideInLeft}>
            Jeans<br />& Pants
          </motion.h2>
          <motion.p className="section-desc" variants={fadeInUp}>
            Step up your street style with perfectly tailored fits. From rugged denim to versatile cargo pants, our collection is made for movement and attitude.
          </motion.p>
          <Link to="/catalog">
            <motion.span 
              className="discover-btn"
              variants={fadeInUp}
              whileHover={{ x: -15, scale: 1.05, color: '#fff' }}
            >
              DISCOVER COLLECTION <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </section>

      <section className="split-section">
        <div className="split-image" style={{ overflow: 'hidden' }}>
          <motion.img 
            src="/outerwear.png" 
            alt="Outerwear"
            loading="lazy"
            decoding="async"
            style={{ y: yImage3 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
            variants={imageReveal}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <motion.div 
          className="split-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={slideInRight}>
            Outerwear
          </motion.h2>
          <motion.p className="section-desc" variants={fadeInUp}>
            Stay sharp, no matter the weather. From statement jackets to functional coats, our outerwear combines urban style with everyday practicality.
          </motion.p>
          <Link to="/catalog">
            <motion.span 
              className="discover-btn"
              variants={fadeInUp}
              whileHover={{ x: 15, scale: 1.05, color: '#fff' }}
            >
              DISCOVER COLLECTION <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </section>

      <section id="showrooms" className="lookbook">
        <motion.div 
          className="lookbook-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <motion.div whileHover={{ scale: 1.05 }}>DISCOVER HOW WE OWN THE STREETS</motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>GET INSPIRED BY BOLD STYLES, FRESH FITS,<br />AND THE ENERGY</motion.div>
        </motion.div>
        <motion.div 
          className="lookbook-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scaleUp}
        >
          <h2 className="display-text">LookBook</h2>
        </motion.div>
        <motion.div 
          className="lookbook-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={imageReveal}
          whileHover={{ scale: 1.03 }}
        >
          <img src="/lookbook.png" alt="Lookbook models" loading="lazy" decoding="async" style={{ opacity: 0.5 }} />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
