import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';

const items = [
  {
    label: "Master's Degree",
    degree: 'Master of Science — Data Science',
    school: 'University of Colorado Boulder — Boulder, CO',
    detail: 'Applied ML & LLMs, Agentic systems, RAG, prompt engineering, scalable cloud deployment.',
  },
  {
    label: "Bachelor's Degree",
    degree: 'Bachelor of Technology — Information Technology',
    school: 'SSN College of Engineering — Chennai, TN',
    detail: 'Data Structires & Algorithms, databases, software systems, Machine Learning.',
  },
];

const EducationTimeline = () => {
  return (
    <Section id="education">
      <H1>Education</H1>
      <div className="timeline pl-10">
        {items.map((item, idx) => (
          <div key={idx} className="relative mb-12">
            <span className="dot" style={{ top: 8, background: '#7c3aed' }}></span>
            <div className="ml-6 pl-6">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.label}</div>
              <Card className="p-5 card-hover">
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <div className="font-medium text-gray-700 dark:text-gray-300 mb-2">{item.school}</div>
                <p className="text-gray-700 dark:text-gray-300">{item.detail}</p>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationTimeline;
