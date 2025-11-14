import React from 'react';
import { Section, H1, Card } from './ui/Section.jsx';

const AboutSection = () => {
  return (
    <Section id="about">
      <H1>About</H1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 md:col-span-2">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am an AI/ML Engineer with experience in designing, training, and deploying intelligent systems across banking and financial domains. 
            Skilled in developing predictive models, credit risk engines, and GenAI-powered solutions using Python, TensorFlow, PyTorch, and LLMs. 
            Expertise in MLOps automation, NLP pipelines, and scalable data workflows leveraging Spark, Airflow, and MLflow. 
            Proven success in reducing fraud exposure, accelerating risk evaluations, and enhancing compliance reporting through AI-driven insights. 
            Adept at bridging data science and engineering to deliver high-impact, production-ready financial AI systems.
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
