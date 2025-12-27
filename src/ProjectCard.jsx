import { motion } from 'framer-motion';

// 1. Add 'link' to the props list
const ProjectCard = ({ title, description, tags, index, image, link }) => {
  
  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid #1f2937',
    padding: '1.5rem',
    borderRadius: '12px',
    cursor: 'default', // Changed to default since the button handles the click
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  };

  const imageContainerStyle = {
    height: '220px', 
    width: '100%',
    backgroundColor: '#000',
    borderRadius: '8px',
    marginBottom: '1rem',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #333'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
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
    display: 'inline-block',
    marginTop: '5px'
  };

  return (
    <motion.div 
      style={cardStyle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        borderColor: 'var(--accent)',
        boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)'
      }}
    >
      <div style={imageContainerStyle}>
        <motion.img 
          src={image} 
          alt={title} 
          style={imgStyle} 
          whileHover={{ scale: 1.1 }} 
        />

        {/* The Overlay */}
        <div 
            style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s'
            }}
            className="hover-overlay"
        >
            <style>{`
                .hover-overlay:hover { opacity: 1 !important; }
            `}</style>

            {/* 2. THE LINK BUTTON */}
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                    color: 'var(--accent)', 
                    fontWeight: 'bold', 
                    border: '1px solid var(--accent)', 
                    padding: '10px 24px', 
                    borderRadius: '30px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}
            >
                View Project
            </a>
        </div>
      </div>
      
      <h3>{title}</h3>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem', flexGrow: 1 }}>{description}</p>
      
      <div style={{ marginTop: '1rem' }}>
        {tags.map((tag, i) => (
          <span key={i} style={tagStyle}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;