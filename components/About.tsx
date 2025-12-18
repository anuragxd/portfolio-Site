
import React from 'react';

const About: React.FC = () => {
  const skills = [
    { label: 'Machine Learning', value: 90 },
    { label: 'Statistics', value: 95 },
    { label: 'SQL & Data Analysis', value: 90 },
    { label: 'NLP & LLMs', value: 85 },
    { label: 'AI Agents & Automation', value: 80 },
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-brand-green text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-green"></span>
                About Me
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                Turning Data into Impactful Insights
              </h3>
            </div>
            
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                I am a 5th-year Mathematics & Computing student at BIT Mesra with a passion for bridging the gap between theoretical mathematics and practical machine learning applications.
              </p>
              <p>
                My approach combines a rigorous analytical mindset with deep expertise in modern ML frameworks. I thrive on end-to-end project ownership, from data curation and hypothesis testing to deploying scalable models that solve real-world business problems.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    className="w-12 h-12 rounded-full border-2 border-brand-dark object-cover" 
                    alt="Team" 
                  />
                ))}
              </div>
              <p className="text-sm text-white/40">
                Collaborated with <span className="text-white font-semibold">15+ professionals</span><br /> on diverse AI/ML projects.
              </p>
            </div>
          </div>

          <div className="bg-brand-surface p-10 rounded-[3rem] border border-brand-border glass-card relative">
            <div className="space-y-8">
              <h4 className="text-2xl font-bold">Technical Proficiency</h4>
              {skills.map((skill) => (
                <div key={skill.label} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/80">{skill.label}</span>
                    <span className="text-brand-green font-bold">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-green rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green/20 blur-[60px] rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
