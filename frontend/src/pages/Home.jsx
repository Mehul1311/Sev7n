import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const ProductCard = ({ img, name, price, yTransform }) => (
  <motion.div className="product-card" variants={fadeUp} style={{ y: yTransform, willChange: 'transform' }}>
    <div className="product-card-image">
      <motion.img 
        src={img} 
        alt={name} 
        loading="lazy" 
        decoding="async" 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
    <div className="product-info">
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
    </div>
  </motion.div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  
  // Crazy Scroll Animations
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '40%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.3], ['0%', '80%']);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Parallax for grids (Reduced for better layout)
  const gridY1 = useTransform(scrollYProgress, [0, 1], ['0px', '-50px']);
  const gridY2 = useTransform(scrollYProgress, [0, 1], ['0px', '50px']);
  const gridY3 = useTransform(scrollYProgress, [0, 1], ['0px', '-25px']);
  const gridY4 = useTransform(scrollYProgress, [0, 1], ['0px', '25px']);

  const editorialImageScale = useTransform(scrollYProgress, [0.3, 0.6], [1.2, 1]);
  const editorialTextX = useTransform(scrollYProgress, [0.3, 0.6], ['-50px', '0px']);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      
      {/* Hero Section */}
      <section className="hero-luxury">
        
        {/* Floating Spheres Layer */}
        <motion.div 
          className="chrome-sphere sphere-1"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="chrome-sphere sphere-2"
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="chrome-sphere sphere-3"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="chrome-sphere sphere-4"
          animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Typography Layer (Behind Model) */}
        <motion.div className="hero-typography" style={{ x: "-50%", y: "-50%" }}>
          <motion.div style={{ y: heroTextY }}>
            <motion.h1 
              className="display-text"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              SEV7N
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Model Layer (Front, centered, masked) */}
        <motion.div className="hero-model-layer" style={{ x: "-50%", y: "-50%" }}>
          <motion.img 
            src="/crazy-hero.png" 
            alt="SEV7N Hero" 
            style={{ scale: heroScale, y: heroY, willChange: 'transform' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        
      </section>

      {/* Featured Collection */}
      <section className="section-padding container">
        <div className="section-header">
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Featured<br/>Collection
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link to="/catalog" className="btn-outline">View All</Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid-4-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProductCard img="/tshirts.png" name="Classic Logo Tee" price="$65" yTransform={gridY1} />
          <ProductCard img="/jeans.png" name="Distressed Denim" price="$180" yTransform={gridY2} />
          <ProductCard img="/outerwear.png" name="Nylon Bomber" price="$240" yTransform={gridY3} />
          <ProductCard img="/lookbook.png" name="Heavyweight Hoodie" price="$120" yTransform={gridY4} />
        </motion.div>
      </section>

      {/* Lookbook Split */}
      <section className="editorial-split" style={{ overflow: 'hidden' }}>
        <div className="editorial-content">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            style={{ x: editorialTextX }}
          >
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>The 2025<br/>Lookbook</h2>
            <p className="text-editorial" style={{ margin: '2rem 0', color: 'var(--color-text-muted)', maxWidth: '400px' }}>
              Our latest collection explores the boundaries between modern luxury and raw street culture. Precision tailoring meets oversized comfort.
            </p>
            <Link to="/about" className="btn-primary">Explore Story</Link>
          </motion.div>
        </div>
        <div className="editorial-image">
          <motion.img 
            src="/crazy-lookbook.png" 
            alt="Lookbook" 
            loading="lazy" 
            style={{ scale: editorialImageScale }}
          />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding container">
        <div className="section-header">
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Best Sellers
          </motion.h2>
        </div>
        
        <motion.div 
          className="grid-4-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProductCard img="/jeans.png" name="Cargo Pants" price="$150" yTransform={gridY2} />
          <ProductCard img="/outerwear.png" name="Varsity Jacket" price="$320" yTransform={gridY1} />
          <ProductCard img="/tshirts.png" name="Boxy Graphic Tee" price="$75" yTransform={gridY4} />
          <ProductCard img="/lookbook.png" name="Essential Sweatpants" price="$110" yTransform={gridY3} />
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="section-padding-sm container" style={{ borderTop: '1px solid var(--color-accent)', borderBottom: '1px solid var(--color-accent)', padding: '6rem 4%' }}>
        <div className="grid-2-col" style={{ alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Join the Club</h2>
            <p className="text-editorial" style={{ color: 'var(--color-text-muted)' }}>Sign up for early access to drops, exclusive releases, and editorial content.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Email Address" 
              style={{ 
                flex: 1, 
                background: 'transparent', 
                border: '1px solid var(--color-accent)', 
                borderRadius: '30px', 
                padding: '1rem 1.5rem', 
                color: '#fff',
                fontFamily: 'inherit',
                fontSize: '1rem',
                outline: 'none',
                width: '100%'
              }} 
            />
            <button className="btn-primary">Subscribe</button>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <section className="marquee-container">
        <motion.div 
          className="marquee-content"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ willChange: 'transform' }}
        >
          <div className="marquee-text">
            <span>NEW COLLECTION OUT NOW</span><span>•</span>
            <span>SEV7N WORLDWIDE</span><span>•</span>
            <span>LIMITLESS LUXURY</span><span>•</span>
            <span>FEARLESS VISION</span><span>•</span>
          </div>
          <div className="marquee-text">
            <span>NEW COLLECTION OUT NOW</span><span>•</span>
            <span>SEV7N WORLDWIDE</span><span>•</span>
            <span>LIMITLESS LUXURY</span><span>•</span>
            <span>FEARLESS VISION</span><span>•</span>
          </div>
        </motion.div>
      </section>
      
    </motion.div>
  );
};

export default Home;
