import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';
import Pill from './ui/Pill.jsx';

const SKILLS = [
  { title: 'Languages & Databases', items: ['Python','SQL','R','Go','MySQL','PostgreSQL','MongoDB','Redshift'] },
  { title: 'Libraries & Frameworks', items: ['TensorFlow','PyTorch','Scikit-learn','XGBoost','Transformers','OpenCV'] },
  { title: 'LLMs & NLP', items: ['RAG','LangChain','HuggingFace','Prompt Engineering','Gemini','GPT'] },
  { title: 'Data & MLOps', items: ['Spark','Airflow','MLflow','Docker','Kubernetes','Snowflake'] },
  { title: 'Analytics & Viz', items: ['Power BI','Tableau','Pandas','NumPy','SciPy','Matplotlib'] },
  { title: 'Cloud', items: ['AWS','Azure','GCP'] },
];

const SkillsSection = () => {
  return (
    <Section id="skills">
      <H1>Skills</H1>
      <div className="grid md:grid-cols-2 gap-6">
        {SKILLS.map((bucket) => (
          <Card key={bucket.title} className="p-5 card-hover">
            <h3 className="text-lg font-semibold mb-3">{bucket.title}</h3>
            <div className="flex flex-wrap gap-2">
              {bucket.items.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
