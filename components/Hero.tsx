
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
              Available for New Opportunities
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Empowering Decisions with <span className="text-brand-green">Data, ML & AI</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-lg leading-relaxed">
              Data Scientist & ML Engineer with a strong foundation in statistics, machine learning, and real-world problem solving. Transforming complex data into actionable intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-brand-green text-black px-8 py-4 rounded-full font-bold text-base hover:brightness-110 transition-all hover:scale-105">
                View Projects
              </a>
              <a href="#contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/5 transition-all">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-brand-surface p-6 rounded-3xl border border-brand-border glass-card hover:border-brand-green/30 transition-all group">
                   <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                   </div>
                   <h3 className="font-bold text-lg mb-1">Predictive Analytics</h3>
                   <p className="text-xs text-white/40">Statistical modeling for accurate forecasting.</p>
                </div>
                <div className="bg-brand-surface p-6 rounded-3xl border border-brand-border glass-card hover:border-brand-green/30 transition-all group">
                   <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                   </div>
                   <h3 className="font-bold text-lg mb-1">AI Agents</h3>
                   <p className="text-xs text-white/40">Automated reasoning and decision workflows.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-surface p-6 rounded-3xl border border-brand-border glass-card hover:border-brand-green/30 transition-all group">
                   <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                   </div>
                   <h3 className="font-bold text-lg mb-1">Deep Learning</h3>
                   <p className="text-xs text-white/40">Neural networks for advanced pattern recognition.</p>
                </div>
                <div className="bg-brand-surface p-6 rounded-3xl border border-brand-border glass-card hover:border-brand-green/30 transition-all group">
                   <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                   </div>
                   <h3 className="font-bold text-lg mb-1">Big Data</h3>
                   <p className="text-xs text-white/40">Scalable pipelines and large-scale engineering.</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/10 blur-[120px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
