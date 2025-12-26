import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, index }) => {
  // Styles (same as before)
  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid #1f2937',
    padding: '1.5rem',
    borderRadius: '12px',
    cursor: 'pointer',
    height: '100%'
  };

  const imagePlaceholderStyle = {
    height: '160px',
    backgroundColor: '#000',
    borderRadius: '8px',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #333'
  };

  const tagStyle = {
    fontSize: '10px',
    backgroundColor: '#000',
    padding: '4px 8px',
    borderRadius: '4px',
    border: '1px solid #333',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginRight: '8px',
    display: 'inline-block'
  };

  return (
    <motion.div 
      style={cardStyle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
      whileHover={{ 
        y: -10, 
        borderColor: 'var(--accent)',
        boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)'
      }}
    >
      <div style={imagePlaceholderStyle}>
        <motion.span 
          style={{ color: 'var(--accent)', fontWeight: 'bold' }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
        >
          View Code
        </motion.span>
      </div>
      
      <h3>{title}</h3>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>{description}</p>
      
      <div style={{ marginTop: '1rem' }}>
        {tags.map((tag, i) => (
          <span key={i} style={tagStyle}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;