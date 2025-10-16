import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';

const AboutSection = () => {
  return (
    <Section id="about">
      <H1>About</H1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 md:col-span-2">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m an AI/ML Engineer with 3+ years of experience delivering scalable machine learning,
            generative AI, and data engineering solutions in the banking and financial domain.
            I focus on fraud detection, LLM-powered assistants, and reliable MLOps delivery.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Quick Facts</h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li>• LLMs, RAG, Prompt Engineering</li>
            <li>• TensorFlow, PyTorch, XGBoost</li>
            <li>• Spark, Airflow, MLflow</li>
            <li>• AWS, Azure, GCP</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default AboutSection;
