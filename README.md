# 🧠 Pavan Portfolio - AI-Powered Personal Website  

A **modern, interactive portfolio** built with **React + FastAPI + AWS Serverless** architecture featuring an integrated **AI Chat Assistant** that answers questions about Pavan’s professional experience in real time.  

This project blends the aesthetics of a high-end developer portfolio with the intelligence of a personalized conversational assistant powered by **Google Gemini** and **Retrieval-Augmented Generation (RAG)**.  

---

## 🚀 Overview

**Pavan Portfolio** serves two primary goals:

1. Present a **clean, elegant professional portfolio** showcasing education, experience, research, and projects.
2. Integrate a **real-time conversational AI assistant** that understands Pavan’s profile and can answer career-related queries dynamically.

The assistant uses **Gemini 2.5 Pro** via a secure FastAPI backend hosted on **AWS Lambda**, with static content deployed on **AWS S3 + CloudFront**.  
It’s fully serverless, scalable, and cost-efficient & ideal for personal branding and enterprise-grade demonstrations.

---

## 🧩 Architecture

### High-Level Components

| Layer | Technology | Description |
|-------|-------------|--------------|
| **Frontend** | React + Vite + Tailwind CSS | Responsive UI with light/dark themes and smooth transitions |
| **Backend API** | FastAPI (Python) + Mangum | Exposes `/api/chat` endpoint; deployed as AWS Lambda |
| **AI Model** | Google Gemini-2.5-Pro | Processes natural language questions and responds in a professional tone |
| **Storage** | Amazon S3 | Stores resume and LinkedIn text context for retrieval |
| **Hosting** | AWS CloudFront + S3 | Serves the static portfolio assets globally |
| **CI/CD** | GitHub Actions | Automates Lambda packaging and S3 + CloudFront deployment |
| **Security** | CORS + API Gateway | Enforces domain-restricted access from CloudFront and custom domains |

---

## 🧠 Features

### 💬 AI Chat Assistant  
- Context-aware chatbot powered by Gemini-2.5-Pro.  
- Speaks in **third-person professional voice** (“Pavan has experience in…”).  
- Respects privacy (no personal data shared).  
- Can answer behavioral and technical questions about Pavan’s work.  

### 🌗 Modern UI/UX  
- Responsive, mobile-first design with **light/dark mode**.  
- Floating chatbot icon for seamless interaction.  
- Professional sections for About, Experience, Research, and Education.  

### ⚙️ Serverless Architecture  
- Deployed entirely on AWS Lambda + S3 (no EC2 or paid compute).  
- Automatically scales on demand.  
- Integrates with **CloudFront CDN** for low-latency global delivery.  

### 🔄 CI/CD Automation  
- GitHub Actions workflow automates:  
  1. Backend packaging & Lambda deployment  
  2. Frontend build & upload to S3  
  3. CloudFront cache invalidation  

## ⚡ Setup & Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/pavan789bhanu/Pavan-Portfolio.git
cd Pavan-Portfolio
```
### 2. Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
#### Create a .env file:
```bash
GEMINI_API_KEY=your_api_key
GEMINI_MODEL=gemini-2.5-pro
S3_BUCKET_NAME= your_chat_files
S3_KNOWLEDGE_BASE_KEY=your_resume_file
PROJECT_NAME=your_project_name
```
#### Run locally:
```bash
uvicorn main:app --reload
```
3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
By default, the frontend connects to the local backend (http://localhost:8000/api/chat).

## ☁️ AWS Deployment (Serverless)

#### Create AWS Resources:
- Lambda function for FastAPI backend
- S3 bucket for frontend hosting
- API Gateway connected to Lambda
- CloudFront distribution with custom domain (pavan-portfolio.com)

#### CI/CD (GitHub Actions)
Secrets required in your repo →
`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`,
`LAMBDA_FUNCTION_NAME`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`, `VITE_API_BASE`

- Trigger Deployment: Every push to main automatically:

### 🔒 Security & Privacy

- All network calls are HTTPS-only (no mixed content).
- Strict CORS policy allows requests only from the verified CloudFront domain.
- The chatbot refuses to share personal contact info other than email.
- Environment secrets are managed via AWS Lambda environment variables and GitHub Secrets.

### 🌍 Custom Domain

- Registered on Namecheap → Hosted via AWS Route 53 + CloudFront
Domains:
- pavan-portfolio.com (root)
- www.pavan-portfolio.com (redirects to root)

### 💬 Contact
- 🌐 Live Portfolio: https://pavan-portfolio.com
- 🤖 Chat with the Assistant: https://pavan-portfolio.com/#chat

