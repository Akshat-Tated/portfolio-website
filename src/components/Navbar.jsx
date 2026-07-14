import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 text-light-text bg-dark-bg/90 backdrop-blur-md border-b border-border-subtle">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-10">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="assets/logo.png" alt="Logo" className="w-8 h-8 opacity-90 hover:opacity-100 transition" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 mono text-xs tracking-wide">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted-text hover:text-white transition duration-200"
            >
              // {link.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-muted-text hover:text-white focus:outline-none mono text-sm flex items-center justify-center w-8 h-8 border border-border-subtle rounded-sm bg-surface"
          >
            {isOpen ? '[X]' : '[≡]'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0c0a] border-b border-border-subtle py-4 px-6 flex flex-col gap-4 shadow-xl">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="mono text-sm tracking-wide text-muted-text hover:text-white border-l-2 border-border-subtle hover:border-primary pl-3 py-2 transition-all bg-surface/50"
            >
              // {link.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
