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
*Professional hero section with profile image and key highlights*

### Recruiters Page
![Recruiters - Technical Expertise](./screenshots/image_2.png)
*Professional summary, CV download and comprehensive technical skills*

### Clients Page  
![Client Services](./screenshots/image_5_client_page.png)
*Service offerings and project approach*

### Footer View
![Portfolio Footer](./screenshots/image_4.png)
*Footer with contact information and social links*

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient effects and smooth animations
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Three Main Sections**:
  - **Home**: Professional profile, skills showcase, and featured projects
  - **For Recruiters**: Comprehensive professional experience, technical expertise, and CV download
  - **For Clients**: Service offerings, project approach, and contact information
- **Dark Navigation**: Elegant gradient navbar and footer for enhanced aesthetics
- **Interactive Components**: Hover effects, smooth transitions, and engaging animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure

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
│   ├── profile.jpg          # Your professional photo
│   └── cv.pdf               # Your CV/resume
├── src/
│   ├── components/
│   │   ├── About.jsx        # About/Professional Profile section
│   │   ├── Footer.jsx       # Site footer with links
│   │   ├── Hero.jsx         # Hero section with photo
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Projects.jsx     # Featured projects showcase
│   │   └── Skills.jsx       # Technical skills grid
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Recruiters.jsx   # Page for recruiters
│   │   └── Clients.jsx      # Page for potential clients
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and animations
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)

   - Update your name
   - Modify job titles
   - Change location and badges
   - Update bio text

2. **About Section** (`src/components/About.jsx`)

   - Edit professional summary
   - Update statistics (years, projects, etc.)

3. **Skills** (`src/components/Skills.jsx`)

   - Add/remove programming languages
   - Update frameworks and tools
   - Customize skill categories

4. **Projects** (`src/components/Projects.jsx`)

   - Replace with your own projects
   - Update descriptions and metrics
   - Change tech stack badges

5. **Professional Experience** (`src/pages/Recruiters.jsx`)
   - Add your work history
   - Update job titles and companies
   - Modify achievements and responsibilities

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

- `src/components/Footer.jsx` - Footer links
- `src/pages/Recruiters.jsx` - Recruiter contact section
- `src/pages/Clients.jsx` - Client contact section


## 🌐 Deployment

### Production (Netlify – Live)

This portfolio is deployed using **Netlify** with continuous deployment from GitHub.

- **Live URL:** https://www.franklynoliha.com
- **Hosting:** Netlify
- **CI/CD:** Automatic deploys on every push to the `master` branch
- **Security:** HTTPS via Let’s Encrypt
- **Performance:** Global CDN

### Local Development

```bash
npm run dev

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images and lazy loading
- Minimal JavaScript bundle size

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🎯 Who This Portfolio Is For

- **Recruiters** looking for a Machine Learning Engineer / Software Engineer
- **Hiring managers** reviewing real-world projects and architecture
- **Clients** seeking data-driven software and AI solutions
- **Developers** exploring a modern React + Vite + Tailwind setup


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Franklyn Oliha**

- Portfolio: [www.franklynoliha.com](https://www.franklynoliha.com)
- LinkedIn: [linkedin.com/in/franklyn-oliha](https://linkedin.com/in/franklyn-oliha)
- YouTube: [@mudiatech](https://youtube.com/@mudiatech)
- Email: franklyn.oliha@outlook.com
- GitHub: [github.com/franklyn-oliha](https://github.com/franklyn-oliha)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind Labs for the utility-first CSS framework
- Vite Team for the lightning-fast build tool
- All open-source contributors

---

**Built with ❤️ by Franklyn Oliha**
