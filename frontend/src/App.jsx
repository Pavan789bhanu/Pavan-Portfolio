import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ExperienceSection from './components/ExperienceTimeline.jsx';
import ResearchSection from './components/ResearchSection.jsx';
import EducationSection from './components/EducationTimeline.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import FloatingChat from './components/FloatingChat.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="reveal"><HeroSection /></section>
        <section id="about" className="reveal"><AboutSection /></section>
        <section id="experience" className="reveal"><ExperienceSection /></section>
        <section id="research" className="reveal"><ResearchSection /></section>
        <section id="education" className="reveal"><EducationSection /></section>
        <section id="skills" className="reveal"><SkillsSection /></section>
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
};

export default App;
