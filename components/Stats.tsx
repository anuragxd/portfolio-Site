
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'ML & Data Projects', value: '10+' },
    { label: 'End-to-End Pipelines', value: '5+' },
    { label: 'Graduating Year', value: '2026' },
  ];

  return (
    <section className="py-20 bg-brand-surface border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2 group">
              <div className="text-5xl lg:text-6xl font-black text-brand-green group-hover:scale-110 transition-transform cursor-default">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
