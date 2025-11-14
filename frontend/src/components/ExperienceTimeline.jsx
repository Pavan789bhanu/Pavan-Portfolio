import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';

const items = [
  {
    company: 'Citigroup',
    title: 'AI Engineer',
    period: '2023 – Present',
    location: 'USA',
    bullets: [
      'Cut regulatory documentation turnaround by 40% by spearheading LLM-based compliance automation using GPT-4 and LangChain to auto-summarize CCAR reports.',
      'Enhanced transaction surveillance precision by 27% by engineering AML anomaly detection pipelines that integrated Isolation Forest, BERT embeddings, and Kafka streams.',
      'Saved ~28 hours weekly in manual research by building a GenAI assistant for investment banking analysts using LLAMA 2 and Pinecone retrieval to automate market brief generation.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'Machine Learning Engineer',
    period: '2020 – 2023',
    location: 'India',
    bullets: [
      'Reduced default probability prediction error by 19% for banking clients by developing optimized credit risk models using Random Forest, XGBoost, and LightGBM.',
      'Accelerated data readiness for ML training by 42% by creating automated feature engineering pipelines using PySpark and Airflow.',
      'Improved cash flow prediction accuracy by 26% by deploying time-series forecasting models (Prophet, ARIMA)  to support treasury and liquidity management.',

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
