import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, X } from 'lucide-react';

const items = [
  { id: 1, name: 'Heavyweight Zip Hoodie', price: '$120', category: 'Outerwear', image: '/lookbook.png' },
  { id: 2, name: 'Distressed Cargo Denim', price: '$180', category: 'Pants', image: '/jeans.png' },
  { id: 3, name: 'Nylon Puffer Jacket', price: '$250', category: 'Outerwear', image: '/outerwear.png' },
  { id: 4, name: 'Signature Boxy Tee', price: '$60', category: 'T-Shirts', image: '/tshirts.png' },
  { id: 5, name: 'Washed Black Jeans', price: '$140', category: 'Pants', image: '/jeans.png' },
  { id: 6, name: 'Technical Windbreaker', price: '$280', category: 'Outerwear', image: '/outerwear.png' },
  { id: 7, name: 'Vintage Logo Tee', price: '$65', category: 'T-Shirts', image: '/tshirts.png' },
  { id: 8, name: 'Editorial Leather Jacket', price: '$450', category: 'Outerwear', image: '/hero.png' },
];

const categories = ['All', 'T-Shirts', 'Outerwear', 'Pants', 'Accessories'];

const Catalog = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [quickViewItem, setQuickViewItem] = useState(null);

  const filteredItems = activeTab === 'All' ? items : items.filter(item => item.category === activeTab);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}
    >
      <div className="container section-padding-sm">
        
        {/* Header & Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
          <motion.h1 
            className="display-text"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', marginBottom: '3rem' }}
          >
            COLLECTION
          </motion.h1>

          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: activeTab === cat ? 600 : 400,
                  color: activeTab === cat ? 'var(--color-text)' : 'var(--color-text-muted)',
                  borderBottom: activeTab === cat ? '1px solid var(--color-text)' : '1px solid transparent',
                  paddingBottom: '4px',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Filter Bar */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-accent)', borderBottom: '1px solid var(--color-accent)', padding: '1rem 0', marginBottom: '4rem' }}
        >
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {filteredItems.length} Products
          </span>
          <button style={{ color: 'var(--color-text)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Sort By
          </button>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid-4-col"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredItems.map(item => (
            <motion.div key={item.id} variants={fadeUp} className="product-card" style={{ overflow: 'visible' }}>
              <div className="product-card-image" style={{ position: 'relative' }}>
                <img src={item.image} alt={item.name} loading="lazy" />
                
                {/* Wishlist Icon */}
                <button 
                  style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: '0.5rem', backdropFilter: 'blur(5px)' }}
                >
                  <Heart size={18} color="#fff" />
                </button>

                {/* Quick View Overlay */}
                <div 
                  className="quick-view-overlay"
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0, width: '100%',
                    padding: '1rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                  onClick={() => setQuickViewItem(item)}
                >
                  <button className="btn-outline" style={{ width: '100%', padding: '0.8rem', fontSize: '0.8rem', background: '#050505' }}>
                    <Eye size={16} style={{ marginRight: '0.5rem' }} /> Quick View
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div>
                  <div className="product-name">{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{item.category}</div>
                </div>
                <div className="product-price">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(10px)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={() => setQuickViewItem(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#0a0a0a', width: '90%', maxWidth: '900px', borderRadius: '16px', display: 'flex', overflow: 'hidden', border: '1px solid var(--color-accent)', position: 'relative' }}
            >
              <button 
                onClick={() => setQuickViewItem(null)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}
              >
                <X size={24} color="#fff" />
              </button>
              
              <div style={{ width: '50%', background: '#111' }}>
                <img src={quickViewItem.image} alt={quickViewItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ width: '50%', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>{quickViewItem.name}</h3>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{quickViewItem.price}</p>
                
                <p className="text-editorial" style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
                  Premium construction. Crafted for the ultimate fit. Detailed with subtle branding and hardware.
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.5rem' }}>Size</span>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button key={size} style={{ width: '40px', height: '40px', border: '1px solid var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="btn-primary" style={{ width: '100%' }}>Add to Cart</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Required CSS for Quick View Hover */}
      <style>{`
        .product-card:hover .quick-view-overlay {
          opacity: 1 !important;
        }
      `}</style>

    </motion.div>
  );
};

export default Catalog;
