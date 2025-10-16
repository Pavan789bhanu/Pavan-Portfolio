import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';

const pubs = [
  {
    title: 'An AI-Powered Interactive Interface to Enhance Accessibility of Interview Training for Military Veterans',
    venue: 'ICMI',
    date: 'Nov 4, 2024',
    link: 'https://dl.acm.org/doi/10.1145/3686215.3688371',
    authors: ['<strong>Pavan Kumar Malasani</strong>', 'Co-authors'],
  },
  {
    title: 'Investigating the Reasoning Abilities of Large Language Models for Understanding Spoken Language in Interpersonal Interactions',
    venue: 'Interspeech 2025',
    date: '2025',
    link: 'https://www.isca-archive.org/interspeech_2025/aggarwal25_interspeech.pdf',
    authors: ['<strong>Pavan Kumar Malasani</strong>', 'Co-authors'],
  },
];

const ResearchSection = () => {
  return (
    <Section id="research">
      <H1>Research & Publications</H1>
      <div className="grid gap-6">
        {pubs.map((p, idx) => (
          <Card key={idx} className="p-5 card-hover">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span className="font-medium text-brand-600">{p.venue}</span> · {p.date}
            </div>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            
            {/* 🛡 Safe Author Mapping */}
            <div className="text-gray-700 dark:text-gray-300 mb-3">
              {(p.authors || []).map((a, i) => (
                <span key={i} className="mr-2" dangerouslySetInnerHTML={{ __html: a }} />
              ))}
            </div>

            <a href={p.link} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">
              Read paper →
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ResearchSection;
