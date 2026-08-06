import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, name: 'Oversized Button-Up', price: '$120', category: 'Shirts', image: '/tshirts.png' },
  { id: 2, name: 'Cargo Denim', price: '$180', category: 'Pants', image: '/jeans.png' },
  { id: 3, name: 'Sherpa Fleece', price: '$250', category: 'Outerwear', image: '/outerwear.png' },
  { id: 4, name: 'Classic White Tee', price: '$60', category: 'T-Shirts', image: '/hero.png' },
  // Duplicate for visual grid
  { id: 5, name: 'Urban Track Pants', price: '$140', category: 'Pants', image: '/jeans.png' },
  { id: 6, name: 'Statement Jacket', price: '$280', category: 'Outerwear', image: '/outerwear.png' },
];

const Catalog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', textAlign: 'center', marginBottom: '4rem' }}
        >
          CATALOG
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '3rem' }}
        >
          {items.map(item => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
            >
              <div style={{ backgroundColor: '#111', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '1rem', borderRadius: '5px' }}>
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ height: '90%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600' }}>
                <span style={{ fontSize: '1.1rem' }}>{item.name}</span>
                <span style={{ color: 'var(--color-text-muted)' }}>{item.price}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {item.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Catalog;
