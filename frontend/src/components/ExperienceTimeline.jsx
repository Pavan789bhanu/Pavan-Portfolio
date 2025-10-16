import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';

const items = [
  {
    company: 'Citigroup',
    title: 'AI Engineer',
    period: '2023 – Present',
    location: 'USA',
    bullets: [
      'Deployed GenAI copilots that cut advisor response time by 41% across wealth platforms.',
      'Engineered AI pipelines that accelerated compliance analysis by 38% using automated summarization.',
      'Delivered personalized recommendations, boosting engagement by 17%.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'AI Engineer',
    period: '2020 – 2023',
    location: 'India',
    bullets: [
      'Automated compliance validation with NLP pipelines, improving accuracy and cutting manual review time by 29%.',
      'Reduced fraudulent activity by 32% using ML models (XGBoost, Deep Learning) across 5M+ daily transactions.',
      'Integrated explainable dashboards (SHAP, Tableau, Power BI) to support auditors and regulatory teams.',
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
