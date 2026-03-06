# Nishant Nirmal - Portfolio

Production-grade personal portfolio website showcasing AI & Data Science engineering expertise, built with modern web technologies and best practices.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📋 Features

- ✅ Fully responsive design
- ✅ Dark theme with cyan accent
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Accessibility compliant (ARIA)
- ✅ Production-ready architecture
- ✅ Type-safe with TypeScript
- ✅ Modular component structure

## 🛠️ Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/NishantNirmalSingh/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Overview.tsx     # Key highlights section
│   ├── Hero.tsx         # Hero section with CTA
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills categorization
│   ├── Experience.tsx   # Experience timeline
│   └── Contact.tsx      # Contact form and links
├── public/              # Static assets
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind configuration
└── next.config.js       # Next.js configuration
```

## 🎨 Customization

### Resume

✅ **Resume is already included!** The `public/resume.pdf` file contains Nishant's actual resume and will be automatically downloadable when users click "Download Resume" button.

To replace with your own resume:
1. Replace `public/resume.pdf` with your resume file
2. Keep the filename as `resume.pdf` (or update the link in `components/Hero.tsx`)

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#06b6d4',  // Cyan accent
  dark: {
    900: '#0a0a0a',
    800: '#121212',
    700: '#1a1a1a',
    600: '#2a2a2a',
  },
}
```

### Content

Update personal information in the respective component files:
- Personal details: `components/Hero.tsx`, `components/About.tsx`
- Projects: `components/Projects.tsx`
- Skills: `components/Skills.tsx`
- Experience: `components/Experience.tsx`
- Contact info: `components/Contact.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com)

3. Import your repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Environment Variables

No environment variables required for the base version.

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images (when added)

## 🔧 Development

### Code Quality

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier (recommended for formatting)

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Open an issue or submit a pull request.

## 📧 Contact

- **Email:** nishant4245@gmail.com
- **GitHub:** [@NishantNirmalSingh](https://github.com/NishantNirmalSingh)
- **LinkedIn:** [nishant-nirmal](https://linkedin.com/in/nishant-nirmal)

---

Built with ❤️ by Nishant Nirmal
