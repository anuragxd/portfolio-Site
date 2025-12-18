
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface rounded-[4rem] border border-brand-border overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            <div className="p-12 lg:p-20 space-y-8 relative z-10">
              <div className="space-y-4">
                <h2 className="text-brand-green text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-brand-green"></span>
                  Contact
                </h2>
                <h3 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Let's Build Something <br/> <span className="text-brand-green">Incredible</span> Together
                </h3>
              </div>
              
              <p className="text-white/60 text-lg max-w-md">
                Interested in data collaboration or looking for a Data Science intern/engineer? Reach out through any of these channels.
              </p>

              <div className="space-y-6 pt-4">
                <a href="mailto:ghoshanurag04@gmail.com" className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand-green/50 transition-all">
                      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                   </div>
                   <div>
                     <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Email</p>
                     <p className="text-lg font-bold group-hover:text-brand-green transition-colors">ghoshanurag04@gmail.com</p>
                   </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/anurag-ghosh-bab3ba228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group">

                   <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand-green/50 transition-all">
                      <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                   </div>
                   <div>
                     <p className="text-xs text-white/40 font-bold uppercase tracking-widest">LinkedIn</p>
                     <p className="text-lg font-bold group-hover:text-brand-green transition-colors">linkedin.com/in/anurag-ghosh-bab3ba228/</p>
                   </div>
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] bg-brand-green p-12 lg:p-20 flex flex-col justify-center">
               <div className="relative z-10 space-y-8">
                  <h4 className="text-4xl font-black text-black">Ready to get started?</h4>
                  <p className="text-black/80 text-xl font-medium">I'm currently accepting new opportunities for late 2025 and 2026.</p>
                  <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                    Let's Build Together
                  </button>
               </div>
               {/* Grid Pattern */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
            </div>

          </div>
          
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
