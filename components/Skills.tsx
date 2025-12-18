
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      items: ['Python', 'SQL', 'R', 'C++']
    },
    {
      title: 'ML Frameworks',
      items: ['Scikit-Learn', 'XGBoost', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Data Ops',
      items: ['Pandas', 'NumPy', 'Dask', 'MLOps']
    },
    {
      title: 'NLP & AI',
      items: ['Transformers', 'LangChain', 'FAISS', 'OpenAI APIs']
    },
    {
      title: 'Visualization',
      items: ['Power BI', 'Matplotlib', 'Streamlit', 'Seaborn']
    },
    {
      title: 'Infrastructure',
      items: ['Git', 'Docker', 'MySQL', 'Flask']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-brand-surface/50 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
           <h2 className="text-brand-green text-sm font-bold uppercase tracking-widest">Tech Stack</h2>
           <h3 className="text-4xl lg:text-5xl font-bold">Tools & Technologies</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-brand-dark p-10 rounded-[2.5rem] border border-brand-border hover:border-brand-green/30 transition-all group">
              <h4 className="text-xl font-bold mb-6 text-brand-green">{cat.title}</h4>
              <div className="flex flex-wrap gap-3">
                {cat.items.map(item => (
                  <div key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
