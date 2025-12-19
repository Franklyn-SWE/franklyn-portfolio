# Franklyn Oliha - Professional Portfolio

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
