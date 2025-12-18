
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'LLM Preference Prediction',
      desc: 'Advanced system for evaluating and predicting user preferences in large language model outputs.',
      tags: ['Python', 'Transformers', 'Pandas'],
      github: 'https://github.com/your-username/llm-preference-prediction',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Enterprise Document Search (RAG)',
      desc: 'Retrieval Augmented Generation system for instant querying across massive internal document stores.',
      tags: ['FAISS', 'OpenAI', 'LangChain'],
      github: 'https://github.com/anuragxd/enterprise-rag-system',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Financial Health Dashboard',
      desc: 'Interactive credit card analytics suite visualization for tracking financial trends and spending.',
      tags: ['Power BI', 'SQL', 'Dashboarding'],
      github: 'https://github.com/anuragxd/Credit-Card-Financial-Dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Movie Recommendation Engine',
      desc: 'Hybrid collaborative filtering system suggesting movies based on user history and meta-features.',
      tags: ['Scikit-Learn', 'Recommendation', 'Python'],
      github: 'https://github.com/anuragxd/Content-Based-Movie-Recommendation-System',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      title: 'Automated ML Agent',
      desc: 'Agent-based system for automated Exploratory Data Analysis and optimal model selection.',
      tags: ['AI Agents', 'Streamlit', 'Automated EDA'],
      github: 'https://github.com/anuragxd/mlbind',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-brand-green text-sm font-bold uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand-green"></span>
              Projects
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold">Selected Case Studies</h3>
          </div>
          <p className="text-white/40 max-w-sm mb-2">
            A showcase of my recent work in ML, Data Analysis, and AI development, focused on delivering tangible business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-brand-surface group rounded-[2.5rem] p-10 border border-brand-border hover:border-brand-green/50 transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green group-hover:scale-110 group-hover:bg-brand-green group-hover:text-black transition-all">
                  {project.icon}
                </div>
                <h4 className="text-2xl font-bold leading-tight group-hover:text-brand-green transition-colors">{project.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="mt-10 relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-green font-bold text-sm uppercase tracking-wider group/btn">
                  View on GitHub
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                  View Project
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                
              </div>
              {/* Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[40px] rounded-full group-hover:bg-brand-green/15 transition-all"></div>
            </div>
          ))}
          {/* CTA Card */}
          <div className="bg-brand-green rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center text-black space-y-6 group">
             <h4 className="text-3xl font-black leading-tight">Your Next Project <br/> Starts Here</h4>
             <p className="text-black/70 font-medium">Have a challenging data problem or ML model you need built?</p>
             <a href="#contact" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
               Work Together
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
