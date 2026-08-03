# Akshat Tated — Portfolio Website

A personal portfolio site with a terminal / dev-console visual theme — built with React, Vite, and Tailwind CSS.

**🔗 Live:** [portfolio-bay-tau-50.vercel.app](https://portfolio-bay-tau-50.vercel.app)

![Status](https://img.shields.io/badge/status-live-brightgreen)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)

---

## About

This is my personal portfolio, styled around a "system console" aesthetic — status lines, build-log tickers, and monospace section headers — while remaining a fully responsive, standard React SPA under the hood.

## Sections

| Section | What it shows |
|---|---|
| **Hero** | Intro, open-to-work status, resume + contact CTAs |
| **System_Overview** (About) | Summary + education timeline |
| **System_Capabilities** (Skills) | Languages, frontend, backend & DB, testing & tools |
| **Execution_Log** (Experience) | Capgemini training, Daanpatra internship, freelance work |
| **Build_Registry** (Projects) | UnitForge, Interview Prep AI, Wonders, Pytest Automation Framework |
| **Certifications & Badges** | Google Cloud, Microsoft, Cisco, MongoDB credentials |
| **Terminate_Process** (Contact) | Email, LinkedIn, GitHub |

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 4 (`@tailwindcss/vite`)
- **Icons:** react-icons
- **Linting:** ESLint 9 with React Hooks / React Refresh plugins
- **Deployment:** Vercel

## Project Structure

```
portfolio-website/
├── public/
│   └── assets/          # images, badges, resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
└── vite.config.js
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Akshat-Tated/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Contact

- **Email:** akshattated18@gmail.com
- **LinkedIn:** [linkedin.com/in/akshat-tated](https://linkedin.com/in/akshat-tated)
- **GitHub:** [@Akshat-Tated](https://github.com/Akshat-Tated)
