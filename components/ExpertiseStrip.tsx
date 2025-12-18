
import React from 'react';

const ExpertiseStrip: React.FC = () => {
  const expertise = [
    'Machine Learning',
    'Statistics',
    'Data Analysis',
    'NLP',
    'AI Agents',
    'Recommendation Systems',
    'Computer Vision',
    'Big Data Engineering',
    'MLOps',
    'A/B Testing'
  ];

  return (
    <div className="bg-brand-surface py-12 border-y border-brand-border overflow-hidden relative">
      <div className="scrolling-wrapper">
        {[...expertise, ...expertise].map((item, index) => (
          <div key={index} className="flex items-center mx-12">
             <span className="text-brand-green text-3xl font-bold opacity-30">/</span>
             <span className="text-white/80 text-2xl font-semibold ml-10 whitespace-nowrap tracking-tight">
               {item}
             </span>
          </div>
        ))}
      </div>
      {/* Gradients to fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
    </div>
  );
};

export default ExpertiseStrip;
