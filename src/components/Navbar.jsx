import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 text-light-text">
      {/* 🔹 Background Layer: Grid + Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/grid-bg.png')] bg-cover bg-center opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1117] via-[#121F30]/80 to-transparent backdrop-blur-md" />
      </div>

      {/* 🔹 Navbar Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="assets/logo.png"
            alt="Akshat Logo"
            className="w-9 h-9 object-contain transition hover:brightness-110"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-accent-blue transition duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl text-muted-text">
          <a href="mailto:akshattated18@gmail.com" className="hover:text-accent-blue transition" title="Gmail">
            <SiGmail />
          </a>
          <a href="https://www.linkedin.com/in/akshat-tated" target="_blank" className="hover:text-accent-blue transition" title="LinkedIn">
            <SiLinkedin />
          </a>
          <a href="https://github.com/Akshat-Tated" target="_blank" className="hover:text-accent-blue transition" title="GitHub">
            <SiGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
