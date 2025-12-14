# Project Documentation

## Franklyn Oliha Professional Portfolio

### Document Version: 1.0

### Date: December 13, 2025

### Author: Franklyn Oliha

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Component Documentation](#component-documentation)
4. [Styling System](#styling-system)
5. [Routing Structure](#routing-structure)
6. [Deployment Guide](#deployment-guide)
7. [Maintenance](#maintenance)
8. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Purpose

A professional portfolio website designed to showcase technical expertise, professional experience, and project accomplishments to recruiters, potential clients, and professional connections.

### Target Audience

- **Recruiters**: Looking for SC-cleared ML engineers and software developers
- **Clients**: Seeking professional services in ML, software development, and data science
- **Professional Network**: Colleagues and industry contacts

### Key Objectives

- Present professional credentials in an engaging, accessible format
- Provide separate tailored experiences for recruiters and clients
- Showcase technical skills and completed projects
- Facilitate easy contact and CV download

---

## Architecture

### Tech Stack Decision Rationale

**React 18**

- Component-based architecture for maintainability
- Virtual DOM for optimal performance
- Large ecosystem and community support

**Vite**

- Lightning-fast development server with HMR
- Optimized production builds
- Native ES modules support
- Significantly faster than Create React App

**Tailwind CSS**

- Rapid UI development with utility classes
- Consistent design system
- Smaller bundle size with purging unused styles
- Easy responsive design implementation

**React Router DOM**

- Client-side routing for SPA experience
- Clean URL structure
- Easy navigation management

### Application Flow

```
User Entry → Navbar (Sticky)
    ↓
Homepage (Hero, About, Skills, Projects)
    ↓
Navigation Options:
    ├── For Recruiters (Professional focus)
    ├── For Clients (Service focus)
    └── CV Download
    ↓
Footer (Social links, Contact)
```

---

## Component Documentation

### Core Components

#### 1. **Navbar Component**

**File**: `src/components/Navbar.jsx`

**Purpose**: Primary navigation with sticky positioning

**Features**:

- Logo/initials branding (FO.)
- Navigation links (Home, Recruiters, Clients)
- CV download button
- Dark gradient background
- Sticky positioning for constant access

**Props**: None (uses React Router's Link component)

**Styling**: Dark gradient (slate → blue → indigo)

---

#### 2. **Hero Component**

**File**: `src/components/Hero.jsx`

**Purpose**: First impression section with photo and introduction

**Features**:

- Professional photo with circular frame
- Gradient glow effect on image
- Name with gradient text effect
- Role badges (SC Cleared, Location, Experience, Education)
- Bio text
- CTA buttons (View Projects, Download CV)

**Layout**: Two-column grid (content left, photo right)

**Key Styling**:

- Image: 320px → 384px responsive sizing
- Gradient text: blue → purple → indigo
- Glow effect: Subtle blur with gradient background

**Customization Points**:

- Name text
- Job titles
- Badge information
- Bio paragraph
- Button links

---

#### 3. **About Component**

**File**: `src/components/About.jsx`

**Purpose**: Professional summary with key statistics

**Features**:

- Statistics cards (Years, Projects, Education)
- Academic credentials
- Professional experience summary
- Gradient background card

**Key Metrics Displayed**:

- 4+ Years Experience
- 20+ Projects Delivered
- 1st Class Honours

---

#### 4. **Skills Component**

**File**: `src/components/Skills.jsx`

**Purpose**: Technical expertise showcase

**Structure**: 4 categorized skill groups

- Programming Languages
- Web Frameworks
- ML & AI
- Tools & Platforms

**Features**:

- Icon-based category headers
- Pill-style skill badges
- Hover effects
- Color-coded categories

---

#### 5. **Projects Component**

**File**: `src/components/Projects.jsx`

**Purpose**: Featured project showcase

**Project Structure**:
Each project includes:

- Title with emoji icon
- Detailed description
- Tech stack badges
- Impact metrics
- Featured badge with gradient
- Hover effects

**Current Projects**:

1. Human Trafficking Coercion Detection (NLP/Research)
2. UK House Price Prediction (Production)
3. Enterprise Automation Platform (Enterprise)

---

#### 6. **Footer Component**

**File**: `src/components/Footer.jsx`

**Purpose**: Site footer with links and copyright

**Features**:

- Copyright notice
- Social media links (GitHub, LinkedIn, Email)
- Matching gradient background to navbar
- Hover effects on links

---

### Page Components

#### 1. **Home Page**

**File**: `src/pages/Home.jsx`

**Purpose**: Main landing page

**Structure**:

```jsx
<Hero />
<About />
<Skills />
<Projects />
```

**Layout**: Single-column flow with consistent spacing

---

#### 2. **Recruiters Page**

**File**: `src/pages/Recruiters.jsx`

**Purpose**: Recruiter-focused information

**Sections**:

1. **Professional Summary**

   - Academic credentials
   - Professional status
   - Role objectives

2. **Technical Expertise**

   - 4 skill categories with color-coded badges
   - Comprehensive tech stack

3. **Notable Projects**

   - 3 detailed project showcases
   - Metrics and impact statements
   - Technology stacks

4. **Professional Experience**

   - 3 positions with timelines
   - Key achievements per role
   - Color-coded left borders

5. **Key Strengths**

   - Soft skills highlight
   - Icon-based cards

6. **CV Download CTA**
   - Download button
   - LinkedIn profile link
   - Gradient background

---

#### 3. **Clients Page**

**File**: `src/pages/Clients.jsx`

**Purpose**: Service offering for potential clients

**Sections**:

1. **Hero Section**

   - Value proposition headline
   - Service overview

2. **Services Offered**

   - 4 service categories (ML, Software, Data Science, Automation)
   - Detailed service lists
   - Gradient card backgrounds

3. **Why Choose Me**

   - 6 key differentiators
   - Icon-based layout
   - Two-column grid

4. **Project Approach**

   - 4-step process visualization
   - Numbered badges
   - Detailed descriptions per phase

5. **Contact CTA**
   - Multiple contact methods
   - Email, LinkedIn, GitHub links
   - Gradient background

---

## Styling System

### Color Palette

**Primary Colors**:

- Blue: `#2563eb` (Tailwind blue-600)
- Purple: `#9333ea` (Tailwind purple-600)
- Indigo: `#4f46e5` (Tailwind indigo-600)

**Neutral Colors**:

- Slate-900: `#0f172a` (Dark text)
- Slate-700: `#334155` (Body text)
- Slate-600: `#475569` (Muted text)
- Slate-50: `#f8fafc` (Background)
- White: `#ffffff`

**Accent Colors**:

- Green: `#10b981` (Success, SC Cleared badge)
- Pink: `#ec4899` (Project accents)
- Orange: `#f97316` (Service accents)

### Typography

**Fonts**: System font stack

```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
```

**Text Sizes**:

- Headings: 2xl → 7xl (responsive)
- Body: base → lg
- Small text: sm → xs

### Spacing System

Based on Tailwind's spacing scale (4px increments):

- Component padding: `p-6` to `p-12` (24px - 48px)
- Section margins: `mb-12` to `mb-20` (48px - 80px)
- Gap between items: `gap-4` to `gap-8` (16px - 32px)

### Animation & Transitions

**Custom Animations** (`src/index.css`):

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Usage**: Applied to hero section for entrance effect

**Hover Transitions**:

- Scale: `hover:scale-105` (5% enlargement)
- Shadow: `hover:shadow-xl` (increased elevation)
- Color: `transition-colors` (smooth color changes)
- All: `transition-all` (multiple property transitions)

### Responsive Design

**Breakpoints**:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Responsive Classes**:

- `md:` prefix for tablet and above
- `lg:` prefix for desktop

**Grid Layouts**:

- Mobile: Single column
- Tablet+: 2 columns (`md:grid-cols-2`)
- Desktop: Up to 4 columns (`md:grid-cols-4`)

---

## Routing Structure

### Routes Configuration

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/recruiters" element={<Recruiters />} />
  <Route path="/clients" element={<Clients />} />
</Routes>
```

### URL Structure

- Homepage: `/`
- Recruiters: `/recruiters`
- Clients: `/clients`

### Navigation Implementation

Uses React Router's `<Link>` component for client-side navigation (no page reloads)

---

## Deployment Guide

### Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add profile photo to `/public/profile.jpg`
- [ ] Add CV PDF to `/public/cv.pdf`
- [ ] Update contact information
- [ ] Test all links
- [ ] Verify responsive design
- [ ] Test CV download
- [ ] Check browser compatibility
- [ ] Run production build locally
- [ ] Optimize images

### Build Process

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Test production build
npm run preview
```

### Environment Variables

Currently no environment variables required. For future API integrations:

```bash
# Create .env file
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Access in code: `import.meta.env.VITE_API_URL`

### Deployment Platforms

**Recommended**: Vercel or Netlify (both offer free hosting for static sites)

**Vercel Deployment**:

1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on push

**Netlify Deployment**:

1. Drag & drop `dist` folder
2. Or connect GitHub for auto-deploy

---

## Maintenance

### Regular Updates

**Monthly**:

- Update project showcase
- Review and update experience section
- Check and fix broken links
- Update CV file

**Quarterly**:

- Update dependencies (`npm update`)
- Review and refresh content
- Optimize images
- Check performance metrics

**Annually**:

- Major dependency upgrades
- Design refresh if needed
- Content overhaul

### Content Management

**To Update Projects**:
Edit `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Detailed description...",
    tech: ["Tech1", "Tech2"],
    impact: "Impact statement",
    metrics: "Key metrics",
  },
];
```

**To Update Experience**:
Edit `src/pages/Recruiters.jsx` in the Professional Experience section

**To Update Skills**:
Edit `src/components/Skills.jsx`:

```javascript
const skillCategories = [
  {
    category: "Category Name",
    skills: ["Skill1", "Skill2", ...]
  }
];
```

---

## Troubleshooting

### Common Issues

**Issue**: Image not displaying

- **Solution**: Ensure image is in `/public` folder and named correctly
- Check browser console for 404 errors
- Verify image path: `/profile.jpg` (leading slash important)

**Issue**: Styles not applying

- **Solution**: Restart dev server after Tailwind config changes
- Clear browser cache
- Check for typos in Tailwind classes

**Issue**: Routing not working after deployment

- **Solution**: Configure server for SPA routing
- Netlify: Add `_redirects` file with `/* /index.html 200`
- Vercel: Add `vercel.json` with rewrites configuration

**Issue**: Build fails

- **Solution**: Check Node version (16+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for syntax errors

### Performance Optimization

**Image Optimization**:

- Compress images before upload
- Use WebP format for better compression
- Recommended tools: TinyPNG, Squoosh

**Bundle Size**:

- Current bundle: ~150KB gzipped
- Monitor with: `npm run build` (shows sizes)

**Lazy Loading**:
For future enhancements:

```javascript
const Clients = lazy(() => import("./pages/Clients"));
```

---

## Future Enhancements

### Planned Features

1. **Blog Section**

   - Technical articles
   - Project deep-dives
   - Industry insights

2. **Contact Form**

   - Direct messaging capability
   - Form validation
   - Email integration (EmailJS or FormSpree)

3. **Dark Mode**

   - Toggle for user preference
   - Persisted choice in localStorage

4. **Animations**

   - Enhanced scroll animations
   - Page transitions
   - Micro-interactions

5. **Analytics**

   - Google Analytics integration
   - Track user engagement
   - Monitor popular sections

6. **CMS Integration**
   - Sanity.io or Contentful
   - Easy content updates
   - Non-technical editing

### Technical Debt

- Add TypeScript for type safety
- Implement unit tests (Jest + React Testing Library)
- Add E2E tests (Playwright)
- Improve accessibility (ARIA labels, keyboard navigation)
- Add SEO metadata per page

---

## Conclusion

This portfolio website serves as a comprehensive professional showcase, built with modern technologies and best practices. The modular component structure ensures easy maintenance and updates, while the responsive design provides optimal viewing across all devices.

For questions or support, contact: franklyn.oliha@outlook.com or olihafosa@gmail.com

---

**Document End**
