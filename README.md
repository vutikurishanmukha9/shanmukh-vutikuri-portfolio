# Shanmukha Vutikuri - Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and professional experience in AI/ML, Cloud Computing, and Data Analytics.

## Live Demo

[View Portfolio](https://shanmukha-vutikuri.netlify.app) *(Add your deployed URL)*

## Preview

![Portfolio Preview](./preview.png) *(Add a screenshot)*

## Features

- **Premium Dark Theme** - Elegant dark design with cyan/purple gradient accents
- **Glassmorphism UI** - Modern frosted glass effect cards and containers
- **Custom Cursor** - Interactive cursor with glow effect and hover states
- **Animated Particles** - Floating particle background in hero section
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated intro with rotating titles and social links |
| **About** | Professional summary with animated statistics |
| **Skills** | Categorized technical skills with clean tag layout |
| **Projects** | 10 featured projects with filtering and expand/collapse |
| **Certifications** | AWS, Oracle, and IBM professional certifications |
| **Publications** | IEEE research publication with key metrics |
| **Contact** | Contact form with email and social links |

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS + Custom CSS
- **UI Components:** shadcn/ui (minimal)
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **State Management:** TanStack Query

## Quick Start

```bash
# Clone the repository
git clone https://github.com/vutikurishanmukha9/shanmukh-vutikuri-portfolio.git

# Navigate to directory
cd shanmukh-vutikuri-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Minimal shadcn/ui components
│   ├── AboutSection.tsx
│   ├── CertificationsSection.tsx
│   ├── ContactForm.tsx
│   ├── ContactSection.tsx
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── ParticlesBackground.tsx
│   ├── ProjectsSection.tsx
│   ├── PublicationsSection.tsx
│   └── SkillsSection.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # App entry with routing
├── index.css            # Global styles & design system
└── main.tsx             # React entry point
```

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: 187 100% 42%;    /* Cyan */
  --secondary: 262 83% 58%;   /* Purple */
  --background: 240 10% 4%;   /* Dark */
}
```

### Content
Update your information in the component files:
- **Projects:** `src/components/ProjectsSection.tsx`
- **Skills:** `src/components/SkillsSection.tsx`
- **Certifications:** `src/components/CertificationsSection.tsx`
- **Contact Info:** `src/components/ContactSection.tsx` & `Footer.tsx`

## Deployment

Build the production bundle:
```bash
npm run build
```

Deploy the `dist` folder to:
- **Netlify** - Drag & drop or connect GitHub
- **Vercel** - Import from GitHub
- **GitHub Pages** - Use gh-pages package

## Author

**Vutikuri Shanmukha**
- GitHub: [@vutikurishanmukha9](https://github.com/vutikurishanmukha9)
- LinkedIn: [shanmukha-vutikuri](https://linkedin.com/in/shanmukha-vutikuri)
- Email: vutikurishanmukh17@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).
