
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpertiseStrip from './components/ExpertiseStrip';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <ExpertiseStrip />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
