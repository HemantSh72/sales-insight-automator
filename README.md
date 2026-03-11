# 🚀 Sales Insight Automator

An AI-powered tool that analyzes sales CSV/Excel files and sends professional executive summaries via email.

## Live Links
- **Frontend:** https://sales-insight-automator-rho.vercel.app
- **Backend API:** https://sales-insight-automator-zz30.onrender.com
- **Swagger Docs:** https://sales-insight-automator-zz30.onrender.com/api-docs

## Tech Stack
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **AI:** Groq (Llama 3.3 70B)
- **Email:** Resend
- **Containerization:** Docker + docker-compose
- **CI/CD:** GitHub Actions
- **Hosting:** Vercel (Frontend) + Render (Backend)

## How to Run Locally with Docker

### 1. Clone the repo
```bash
git clone https://github.com/HemantSh72/sales-insight-automator.git
cd sales-insight-automator
```

### 2. Create root `.env` file
```bash
GROQ_API_KEY=your_groq_key
RESEND_API_KEY=your_resend_key
```

### 3. Run with docker-compose
```bash
docker-compose up --build
```

Backend runs at: http://localhost:5000
Swagger docs at: http://localhost:5000/api-docs

## How to Run Without Docker

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Security
- **Helmet.js** - Sets secure HTTP headers
- **Rate Limiting** - Max 100 requests per 15 minutes per IP
- **CORS** - Cross-origin protection
- **Environment Variables** - All secrets stored in .env, never committed

## .env.example
```env
GROQ_API_KEY=
RESEND_API_KEY=
PORT=5000
```

## CI/CD Pipeline
GitHub Actions automatically:
- Installs dependencies
- Lints backend code
- Builds frontend
- Triggers on every push/PR to main