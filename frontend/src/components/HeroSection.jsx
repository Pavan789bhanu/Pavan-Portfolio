import React from 'react';
import profile from '/profile.png';

const HeroSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[.18] dark:opacity-[.12]
                      bg-[radial-gradient(1200px_500px_at_20%_0%,_rgba(79,70,229,.25),_transparent_60%)]"></div>

      <div className="sectionWrap grid md:grid-cols-[280px_1fr] gap-10 items-center">
        <div className="justify-self-center md:justify-self-start">
          <img
            src={profile}
            alt="Pavan profile"
            className="w-64 h-64 object-cover rounded-glass shadow-soft ring-1 ring-black/5"
          />
        </div>

        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05]">
            <span className="text-gray-900 dark:text-gray-100">Pavan Kumar</span><br />
            <span className="text-gray-900 dark:text-gray-100">Malasani</span>
          </h1>
          <p className="mt-5 text-xl text-gray-700 dark:text-gray-300">
            AI/ML Engineer · LLMs · GenAI Systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
