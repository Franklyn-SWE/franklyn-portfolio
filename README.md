# Franklyn Oliha — Professional Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/3eb8eafb-aba8-4b68-a009-6f1e4bc53448/deploy-status)](https://app.netlify.com/projects/franklynoliha-portfolio/deploys)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-teal)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-2.0.0-orange)

A modern, fully responsive professional portfolio for a **Machine Learning Engineer & AI Systems Builder**. Built with React 18 + Vite + Tailwind CSS and deployed on Netlify with continuous deployment from GitHub.

---

## 🔗 Live Site

🌍 **https://www.franklynoliha.com**

Hosted on Netlify with HTTPS, global CDN, and automatic deploys on every push to `master`.

---

## 📸 Screenshots

| Page | Preview |
|------|---------|
| Home | ![Home](./screenshots/image_1.png) |
| About Me | ![About](./screenshots/image_7_about_page.png) |
| Projects | ![Projects](./screenshots/image_2.png) |
| Clients | ![Clients](./screenshots/image_5_client_page.png) |
| Footer | ![Footer](./screenshots/image_4.png) |

---

## ✨ Features

- **Fully Responsive** — mobile-first design tested across phones, tablets, and desktops
- **Four Main Pages** — Home, About Me, Projects (Recruiters), Clients
- **Hero Section** — animated gradient heading, professional profile photo, badge row, dual CTA
- **Hackathon Section** — scroll-reveal animation with `IntersectionObserver`, staggered image transitions, and `prefers-reduced-motion` support
- **Featured Work Showcase** — 5 project cards on the homepage, linking to full case studies
- **Full Project Case Studies** — expandable `<details>` with problem / solution / technical approach / outcome per project
- **Technical Expertise Grid** — categorised skill tags across Languages, Frameworks, ML/AI, Deployment, and Databases
- **About Me Page** — first-person professional biography with career timeline and values
- **Clients Page** — service offerings, engagement process, and consultation CTA
- **CV Download** — single PDF downloadable from Navbar, Hero, About, and Projects pages
- **Sticky Gradient Navbar** — horizontal scroll on mobile with hidden scrollbar
- **Smooth Scroll Animations** — `cubic-bezier` transitions with reduced-motion fallback
- **Accessible** — semantic HTML, `alt` attributes on all images, `rel="noopener noreferrer"` on external links

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM v6 |
| Animation | Native `IntersectionObserver` + CSS transitions |
| Deployment | Netlify (CI/CD from GitHub) |
| CSS Processing | PostCSS + Autoprefixer |

---

## 📁 Project Structure

```
franklyn-portfolio/
├── public/
│   ├── profile.jpg                    # Hero section photo
│   ├── photo.jpg                      # About page photo
│   ├── hk_1.jpeg                      # Hackathon poster image
│   ├── hk_3.jpeg                      # Hackathon group photo
│   ├── Franklyn_Oliha_Public_CV.pdf   # CV download (all links)
│   └── _redirects                     # Netlify SPA routing config
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Sticky gradient navbar, CV download
│   │   ├── Hero.jsx                   # Hero section, profile photo, badges, CTA
│   │   ├── Projects.jsx               # Hackathon section + featured work (Home)
│   │   ├── Skills.jsx                 # Technical expertise grid
│   │   └── Footer.jsx                 # Footer with correct social links
│   ├── pages/
│   │   ├── Home.jsx                   # Entry page (Hero + Projects)
│   │   ├── About.jsx                  # Professional biography
│   │   ├── Recruiters.jsx             # Full project case studies + skills
│   │   └── Clients.jsx                # Services & consultation
│   ├── App.jsx                        # Router and layout shell
│   ├── main.jsx                       # App entry point
│   └── index.css                      # Global styles, scrollbar-hide utility
├── screenshots/                       # Portfolio screenshots
├── index.html                         # HTML template
├── package.json                       # Scripts and dependencies
├── tailwind.config.js                 # Tailwind configuration
├── postcss.config.js                  # PostCSS configuration
├── vite.config.js                     # Vite configuration
└── README.md                          # This file
```

---

## 🛠️ Local Development

**Prerequisites:** Node.js v18+ and npm v9+

```bash
# 1. Clone
git clone https://github.com/Franklyn-SWE/franklyn-portfolio.git
cd franklyn-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build    # outputs to dist/
npm run preview  # preview production build locally
```

---

## 🗂️ Key Pages

