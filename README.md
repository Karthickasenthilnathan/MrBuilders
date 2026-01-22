# 🏗️ MR Builders – Construction Company Website

A modern, responsive, and animated construction company website built for **MR Builders**, inspired by real-world industry standards and designed with a premium user experience in mind.

This project showcases professional frontend development practices using **React**, **Tailwind CSS**, and **Framer Motion**, focusing on clean UI, smooth animations, and scalability.

---

## 🌐 Live Features

- Responsive layout (mobile, tablet, desktop)
- Clean golden & grey brand color palette
- Smooth page & section animations
- Reusable modal-based contact system
- Professional project & services presentation
- Optimized UX for real estate / construction domain

---

## 🧱 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** Heroicons
- **State Management:** React Hooks (`useState`)
- **Build Tool:** Vite

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Achievements.jsx
│   ├── ServicesIntro.jsx
│   ├── ServicesGrid.jsx
│   ├── ContactFormModal.jsx
│   ├── JoinUsModal.jsx
│   └── ScrollToTop.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   └── Projects.jsx
├── App.jsx
└── main.jsx

---

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/mr-builders-website.git

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev

👤 Author

Karthicka
Frontend Developer | Computer Science Student
Focused on building clean, scalable, and real-world web applications.



---

# 📙 2. TECHNICAL DOCUMENTATION

### 📌 Project Overview
The MR Builders website is a **single-page application (SPA)** built to represent a professional construction company online presence. The goal was to deliver a **realistic client-ready website** rather than a demo or template.

---

## 🧠 Architecture Decisions

### 🔹 Component-Based Architecture
- Each UI section is modularized into reusable components.
- Improves maintainability and scalability.

### 🔹 Page-Based Routing
- `react-router-dom` handles navigation between:
  - Home
  - About
  - Services
  - Projects

### 🔹 Centralized Modal Control
- Modal visibility (`ContactFormModal`, `JoinUsModal`) is controlled from `App.jsx`.
- Props are passed down to Navbar, Footer, and pages to trigger modals.

---

## 🧩 State Management

```js
const [formOpen, setFormOpen] = useState(false)
const [joinOpen, setJoinOpen] = useState(false)

