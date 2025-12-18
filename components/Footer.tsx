
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-brand-border bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-brand-green font-bold text-xl">Anurag</span>
            <span className="text-white/40 font-light text-lg">| Data Science</span>
          </div>
          
          <div className="flex items-center space-x-8 text-white/40 text-sm font-medium">
            <a href="https://github.com/anuragxd" className="hover:text-brand-green transition-colors">GitHub</a>
          </div>

          <p className="text-white/20 text-xs font-medium tracking-widest uppercase">
            &copy; 2025 Anurag Ghosh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