### Home (`/`)
Hero section with name, title, badge row (Secure Environment Experience, Manchester UK, MSc Distinction, UK Public Sector), description paragraph, and dual CTAs. Followed by the hackathon scroll-reveal section and featured work cards.

### About Me (`/about`)
First-person professional biography covering academic background, professional experience, entrepreneurship (MudiaTech, Mudia Estate Limited), leadership values, and a Let's Connect CTA.

### Projects (`/recruiters`)
Detailed project case studies with expandable sections:
- LeadMate AI — multi-tenant SaaS platform
- Human Trafficking Coercion Detection System — BERT NLP
- UK House Price Prediction Platform — LightGBM/XGBoost
- Enterprise Automation Platform — Django + n8n + Azure
- Real-Time Attendance Management System — Firebase

### Clients (`/clients`)
ML solutions, software engineering, data science & analytics, and AI automation service offerings with consultation CTA.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary gradient | `from-blue-600 via-purple-600 to-indigo-600` |
| Navbar background | `from-slate-900 via-blue-900 to-indigo-900` |
| Card background | `bg-white` with `rounded-2xl shadow-lg border border-slate-100` |
| Section spacing | `mb-16` |
| Card padding | `p-6 md:p-8` |
| Heading (page) | `text-4xl md:text-5xl lg:text-6xl font-bold` |
| Heading (section) | `text-2xl md:text-3xl font-bold` |
| Body text | `text-base md:text-lg text-slate-700 leading-relaxed` |

---

## 🚢 Deployment

The site deploys automatically to Netlify on every push to `master`. The `public/_redirects` file enables client-side routing (React Router) to work correctly:

```
/* /index.html 200
```

---

## 📄 Changelog

### v2.0.0 — April 2026
- Added hackathon experience section with scroll-reveal animation and real images
- Full About Me page redesign — first-person copy, consistent card layout, responsive padding
- Hero badge updates: Secure Environment Experience, UK Public Sector
- Updated CV to `Franklyn_Oliha_Public_CV.pdf` across all four download points
- Fixed `scrollbar-hide` CSS utility for mobile navbar
- Fixed hero subtitle overflow on small phones (< 380px)
- Fixed Footer: correct GitHub and LinkedIn URLs, updated copyright to 2026
- Added staggered `IntersectionObserver` animation with `prefers-reduced-motion` support

### v1.0.0 — 2025
- Initial portfolio launch with Home, About, Projects, and Clients pages

---

## 📬 Contact

| Channel | Link |
|---------|------|
| Website | https://www.franklynoliha.com |
| LinkedIn | https://www.linkedin.com/in/franklyn-oliha |
| GitHub | https://github.com/Franklyn-SWE |
| Email | franklyn.oliha@outlook.com |

---

*Built with React + Vite + Tailwind CSS. Deployed on Netlify.*


