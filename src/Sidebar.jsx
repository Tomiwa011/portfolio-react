import { useState } from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, Menu, X,Star } from 'lucide-react';

const Sidebar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const sidebarStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: 'var(--bg-card)',
    borderRight: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    zIndex: 100,
    width: 'var(--sidebar-width)',
    transition: 'transform 0.3s ease-in-out',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  };

  return (
    <>
      <style>{`
        @media(min-width: 768px) {
          aside { transform: translateX(0) !important; }
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.1rem;
          transition: 0.2s;
        }

        .nav-link:hover {
          color: var(--accent);
          transform: translateX(5px);
        }

        .theme-toggle-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 0.75rem;
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 999px;
          background: var(--surface);
          color: var(--text-primary);
          cursor: pointer;
          font-size: 0.95rem;
        }

        .mobile-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 90;
          display: ${isOpen ? 'block' : 'none'};
          backdrop-filter: blur(2px);
        }
        @media(min-width: 768px) { .mobile-overlay { display: none; } }
      `}</style>

      <button onClick={toggleMenu} className="mobile-toggle" type="button">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="mobile-overlay" onClick={() => setIsOpen(false)} />

      <aside style={sidebarStyle}>
        <div>
          <div style={{ color: 'var(--accent)', fontWeight: 900, fontSize: '1.5rem', marginBottom: '3rem', letterSpacing: '-1px' }}>
            AUSI DAVID
          </div>

          <nav>
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
              <User size={24} />
              <span>About</span>
            </a>
            <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>
              <Briefcase size={24} />
              <span>What I Do</span>
            </a>
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
              <Code size={24} />
              <span>Projects</span>
            </a>
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
              <Star size={24} />
              <span>Skills</span>
            </a>
          <label className="switch ">
  <span className="sun">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="#ffd43b">
        <circle r="5" cy="12" cx="12"></circle>
        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
      </g>
    </svg>
  </span>
  <span className="moon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
    </svg>
  </span>   
  
  <input 
    type="checkbox" 
    className="input" 
    onChange={toggleTheme} 
    checked={theme === 'dark'} 
  />
  
  <span className="slider"></span>
</label>
          </nav>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
          <a href="https://github.com/Tomiwa011" target="_blank" className="nav-link" style={{padding: 0}}><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/ayooluwatomiwa-ausi-552364229?" className="nav-link" style={{padding: 0}}><Linkedin size={20} /></a>
          <a href="mailto:tomiwaausi@gmail.com" className="nav-link" style={{padding: 0}}><Mail size={20} /></a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;