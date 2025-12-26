import { useState } from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // FIXED: Simplified Sidebar Style
  const sidebarStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#111827', // Dark gray/blue (bg-gray-900)
    borderRight: '1px solid #1f2937',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    zIndex: 100,
    width: 'var(--sidebar-width)', // Uses the variable from index.css
    transition: 'transform 0.3s ease-in-out',
    // Mobile Logic: Hidden by default (-100%), visible if isOpen is true
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  };

  return (
    <>
      {/* CSS STYLES FOR SIDEBAR */}
      <style>{`
        /* 1. Desktop Override: Always show sidebar */
        @media(min-width: 768px) {
          aside { transform: translateX(0) !important; }
        }
        
        /* 2. Navigation Links: Flex Row to align Icon + Text */
        .nav-link { 
          display: flex; 
          align-items: center; /* Vertically center them */
          gap: 16px;           /* Space between icon and text */
          padding: 12px 0; 
          color: #9ca3af; 
          text-decoration: none;
          font-size: 1.1rem;
          transition: 0.2s;
        }
        
        .nav-link:hover { 
          color: var(--accent); 
          transform: translateX(5px); /* Slight nudge on hover */
        }

        /* 3. Mobile Overlay */
        .mobile-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 90;
          display: ${isOpen ? 'block' : 'none'};
          backdrop-filter: blur(2px);
        }
        @media(min-width: 768px) { .mobile-overlay { display: none; } }
      `}</style>

      {/* Hamburger Button (Top Right on Mobile) */}
      <button onClick={toggleMenu} className="mobile-toggle">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      <div className="mobile-overlay" onClick={() => setIsOpen(false)} />

      {/* Sidebar Content */}
      <aside style={sidebarStyle}>
        <div>
          {/* Logo */}
          <div style={{ color: 'var(--accent)', fontWeight: 900, fontSize: '1.5rem', marginBottom: '3rem', letterSpacing: '-1px' }}>
            AUSI DAVID
          </div>
          
          {/* Menu Items */}
          <nav>
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
              <User size={24} /> 
              <span>About</span>
            </a>
            <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>
              <Briefcase size={24} /> 
              <span>Experience</span>
            </a>
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              <Code size={24} /> 
              <span>Projects</span>
            </a>
          </nav>
        </div>

        {/* Social Icons at Bottom */}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
          <a href="https://github.com/Tomiwa011" target="_blank" className="nav-link" style={{padding: 0}}><Github size={20} /></a>
          <a href="#" className="nav-link" style={{padding: 0}}><Linkedin size={20} /></a>
          <a href="mailto:tomiwaausi@gmail.com" className="nav-link" style={{padding: 0}}><Mail size={20} /></a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;