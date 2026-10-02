import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 bg-grid-pattern relative selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <HireMe />
        <ResumeViewer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