[![Netlify Status](https://api.netlify.com/api/v1/badges/3eb8eafb-aba8-4b68-a009-6f1e4bc53448/deploy-status)](https://app.netlify.com/projects/franklynoliha-portfolio/deploys)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Fast-purple)
![Tailwind](https://img.shields.io/badge/TailwindCSS-Utility--First-teal)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, responsive portfolio website showcasing professional experience, technical expertise, and projects in Machine Learning Engineering, Software Development, and Data Science.

## 🔗 Live Demo

🌍 **Production Website:**  
https://www.franklynoliha.com

Hosted on Netlify with HTTPS, global CDN, and continuous deployment from GitHub.

## 📸 Screenshots

### Home Page

![Home Page Hero Section](./screenshots/image_1.png)
_Professional hero section with profile image and key highlights_

### About Me Page

![About Me](./screenshots/image_7_about_page.png)
_Detailed professional background and career journey_

### Recruiters Page

![Recruiters - Technical Expertise](./screenshots/image_2.png)
_Professional summary, CV download and comprehensive technical skills_

### Clients Page

![Client Services](./screenshots/image_5_client_page.png)
_Service offerings and project approach_

### Footer View

![Portfolio Footer](./screenshots/image_4.png)
_Footer with contact information and social links_

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient effects and smooth animations
- **Fully Responsive**: Mobile-first design optimized for all screen sizes (mobile, tablet, desktop)
- **Four Main Pages**:
  - **Home**: Hero section with featured work showcase
  - **About Me**: Comprehensive professional background and career journey
  - **Projects**: Detailed project portfolio with expandable case studies
  - **Clients**: Service offerings, project approach, and consultation information
- **Featured Work Section**: Streamlined display of 4 key projects with categories and descriptions
- **Project Portfolio**: Comprehensive projects page with expandable case studies, tech stacks, and GitHub links
- **Dark Navigation**: Elegant gradient navbar with mobile-optimized horizontal scroll
- **Interactive Components**: Hover effects, smooth transitions, and expandable details elements
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Mobile-Optimized**: Responsive typography, padding, and touch-friendly buttons across all pages

## 🚀 Technologies Used

### Frontend

- **React 18** - Modern UI library
- **Vite** - Next-generation frontend build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools

- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing
- **ESLint** - Code quality and consistency

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Franklyn-SWE/franklyn-portfolio.git
   cd franklyn-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your profile image**

   - Place your professional photo as `profile.jpg` in the `public/` folder
   - Recommended size: 500x500px or larger (square format)

4. **Add your CV**

   - Place your CV PDF as `cv.pdf` in the `public/` folder

5. **Start development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The production-ready files will be in the `dist/` folder.

## 📁 Project Structure

```
franklyn-portfolio/
├── public/
│   ├── profile.jpg                              # Professional hero photo
│   ├── photo.jpg                                # About page photo
│   ├── Franklyn_Oliha_..._upd_CV.pdf           # CV/resume file
│   └── _redirects                               # Netlify SPA routing config
├── src/
│   ├── components/
│   │   ├── Footer.jsx                           # Site footer with social links
│   │   ├── Hero.jsx                             # Hero section with CTA buttons
│   │   ├── Navbar.jsx                           # Responsive navigation bar
│   │   └── Projects.jsx                         # Featured work showcase (Home)
│   ├── pages/
│   │   ├── Home.jsx                             # Homepage (Hero + Featured Work)
│   │   ├── About.jsx                            # About Me page
│   │   ├── Recruiters.jsx                       # Projects & Technical Expertise
│   │   └── Clients.jsx                          # Client services page
│   ├── App.jsx                                  # Main app with routing
│   ├── main.jsx                                 # Application entry point
│   └── index.css                                # Global styles & utilities
├── screenshots/                                 # Portfolio screenshots
├── index.html                                   # HTML template
├── package.json                                 # Dependencies and scripts
├── tailwind.config.js                           # Tailwind CSS configuration
├── postcss.config.js                            # PostCSS configuration
├── vite.config.js                               # Vite configuration
└── README.md                                    # This file
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)

   - Update your name and job titles
   - Change location, clearance status, and badges
   - Update bio text and description
   - Modify CTA button links

2. **Featured Work** (`src/components/Projects.jsx`)

   - Replace with your 4 featured projects
   - Update project titles, categories, and descriptions
   - Change gradient colors for each project
   - Update "View All Projects" link destination

3. **About Page** (`src/pages/About.jsx`)

   - Edit professional bio and background
   - Update academic credentials
   - Modify entrepreneurship and leadership sections
   - Update contact links

4. **Projects Page** (`src/pages/Recruiters.jsx`)

   - Add/edit detailed project case studies
   - Update tech stacks for each project
   - Modify expandable case study content
   - Update GitHub repository links
   - Edit Technical Expertise categories
   - Update CV download section

5. **Clients Page** (`src/pages/Clients.jsx`)
   - Update service offerings
   - Modify "Why Choose Me" section
   - Edit process steps
   - Update contact information and social links

### Color Scheme

The primary color scheme uses blue, purple, and indigo gradients. To customize:

**Tailwind Config** (`tailwind.config.js`):

```javascript
theme: {
  extend: {
    colors: {
      accent: "#2563eb", // Change primary accent color
    },
  },
}
```

**Update gradient colors** in components by modifying Tailwind classes:

- `from-blue-600` → `from-yourcolor-600`
- `to-purple-600` → `to-yourcolor-600`

### Contact Information

Update email and social links in:

- `src/components/Footer.jsx` - Footer social links
- `src/components/Hero.jsx` - CV download link
- `src/pages/About.jsx` - About page contact section
- `src/pages/Recruiters.jsx` - Projects page CV and contact links
- `src/pages/Clients.jsx` - Client contact and CTA section

### Navigation

Update navigation links in:

- `src/components/Navbar.jsx` - Main navigation menu
  - Home, About Me, Projects, Clients links
  - CV download button

### Mobile Optimization

The portfolio is fully mobile-responsive with:

- Responsive typography (text scales: `text-base md:text-lg lg:text-xl`)
- Responsive padding (padding scales: `p-6 md:p-8`)
- Mobile-friendly buttons (smaller touch targets on mobile)
- Horizontal scroll navigation on mobile devices
- Edge spacing with `px-4` on narrow content areas
- Touch-optimized interactive elements

## 🌐 Deployment

### Production (Netlify – Live)

This portfolio is deployed using **Netlify** with continuous deployment from GitHub.

- **Live URL:** https://www.franklynoliha.com
- **Hosting:** Netlify
- **CI/CD:** Automatic deploys on every push to the `master` branch
- **Security:** HTTPS via Let’s Encrypt
- **Performance:** Global CDN

### Local Development

````bash
npm run dev

## 📱 Browser Support

| Browser | Version |
|---------|---------||
| 🌐 Chrome | Latest |
| 🦊 Firefox | Latest |
| 🧭 Safari | Latest |
| 💠 Edge | Latest |
| 📱 Mobile | iOS Safari, Chrome Mobile |

## ⚡ Performance Metrics

| Metric | Score |
|--------|-------|
| 🏆 Lighthouse Score | 95+ |
| ⚡ First Contentful Paint | < 1.5s |
| 🎯 Time to Interactive | < 3s |
| 🖼️ Image Optimization | Lazy loading enabled |
| 📦 Bundle Size | Minimal & optimized |

## 🎯 Who This Portfolio Is For

| Audience | What You'll Find |
|----------|------------------|
| 💼 **Recruiters** | Detailed projects page with case studies, technical expertise, and CV download |
| 🎯 **Hiring Managers** | Real-world projects with problem/solution breakdowns and measurable outcomes |
| 🤝 **Clients** | Service offerings, process workflow, and consultation information |
| 👨‍💻 **Developers** | Modern React 18 + Vite + Tailwind CSS implementation with mobile-first design |
| 📱 **Mobile Users** | Fully responsive experience optimized for all screen sizes |

## 📝 Recent Updates (December 2025)

### Home Page Redesign
- ✅ Removed Professional Profile and Technical Expertise sections
- ✅ Streamlined to Hero section + Featured Work
- ✅ Updated "Featured Projects" to "Featured Work"
- ✅ Added 4 featured projects with category tags
- ✅ Simplified project cards (removed tech stacks and metrics)
- ✅ Added "View All Projects" button linking to Projects page

### Mobile Responsiveness
- ✅ Implemented responsive typography across all pages
- ✅ Added responsive padding (p-6 md:p-8)
- ✅ Mobile-optimized buttons and touch targets
- ✅ Horizontal scroll navigation on mobile
- ✅ Added edge spacing on narrow content areas
- ✅ Responsive font sizes (text-base md:text-lg lg:text-xl)

### Projects Page (Recruiters)
- ✅ Renamed to "Projects & Technical Expertise"
- ✅ Added 5 main projects with full details
- ✅ Implemented expandable case studies using `<details>` elements
- ✅ Added GitHub repository links
- ✅ Separated Customer Segmentation to "Additional Data Science Work"
- ✅ Comprehensive Technical Expertise section with categorized skills

### Navigation
- ✅ Updated navbar link from "Recruiters" to "Projects"
- ✅ Mobile-friendly horizontal scrolling navigation
- ✅ Larger touch targets for mobile users

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
````

3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

<div align="center">

### **Franklyn Oliha**

[![Portfolio](https://img.shields.io/badge/Portfolio-franklynoliha.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.franklynoliha.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Franklyn_Oliha-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/franklyn-oliha)
[![YouTube](https://img.shields.io/badge/YouTube-@mudiatech-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@mudiatech)
[![Email](https://img.shields.io/badge/Email-franklyn.oliha@outlook.com-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:franklyn.oliha@outlook.com)
[![GitHub](https://img.shields.io/badge/GitHub-Franklyn--SWE-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Franklyn-SWE)

</div>

## 🙏 Acknowledgments

- [React Team](https://react.dev/) - Amazing JavaScript framework
- [Tailwind Labs](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite Team](https://vitejs.dev/) - Lightning-fast build tool
- All open-source contributors who make projects like this possible

---

<div align="center">

**Built with ❤️ by [Franklyn Oliha](https://www.franklynoliha.com)**

⭐ Star this repo if you find it useful!

</div>
