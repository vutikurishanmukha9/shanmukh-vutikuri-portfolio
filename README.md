# Shanmukha Vutikuri - Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and professional experience in AI/ML, Cloud Computing, and Data Analytics.

## Live Demo

**[View Portfolio](https://shanmukhworld.netlify.app/)**

## Preview

![Portfolio Preview](./Portfolio.png)

## Features

- **Light/Dark Theme** - Toggle between elegant dark and clean light themes
- **Premium UI Design** - Glassmorphism cards with gradient accents
- **Custom Cursor** - Interactive cursor with glow effect and hover states
- **Animated Particles** - Floating particle background in hero section
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **Career Timeline** - Animated journey showcase with current status indicators
- **Working Contact Form** - Netlify Forms integration for real email submissions
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **GitHub Activity** - Live contribution calendar with tooltips
- **Skills-to-Projects Filter** - Click skills to filter related projects
- **Page Loading Animation** - Elegant loading spinner on page load

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated intro with rotating titles and social links |
| **About** | Professional summary with animated statistics |
| **Building Activity** | GitHub contribution calendar with purple theme |
| **Skills** | Interactive skills with project filtering |
| **Career Journey** | Timeline of internship experiences with animations |
| **Projects** | 10+ projects with filtering and expand/collapse |
| **Certifications** | AWS, Oracle, and IBM certifications (clickable PDFs) |
| **Publications** | IEEE research publication with key metrics |
| **Contact** | Working contact form with Netlify Forms |

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS + Custom CSS
- **UI Components:** shadcn/ui (minimal)
- **Icons:** Lucide React
- **GitHub Calendar:** react-github-calendar
- **Tooltips:** react-tooltip
- **Forms:** Netlify Forms
- **Hosting:** Netlify

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
│   ├── ui/                       # Minimal shadcn/ui components
│   ├── AboutSection.tsx
│   ├── CareerJourneySection.tsx
│   ├── CertificationsSection.tsx
│   ├── ContactForm.tsx
│   ├── ContactSection.tsx
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── GrindingActivitySection.tsx  # GitHub contribution calendar
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── PageLoader.tsx            # Loading animation
│   ├── ParticlesBackground.tsx
│   ├── ProjectsSection.tsx
│   ├── PublicationsSection.tsx
│   ├── SkillsSection.tsx
│   └── ThemeToggle.tsx
├── context/
│   ├── ThemeContext.tsx          # Theme state management
│   └── SkillFilterContext.tsx    # Skills-to-projects filter
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── pages/
│   ├── Index.tsx                 # Main portfolio page
│   └── NotFound.tsx              # 404 page
├── App.tsx                       # App entry with routing
├── index.css                     # Global styles & design system
└── main.tsx                      # React entry point
```

## Customization

### Theme Colors
Edit the CSS variables in `src/index.css`:
```css
/* Dark Theme */
:root, .dark {
  --primary: 187 100% 42%;
  --background: 240 10% 4%;
}

/* Light Theme */
.light {
  --primary: 187 100% 35%;
  --background: 0 0% 100%;
}
```

### Content
- **Projects:** `src/components/ProjectsSection.tsx`
- **Skills:** `src/components/SkillsSection.tsx`
- **Career:** `src/components/CareerJourneySection.tsx`
- **Certifications:** `src/components/CertificationsSection.tsx`
- **GitHub Activity:** `src/components/GrindingActivitySection.tsx`

## Author

**Vutikuri Shanmukha**
- GitHub: [@vutikurishanmukha9](https://github.com/vutikurishanmukha9)
- LinkedIn: [shanmukha-vutikuri](https://linkedin.com/in/shanmukha-vutikuri)
- Email: vutikurishanmukh17@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).
