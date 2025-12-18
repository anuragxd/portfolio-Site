
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="text-brand-green font-bold text-2xl">Anurag</span>
            <span className="text-white/40 font-light text-xl">| Data Science</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-brand-green transition-colors font-medium text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div>
            <a
              href="public\DS_RESUME.pdf"
              download
              className="bg-brand-green text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all hover:scale-105 inline-block">
              Download Resume
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
