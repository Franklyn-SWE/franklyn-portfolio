# Franklyn Oliha Portfolio - Complete Project Manual

**Version:** 1.0  
**Date:** December 19, 2025  
**Author:** Franklyn Oliha  
**Project:** Professional Portfolio Website  
**Repository:** https://github.com/Franklyn-SWE/franklyn-portfolio  
**Live Site:** https://www.franklynoliha.com

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Overview](#2-project-overview)
3. [Technical Stack](#3-technical-stack)
4. [Getting Started](#4-getting-started)
5. [Project Architecture](#5-project-architecture)
6. [Component Documentation](#6-component-documentation)
7. [Page Documentation](#7-page-documentation)
8. [Styling and Design System](#8-styling-and-design-system)
9. [Customization Guide](#9-customization-guide)
10. [Deployment](#10-deployment)
11. [Maintenance and Updates](#11-maintenance-and-updates)
12. [Troubleshooting](#12-troubleshooting)
13. [Performance Optimization](#13-performance-optimization)
14. [SEO Best Practices](#14-seo-best-practices)
15. [Appendix](#15-appendix)

---

## 1. Introduction

### 1.1 Purpose

This manual serves as a comprehensive guide to the Franklyn Oliha Professional Portfolio website. It provides detailed documentation for developers, designers, and content managers who need to understand, maintain, or customize the portfolio.

### 1.2 Intended Audience

- **Developers**: Technical implementation details and code structure
- **Content Managers**: How to update content and information
- **Designers**: Design system and styling guidelines
- **Portfolio Owner**: Maintenance and customization instructions

### 1.3 Document Conventions

- `Code snippets` are displayed in monospace font
- **Bold text** indicates important terms or actions
- _Italic text_ indicates file names or paths
- 💡 Tips provide helpful suggestions
- ⚠️ Warnings highlight important considerations

---

## 2. Project Overview

### 2.1 Project Description

A modern, responsive portfolio website showcasing professional experience, technical expertise, and projects in Machine Learning Engineering, Software Development, and Data Science.

### 2.2 Key Features

- ✅ **Modern Design**: Clean, professional UI with gradient effects and smooth animations
- ✅ **Fully Responsive**: Mobile-first design optimized for all devices
- ✅ **Multi-Page Architecture**: Home, About Me, Projects, and Clients pages
- ✅ **Interactive Components**: Expandable case studies, hover effects, and smooth transitions
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML
- ✅ **Performance Focused**: Optimized bundle size and fast load times
- ✅ **CI/CD Pipeline**: Automatic deployment via Netlify

### 2.3 Project Goals

1. Showcase professional expertise and experience
2. Provide detailed project case studies for recruiters
3. Offer service information for potential clients
4. Maintain a professional online presence
5. Demonstrate technical capabilities

### 2.4 Project Statistics

- **Total Components**: 7 (4 components + 4 pages)
- **Lines of Code**: ~2,500+
- **Dependencies**: 8 main packages
- **Build Size**: ~150KB (gzipped)
- **Lighthouse Score**: 95+
- **Load Time**: <1.5s (First Contentful Paint)

---

## 3. Technical Stack

### 3.1 Core Technologies

#### **React 18.2.0**

- Modern UI library for building interactive interfaces
- Hooks-based functional components
- Virtual DOM for efficient rendering
- Component reusability and modularity

#### **Vite 5.0.8**

- Next-generation frontend build tool
- Lightning-fast Hot Module Replacement (HMR)
- Optimized production builds
- ES modules support

#### **React Router DOM 6.30.2**

- Client-side routing for single-page application
- Declarative navigation
- URL-based page management
- Browser history API integration

#### **Tailwind CSS 3.3.6**

- Utility-first CSS framework
- Responsive design utilities
- Customizable design system
- Minimal CSS bundle size

### 3.2 Development Dependencies

```json
{
  "autoprefixer": "^10.4.16", // CSS vendor prefixing
  "postcss": "^8.4.32", // CSS processing
  "tailwindcss": "^3.3.6", // Utility-first CSS
  "vite": "^5.0.8" // Build tool
}
```

### 3.3 System Requirements

- **Node.js**: v16 or higher
- **npm**: v7 or higher
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Modern browsers (Chrome, Firefox, Safari, Edge)

### 3.4 Technology Justification

| Technology       | Why We Use It                                                         |
| ---------------- | --------------------------------------------------------------------- |
| **React**        | Component-based architecture, large ecosystem, excellent performance  |
| **Vite**         | Faster development experience, optimized builds, modern tooling       |
| **Tailwind CSS** | Rapid styling, consistent design system, minimal CSS                  |
| **React Router** | Standard routing solution, excellent documentation, community support |

---

## 4. Getting Started

### 4.1 Prerequisites Checklist

- [ ] Node.js (v16+) installed
- [ ] npm (v7+) installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] GitHub account (for deployment)

### 4.2 Installation Steps

#### Step 1: Clone Repository

```bash
git clone https://github.com/Franklyn-SWE/franklyn-portfolio.git
cd franklyn-portfolio
```

#### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

#### Step 3: Add Assets

1. Add your professional photo:

   - File: `public/profile.jpg` (hero section)
   - File: `public/photo.jpg` (about page)
   - Recommended size: 500x500px (square format)
   - Format: JPG or PNG

2. Add your CV/Resume:
   - File: `public/cv.pdf`
   - Format: PDF
   - Keep file size under 2MB

#### Step 4: Start Development Server

```bash
npm run dev
```

Server will start at `http://localhost:5173`

#### Step 5: Verify Installation

1. Open browser to `http://localhost:5173`
2. Check all pages load correctly
3. Verify images display properly
4. Test responsive design (resize browser)
5. Check console for errors (F12)

### 4.3 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### 4.4 Folder Setup After Installation

```
franklyn-portfolio/
├── node_modules/          # Installed dependencies (auto-generated)
├── dist/                  # Production build (created after 'npm run build')
├── public/
│   ├── profile.jpg        # ⚠️ You need to add this
│   ├── photo.jpg          # ⚠️ You need to add this
│   └── cv.pdf             # ⚠️ You need to add this
├── src/                   # Source code
├── package.json           # Project configuration
└── README.md              # Project readme
```

💡 **Tip**: Use `.gitignore` to prevent committing `node_modules/` and `dist/` folders.

---

## 5. Project Architecture

### 5.1 Directory Structure

```
franklyn-portfolio/
│
├── public/                          # Static assets served as-is
│   ├── profile.jpg                  # Hero section photo (500x500px)
│   ├── photo.jpg                    # About page photo (500x500px)
│   ├── cv.pdf                       # CV/Resume PDF
│   └── _redirects                   # Netlify routing configuration
│
├── src/                             # Application source code
│   │
│   ├── components/                  # Reusable React components
│   │   ├── Footer.jsx               # Site footer with social links
│   │   ├── Hero.jsx                 # Hero section (homepage)
│   │   ├── Navbar.jsx               # Navigation bar
│   │   └── Projects.jsx             # Featured work showcase (homepage)
│   │
│   ├── pages/                       # Page components (routes)
│   │   ├── Home.jsx                 # Homepage (Hero + Featured Work)
│   │   ├── About.jsx                # About Me page
│   │   ├── Recruiters.jsx           # Projects & Technical Expertise page
│   │   └── Clients.jsx              # Client services page
│   │
│   ├── App.jsx                      # Main app component with routing
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles and Tailwind imports
│
├── screenshots/                     # Portfolio screenshots for README
│
├── index.html                       # HTML template
├── package.json                     # Project dependencies and scripts
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.js                   # Vite build configuration
├── README.md                        # Project documentation
└── PROJECT_MANUAL.md               # This manual
```

### 5.2 Component Hierarchy

```
App.jsx (Router Container)
│
├── Navbar.jsx (Global Navigation)
│
├── Routes
│   ├── Home.jsx
│   │   ├── Hero.jsx
│   │   └── Projects.jsx (Featured Work)
│   │
│   ├── About.jsx
│   │   └── (Self-contained page)
│   │
│   ├── Recruiters.jsx
│   │   └── (Projects + Technical Expertise)
│   │
│   └── Clients.jsx
│       └── (Services + Contact)
│
└── Footer.jsx (Global Footer)
```

### 5.3 Routing Structure

| Route       | Component        | Purpose                                  |
| ----------- | ---------------- | ---------------------------------------- |
| `/`         | `Home.jsx`       | Landing page with hero and featured work |
| `/about`    | `About.jsx`      | Professional background and biography    |
| `/projects` | `Recruiters.jsx` | Detailed projects and technical skills   |
| `/clients`  | `Clients.jsx`    | Service offerings and client information |

### 5.4 Data Flow

```
User Navigation
    ↓
React Router (App.jsx)
    ↓
Route Component Rendered
    ↓
Component Fetches/Displays Data
    ↓
User Interaction
    ↓
State Update (if needed)
    ↓
Component Re-renders
```

💡 **Note**: This portfolio uses static content. For dynamic content, consider adding state management (Redux, Context API) or a backend API.

---

## 6. Component Documentation

### 6.1 Navbar Component

**File**: `src/components/Navbar.jsx`

**Purpose**: Global navigation bar with links to all pages and CV download.

**Features**:

- Responsive design (horizontal scroll on mobile)
- Active page highlighting
- CV download button
- Gradient background
- Sticky positioning

**Props**: None (stateless component)

**Key Classes**:

```css
bg-gradient-to-r from-slate-900 to-blue-900  /* Background gradient */
sticky top-0 z-50                            /* Sticky navigation */
overflow-x-auto                              /* Mobile horizontal scroll */
```

**Usage**:

```jsx
<Navbar />
```

**Customization Points**:

1. Update navigation links in the `navLinks` array
2. Modify gradient colors
3. Change CV download link
4. Adjust mobile scroll behavior

---

### 6.2 Hero Component

**File**: `src/components/Hero.jsx`

**Purpose**: Homepage hero section with profile image and key highlights.

**Features**:

- Professional profile image
- Name and titles
- Location and clearance badges
- Bio and description
- CTA buttons (View Projects, Contact)
- Responsive typography

**Props**: None

**Key Sections**:

1. **Profile Image**: `public/profile.jpg` (500x500px recommended)
2. **Header**: Name and title with gradient text
3. **Badges**: Location, clearance, honors
4. **Bio**: Short professional description
5. **CTAs**: Buttons linking to projects and contact

**Usage**:

```jsx
<Hero />
```

**Customization**:

```jsx
// Update name
<h1>Your Name</h1>

// Update bio
<p>Your professional bio...</p>

// Update CTA links
<a href="#projects">View Projects</a>
<a href="mailto:your@email.com">Get in Touch</a>
```

---

### 6.3 Projects Component (Featured Work)

**File**: `src/components/Projects.jsx`

**Purpose**: Featured work showcase on homepage (4 projects).

**Features**:

- Grid layout (responsive)
- Project cards with gradients
- Category tags
- Brief descriptions
- "View All Projects" CTA

**Props**: None

**Data Structure**:

```javascript
const projects = [
  {
    title: "Project Name",
    category: "Category",
    description: "Brief description...",
    gradient: "from-blue-500 to-purple-600",
  },
  // ... more projects
];
```

**Usage**:

```jsx
<Projects />
```

**Customization**:

1. Update `projects` array with your projects
2. Change gradient colors for each card
3. Modify grid layout (currently 1-2 columns)
4. Update "View All Projects" link destination

---

### 6.4 Footer Component

**File**: `src/components/Footer.jsx`

**Purpose**: Global footer with social links and copyright.

**Features**:

- Social media links (LinkedIn, YouTube, GitHub, Email)
- Copyright notice
- Responsive layout
- Hover effects on links

**Props**: None

**Social Links**:

```javascript
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/franklyn-oliha",
  youtube: "https://www.youtube.com/@mudiatech",
  github: "https://github.com/Franklyn-SWE",
  email: "mailto:franklyn.oliha@outlook.com",
};
```

**Usage**:

```jsx
<Footer />
```

**Customization**:

1. Update social media URLs
2. Change copyright text
3. Add/remove social links
4. Modify layout and styling

---

## 7. Page Documentation

### 7.1 Home Page

**File**: `src/pages/Home.jsx`

**Route**: `/`

**Components Used**:

- `<Hero />` - Hero section
- `<Projects />` - Featured work showcase

**Purpose**: Landing page showcasing profile and featured projects.

**Layout**:

```jsx
<div className="min-h-screen">
  <Hero /> {/* Hero section with profile */}
  <Projects /> {/* Featured work (4 projects) */}
</div>
```

**Content Structure**:

1. Hero section with profile image and bio
2. Featured work section with 4 key projects
3. CTA to view all projects

---

### 7.2 About Page

**File**: `src/pages/About.jsx`

**Route**: `/about`

**Purpose**: Comprehensive professional background and career journey.

**Sections**:

1. **Header**: Name, photo, and role
2. **Introduction**: Professional bio
3. **Academic Background**: Education and expertise
4. **Professional Experience**: Projects and achievements
5. **Entrepreneurship**: MudiaTech and Mudia Estate Limited
6. **Leadership**: Collaboration and values
7. **Professional Focus**: Driven by specific values

**Key Features**:

- Responsive grid layouts
- Gradient background sections
- Icons and visual elements
- Links to Projects page and archived portfolio
- Mobile-optimized typography

**Content Updates**:

1. Update professional bio
2. Modify academic credentials
3. Edit entrepreneurship details
4. Update professional values
5. Change contact links

---

### 7.3 Projects Page (Recruiters)

**File**: `src/pages/Recruiters.jsx`

**Route**: `/projects`

**Purpose**: Detailed project portfolio and technical expertise.

**Sections**:

1. **Page Header**: Title and description
2. **CV Download**: Prominent CTA button
3. **Featured Projects**: 5 main projects with:
   - Project title and overview
   - Tech stack with icons
   - Expandable case studies (`<details>` elements)
   - GitHub repository links
4. **Additional Work**: Data Science projects
5. **Technical Expertise**: Categorized skills

**Project Structure**:

```jsx
<div className="project-card">
  <h3>Project Title</h3>
  <p>Overview...</p>

  {/* Tech Stack */}
  <div className="tech-stack">
    <span>Python</span>
    <span>React</span>
    {/* ... */}
  </div>

  {/* Expandable Case Study */}
  <details>
    <summary>View Case Study</summary>
    <div>
      <h4>Problem</h4>
      <p>...</p>
      <h4>Solution</h4>
      <p>...</p>
      <h4>Outcome</h4>
      <p>...</p>
    </div>
  </details>

  {/* GitHub Link */}
  <a href="https://github.com/...">View Repository →</a>
</div>
```

**Technical Expertise Categories**:

1. Machine Learning & AI
2. Programming Languages
3. Frameworks & Libraries
4. Data Science & Analytics
5. Cloud & DevOps
6. Databases

---

### 7.4 Clients Page

**File**: `src/pages/Clients.jsx`

**Route**: `/clients`

**Purpose**: Service offerings and client information.

**Sections**:

1. **Header**: Introduction for potential clients
2. **Services Offered**: 6 key services with icons
3. **Why Choose Me**: Value propositions
4. **My Process**: 4-step workflow
5. **Call to Action**: Contact section with social links

**Services**:

1. Custom Software Development
2. Machine Learning Solutions
3. Data Analysis & Insights
4. Full-Stack Web Applications
5. API Development & Integration
6. Technical Consulting

**Process Steps**:

1. **Discovery**: Understanding requirements
2. **Planning**: Solution design and timeline
3. **Development**: Agile implementation
4. **Delivery**: Deployment and support

---

## 8. Styling and Design System

### 8.1 Color Palette

#### Primary Colors

```css
/* Blue (Primary) */
blue-50:  #eff6ff
blue-100: #dbeafe
blue-500: #3b82f6
blue-600: #2563eb  /* Main accent */
blue-700: #1d4ed8
blue-800: #1e40af
blue-900: #1e3a8a

/* Purple (Secondary) */
purple-50:  #faf5ff
purple-100: #f3e8ff
purple-500: #a855f7
purple-600: #9333ea  /* Secondary accent */
purple-700: #7e22ce

/* Slate (Neutral) */
slate-50:  #f8fafc
slate-100: #f1f5f9
slate-600: #475569
slate-700: #334155
slate-800: #1e293b
slate-900: #0f172a  /* Dark backgrounds */
```

#### Gradient Combinations

```css
/* Header gradients */
bg-gradient-to-r from-blue-600 to-purple-600

/* Background gradients */
bg-gradient-to-br from-white to-blue-50
bg-gradient-to-r from-slate-50 to-blue-50

/* Dark gradients */
bg-gradient-to-r from-slate-900 to-blue-900
```

### 8.2 Typography

#### Font Family

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, sans-serif;
```

#### Font Sizes (Responsive)

```css
/* Headings */
h1: text-4xl md:text-5xl lg:text-6xl  (2.25rem - 3.75rem)
h2: text-2xl md:text-3xl              (1.5rem - 1.875rem)
h3: text-xl md:text-2xl               (1.25rem - 1.5rem)

/* Body Text */
p: text-base md:text-lg               (1rem - 1.125rem)
small: text-sm md:text-base           (0.875rem - 1rem)
```

#### Font Weights

```css
font-normal: 400   /* Body text */
font-semibold: 600 /* Links, emphasis */
font-bold: 700     /* Headings */
```

### 8.3 Spacing System

#### Padding (Responsive)

```css
p-4 md:p-6        /* 1rem → 1.5rem */
p-6 md:p-8        /* 1.5rem → 2rem */
p-8 md:p-12       /* 2rem → 3rem */
```

#### Margins

```css
mb-4    /* 1rem */
mb-6    /* 1.5rem */
mb-8    /* 2rem */
mb-12   /* 3rem */
mb-16   /* 4rem */
```

### 8.4 Border Radius

```css
rounded-lg: 0.5rem      /* Cards */
rounded-xl: 0.75rem     /* Featured cards */
rounded-2xl: 1rem       /* Large sections */
rounded-full: 9999px    /* Profile images, badges */
```

### 8.5 Shadows

```css
shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
shadow-md: 0 4px 6px rgba(0,0,0,0.1)
shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
shadow-xl: 0 20px 25px rgba(0,0,0,0.1)
shadow-2xl: 0 25px 50px rgba(0,0,0,0.25)
```

### 8.6 Responsive Breakpoints

```css
sm: 640px    /* Small devices */
md: 768px    /* Medium devices (tablets) */
lg: 1024px   /* Large devices (desktops) */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### 8.7 Design Patterns

#### Card Pattern

```jsx
<div
  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg 
                border-l-4 border-blue-600"
>
  {/* Content */}
</div>
```

#### Gradient Header Pattern

```jsx
<h1
  className="text-4xl md:text-5xl font-bold bg-gradient-to-r 
               from-blue-600 to-purple-600 bg-clip-text text-transparent"
>
  Heading Text
</h1>
```

#### Button Pattern

```jsx
<button
  className="px-6 py-3 bg-blue-600 text-white rounded-lg 
                   hover:bg-blue-700 transition-colors font-semibold"
>
  Button Text
</button>
```

---

## 9. Customization Guide

### 9.1 Changing Personal Information

#### Update Name and Title (Hero)

**File**: `src/components/Hero.jsx`

```jsx
// Line ~20
<h1 className="...">
  Your Name
</h1>
<p className="...">
  Your Job Title
</p>
```

#### Update Bio

**File**: `src/components/Hero.jsx`

```jsx
// Line ~50
<p className="...">Your professional bio goes here...</p>
```

#### Update Location and Clearance

**File**: `src/components/Hero.jsx`

```jsx
// Line ~30
<span className="...">
  📍 Your Location
</span>
<span className="...">
  🔐 Your Clearance Status
</span>
```

### 9.2 Adding/Editing Projects

#### Featured Work (Homepage)

**File**: `src/components/Projects.jsx`

```jsx
// Line ~10
const projects = [
  {
    title: "Your Project Name",
    category: "Project Category",
    description: "Brief project description...",
    gradient: "from-blue-500 to-purple-600", // Custom gradient
  },
  // Add more projects...
];
```

#### Detailed Projects (Projects Page)

**File**: `src/pages/Recruiters.jsx`

```jsx
// Add new project section
<div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
  <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Name</h3>
  <p className="text-lg text-slate-700 mb-6">Project overview...</p>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-2 mb-6">
    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
      Python
    </span>
    {/* Add more tech */}
  </div>

  {/* Case Study */}
  <details className="mb-6">
    <summary className="cursor-pointer...">View Case Study</summary>
    <div className="mt-4 space-y-4">
      <div>
        <h4 className="font-semibold text-lg text-slate-900 mb-2">Problem</h4>
        <p className="text-slate-700">Problem description...</p>
      </div>
      {/* Add Solution and Outcome */}
    </div>
  </details>

  {/* GitHub Link */}
  <a href="https://github.com/your-repo" className="...">
    View Repository →
  </a>
</div>
```

### 9.3 Updating Contact Information

#### Email

**Files to Update**:

1. `src/components/Hero.jsx` - Contact button
2. `src/components/Footer.jsx` - Footer email link
3. `src/pages/Clients.jsx` - Client contact section

```jsx
// Update email in all locations
<a href="mailto:your-email@example.com">Contact</a>
```

#### Social Links

**File**: `src/components/Footer.jsx`

```jsx
// Update social media URLs
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/your-profile",
  youtube: "https://www.youtube.com/@your-channel",
  github: "https://github.com/your-username",
  email: "mailto:your-email@example.com",
};
```

### 9.4 Changing Colors

#### Update Primary Color

**File**: `tailwind.config.js`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          // ... add your color scale
          600: "#your-color", // Main accent
        },
      },
    },
  },
};
```

Then replace `blue-600` with `primary-600` throughout components.

#### Update Gradient Colors

Find and replace gradient classes:

```css
/* Old */
from-blue-600 to-purple-600

/* New */
from-yourcolor-600 to-anothercolor-600
```

### 9.5 Adding New Pages

#### Step 1: Create Page Component

**File**: `src/pages/NewPage.jsx`

```jsx
export default function NewPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">New Page Title</h1>
      <p className="text-lg text-slate-700">Page content...</p>
    </div>
  );
}
```

#### Step 2: Add Route

**File**: `src/App.jsx`

```jsx
import NewPage from "./pages/NewPage";

// Add route
<Route path="/new-page" element={<NewPage />} />;
```

#### Step 3: Update Navigation

**File**: `src/components/Navbar.jsx`

```jsx
<a href="/new-page" className="...">
  New Page
</a>
```

### 9.6 Updating CV/Resume

1. Replace `public/cv.pdf` with your updated CV
2. Keep filename as `cv.pdf` OR update all references:
   - `src/components/Hero.jsx` - CV download button
   - `src/components/Navbar.jsx` - Navbar CV button
   - `src/pages/Recruiters.jsx` - Projects page CV download

```jsx
// Update CV link
<a href="/cv.pdf" download>
  Download CV
</a>
```

### 9.7 Customizing Mobile Experience

#### Adjust Mobile Font Sizes

```jsx
// Current
<h1 className="text-4xl md:text-5xl">

// Smaller mobile text
<h1 className="text-3xl md:text-5xl">

// Larger mobile text
<h1 className="text-5xl md:text-6xl">
```

#### Adjust Mobile Padding

```jsx
// Current
<div className="p-4 md:p-8">

// More compact
<div className="p-3 md:p-8">

// More spacious
<div className="p-6 md:p-10">
```

---

## 10. Deployment

### 10.1 Netlify Deployment (Current Setup)

#### Prerequisites

- GitHub account
- Netlify account (free tier sufficient)
- Repository pushed to GitHub

#### Initial Setup

1. **Build Portfolio Locally**

   ```bash
   npm run build
   ```

   Verify `dist/` folder is created.

2. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin master
   ```

3. **Connect Netlify to GitHub**

   - Log in to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Select "GitHub" and authorize
   - Choose your repository

4. **Configure Build Settings**

   ```
   Build command: npm run build
   Publish directory: dist
   Branch: master
   ```

5. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically
   - Site URL will be provided (e.g., `random-name.netlify.app`)

#### Custom Domain Setup

1. **Add Custom Domain**

   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `franklynoliha.com`)

2. **Configure DNS**
   - Add DNS records in your domain registrar:
     ```
     A     @     75.2.60.5
     CNAME www   random-name.netlify.app
     ```
3. **Enable HTTPS**
   - In Netlify, go to "Domain settings" > "HTTPS"
   - Click "Verify DNS configuration"
   - Wait for SSL certificate (automatic via Let's Encrypt)

#### Continuous Deployment

Every push to `master` branch automatically triggers deployment:

```bash
git add .
git commit -m "Update content"
git push origin master
# ✅ Automatically deploys to Netlify
```

### 10.2 Alternative Deployment Options

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://username.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

#### Manual Hosting

```bash
# Build for production
npm run build

# Upload dist/ folder to your web server
# Configure server to serve index.html for all routes (SPA)
```

### 10.3 Environment Variables

If you add environment variables:

1. **Create `.env` file** (don't commit this)

   ```
   VITE_API_KEY=your-api-key
   VITE_API_URL=https://api.example.com
   ```

2. **Add to Netlify**

   - Go to "Site settings" > "Environment variables"
   - Add each variable

3. **Use in code**
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

---

## 11. Maintenance and Updates

### 11.1 Regular Maintenance Tasks

#### Weekly

- [ ] Check for broken links
- [ ] Verify images load correctly
- [ ] Test mobile responsiveness
- [ ] Monitor site performance

#### Monthly

- [ ] Update project descriptions
- [ ] Add new projects to portfolio
- [ ] Update CV/Resume
- [ ] Check for outdated content
- [ ] Review analytics (if configured)

#### Quarterly

- [ ] Update dependencies (`npm update`)
- [ ] Review and optimize images
- [ ] Update technical skills
- [ ] Refresh professional bio
- [ ] Test on new devices/browsers

#### Annually

- [ ] Major content refresh
- [ ] Design review and updates
- [ ] Performance audit
- [ ] SEO optimization review
- [ ] Accessibility audit

### 11.2 Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all packages (minor versions)
npm update

# Update specific package
npm update react

# Update to latest (including major versions)
npm install react@latest react-dom@latest
```

⚠️ **Warning**: Always test after updating dependencies!

### 11.3 Backing Up Your Portfolio

#### GitHub Backup (Automatic)

Your code is automatically backed up to GitHub with every push.

#### Local Backup

```bash
# Create backup
git clone https://github.com/Franklyn-SWE/franklyn-portfolio.git portfolio-backup

# Or zip current directory
tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz .
```

#### Asset Backup

Regularly back up:

- `public/profile.jpg`
- `public/photo.jpg`
- `public/cv.pdf`

### 11.4 Version Control Best Practices

```bash
# Create feature branch
git checkout -b feature/new-project

# Make changes and commit
git add .
git commit -m "Add new ML project to portfolio"

# Push branch
git push origin feature/new-project

# Merge to master (after review)
git checkout master
git merge feature/new-project
git push origin master
```

---

## 12. Troubleshooting

### 12.1 Common Issues and Solutions

#### Issue: Dev server won't start

```bash
Error: Cannot find module...
```

**Solution**:

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

#### Issue: Images not displaying

**Symptoms**: Broken image icons, 404 errors

**Solutions**:

1. Check file paths:

   ```jsx
   // ✅ Correct (public folder)
   <img src="/profile.jpg" />

   // ❌ Incorrect
   <img src="./profile.jpg" />
   <img src="../public/profile.jpg" />
   ```

2. Verify files exist in `public/` folder
3. Check file names match exactly (case-sensitive)
4. Clear browser cache (Ctrl+Shift+R)

---

#### Issue: Routing not working after deployment

**Symptoms**: 404 errors when refreshing page or accessing direct URLs

**Solution** (Netlify):
Create `public/_redirects` file:

```
/*    /index.html   200
```

This tells Netlify to serve `index.html` for all routes (SPA routing).

---

#### Issue: Build fails in production

```bash
ERROR: Failed to compile
```

**Solutions**:

1. Check for console errors:

   ```bash
   npm run build
   ```

2. Common issues:

   - Unused imports → Remove them
   - Missing dependencies → Install them
   - Syntax errors → Fix them

3. Build locally before deploying:
   ```bash
   npm run build
   npm run preview  # Test production build
   ```

---

#### Issue: Slow loading times

**Symptoms**: Page takes >3 seconds to load

**Solutions**:

1. **Optimize images**:

   - Compress images (use tinypng.com)
   - Resize to appropriate dimensions
   - Use WebP format

2. **Check bundle size**:

   ```bash
   npm run build
   # Check dist/ folder size
   ```

3. **Lazy load images**:
   ```jsx
   <img src="/profile.jpg" loading="lazy" />
   ```

---

#### Issue: Styles not applying

**Symptoms**: Page looks unstyled or broken

**Solutions**:

1. Check Tailwind is imported:

   ```css
   /* src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Verify Tailwind config:

   ```javascript
   // tailwind.config.js
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```

3. Clear build cache:
   ```bash
   rm -rf dist node_modules/.vite
   npm run dev
   ```

---

### 12.2 Debugging Tips

#### Enable React DevTools

1. Install [React DevTools](https://react.dev/learn/react-developer-tools)
2. Open DevTools (F12) → "Components" tab
3. Inspect component props and state

#### Check Console Errors

```javascript
// Add error boundaries
console.error("Error:", error);
console.log("Debug info:", data);
```

#### Network Tab

- Open DevTools (F12) → "Network" tab
- Check for failed requests (red)
- Verify asset paths are correct

#### Lighthouse Audit

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for Performance, SEO, Accessibility
4. Follow recommendations

---

## 13. Performance Optimization

### 13.1 Image Optimization

#### Compress Images

```bash
# Online tools
- tinypng.com
- squoosh.app
- imageoptim.com

# CLI tools
npm install -g imagemin-cli
imagemin public/*.jpg --out-dir=public/optimized
```

#### Recommended Image Sizes

- Profile photos: 500x500px, <100KB
- Project screenshots: 1200x800px, <200KB
- Icons: 64x64px, <10KB

#### Use Modern Formats

```jsx
<picture>
  <source srcSet="/profile.webp" type="image/webp" />
  <img src="/profile.jpg" alt="Profile" />
</picture>
```

### 13.2 Code Splitting

#### Lazy Load Pages

```jsx
import { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About"));

<Suspense fallback={<div>Loading...</div>}>
  <About />
</Suspense>;
```

### 13.3 Bundle Size Optimization

#### Analyze Bundle

```bash
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});

# Build and view
npm run build
```

#### Tree Shaking

```javascript
// ✅ Import only what you need
import { useState } from "react";

// ❌ Import everything
import * as React from "react";
```

### 13.4 Caching Strategy

#### Set Cache Headers (Netlify)

Create `netlify.toml`:

```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "no-cache"
```

---

## 14. SEO Best Practices

### 14.1 Meta Tags

**File**: `index.html`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary Meta Tags -->
  <title>Your Name - Software Engineer & ML Engineer</title>
  <meta name="title" content="Your Name - Software Engineer" />
  <meta
    name="description"
    content="Professional portfolio showcasing machine learning, software engineering, and data science projects."
  />
  <meta
    name="keywords"
    content="software engineer, machine learning, data science, portfolio"
  />
  <meta name="author" content="Your Name" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.yoursite.com/" />
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Professional portfolio..." />
  <meta property="og:image" content="https://www.yoursite.com/og-image.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.yoursite.com/" />
  <meta property="twitter:title" content="Your Name - Portfolio" />
  <meta property="twitter:description" content="Professional portfolio..." />
  <meta
    property="twitter:image"
    content="https://www.yoursite.com/og-image.jpg"
  />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</head>
```

### 14.2 Structured Data

Add JSON-LD for better search results:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Software Engineer & ML Engineer",
    "url": "https://www.yoursite.com",
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile",
      "https://github.com/yourusername"
    ]
  }
</script>
```

### 14.3 Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yoursite.com/</loc>
    <lastmod>2025-12-19</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.yoursite.com/about</loc>
    <lastmod>2025-12-19</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yoursite.com/projects</loc>
    <lastmod>2025-12-19</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.yoursite.com/clients</loc>
    <lastmod>2025-12-19</lastmod>
    <priority>0.5</priority>
  </url>
</urlset>
```

### 14.4 robots.txt

Create `public/robots.txt`:

```txt
User-agent: *
Allow: /
Sitemap: https://www.yoursite.com/sitemap.xml
```

---

## 15. Appendix

### 15.1 Useful Commands Reference

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm run preview               # Preview production build

# Git Operations
git status                    # Check status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push origin master        # Push to GitHub

# Dependency Management
npm install                   # Install dependencies
npm update                    # Update packages
npm outdated                  # Check for updates
npm install package-name      # Install specific package

# Troubleshooting
rm -rf node_modules           # Remove dependencies
npm install                   # Reinstall
npm cache clean --force       # Clear npm cache
```

### 15.2 Keyboard Shortcuts (Development)

| Action          | Windows/Linux       | Mac              |
| --------------- | ------------------- | ---------------- |
| Save file       | Ctrl+S              | Cmd+S            |
| Open DevTools   | F12 or Ctrl+Shift+I | F12 or Cmd+Opt+I |
| Hard refresh    | Ctrl+Shift+R        | Cmd+Shift+R      |
| Search in files | Ctrl+Shift+F        | Cmd+Shift+F      |
| Terminal        | Ctrl+`              | Cmd+`            |

### 15.3 Resources and Documentation

#### Official Documentation

- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com/

#### Learning Resources

- **React Tutorial**: https://react.dev/learn
- **Tailwind UI**: https://tailwindui.com/components
- **MDN Web Docs**: https://developer.mozilla.org/

#### Tools

- **VS Code**: https://code.visualstudio.com/
- **GitHub**: https://github.com/
- **Netlify**: https://netlify.com/
- **Figma** (design): https://figma.com/

### 15.4 VS Code Extensions (Recommended)

1. **ES7+ React/Redux Snippets** - Code snippets
2. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind
3. **Prettier** - Code formatting
4. **ESLint** - Code linting
5. **Path Intellisense** - File path autocomplete
6. **Auto Rename Tag** - Rename paired tags
7. **GitLens** - Git insights

### 15.5 Component Checklist

When creating new components:

- [ ] Component name is PascalCase
- [ ] File name matches component name
- [ ] Proper imports at top
- [ ] PropTypes defined (if using props)
- [ ] Responsive design implemented
- [ ] Accessibility attributes added
- [ ] Comments for complex logic
- [ ] Tested on mobile devices
- [ ] No console errors
- [ ] Proper semantic HTML

### 15.6 Deployment Checklist

Before deploying:

- [ ] All images optimized
- [ ] CV/Resume updated
- [ ] Links tested (no broken links)
- [ ] Contact information verified
- [ ] Spelling and grammar checked
- [ ] Mobile responsiveness tested
- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors or warnings
- [ ] Meta tags updated
- [ ] Lighthouse score >90
- [ ] Git committed and pushed

### 15.7 Contact and Support

**Project Owner**: Franklyn Oliha  
**Email**: franklyn.oliha@outlook.com  
**Website**: https://www.franklynoliha.com  
**GitHub**: https://github.com/Franklyn-SWE  
**LinkedIn**: https://www.linkedin.com/in/franklyn-oliha

---

## Conclusion

This manual provides comprehensive documentation for the Franklyn Oliha Professional Portfolio. For questions, issues, or suggestions, please reach out via the contact information provided above.

**Last Updated**: December 19, 2025  
**Version**: 1.0  
**Next Review**: March 19, 2026

---

**© 2025 Franklyn Oliha. All Rights Reserved.**
