import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';

const items = [
  {
    company: 'Citigroup',
    title: 'AI Engineer',
    period: '2023 – Present',
    location: 'USA',
    bullets: [
      'Reduced fraud by 32% with production ML detection.',
      'Accelerated compliance reporting by 38% via automation.',
      'Built GenAI assistants for advisory workflows.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'AI Engineer',
    period: '2020 – 2023',
    location: 'India',
    bullets: [
      'Designed ETL + ML pipelines (Spark, Airflow, MLflow).',
      'Deployed models and dashboards for BFSI clients.',
      'Improved precision/recall with feature engineering.',
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <Section id="experience">
      <H1>Experience</H1>
      <div className="timeline pl-10">
        {items.map((item, idx) => (
          <div key={idx} className="relative mb-12">
            <span className="dot" style={{ top: 8 }}></span>
            <div className="ml-6 pl-6">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {item.period} · {item.location}
              </div>
              <Card className="p-5 card-hover">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="text-brand-600 font-medium mb-2">{item.company}</div>
                <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceTimeline;
