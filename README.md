# VitaAI - Your Daily Wellness Companion

VitaAI is a modern, responsive wellness application landing page built with Next.js 16, React 19, and Tailwind CSS 4. The application provides users with a calm, easy-to-understand guide to their health and wellness journey.

## 🌟 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern Typography**: Custom font integration including Tabular, DM Sans, Charm, Noto Serif Georgian, and Satoshi
- **Interactive Components**: 
  - Expandable hamburger navigation menu with smooth transitions
  - Auto-rotating testimonials carousel
  - Cycling wellness feature images with smooth fade transitions
  - Accordion-style FAQ section
- **Performance Optimized**: Built with Next.js Image optimization and modern web practices
- **Type-Safe**: Full TypeScript implementation

## 🚀 Tech Stack

- **Framework**: [Next.js 16.0.10](https://nextjs.org/)
- **React**: Version 19.2.1
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript 5
- **Font Loading**: next/font for optimized font loading

## 📁 Project Structure

```
vita-ai/
├── app/
│   ├── components/
│   │   └── Navbar.tsx          # Navigation with expandable menu
│   ├── sections/
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── Wellness.tsx        # Feature showcase with cycling images
│   │   ├── Section2.tsx        # Secondary content section
│   │   ├── HowItWorks.tsx      # Three-step process explanation
│   │   ├── Testimonials.tsx    # Auto-rotating testimonials
│   │   ├── FAQ.tsx             # Accordion FAQ section
│   │   ├── CTA.tsx             # Call-to-action section
│   │   └── Footer.tsx          # Site footer
│   ├── layout.tsx              # Root layout with font configuration
│   ├── page.tsx                # Main page component
│   └── globals.css             # Global styles and Tailwind theme
├── public/
│   ├── fonts/                  # Custom font files
│   └── images/                 # Image assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.mjs

```

## 🎨 Design Features

### Typography
- **Tabular**: Variable font for logo and branding
- **DM Sans**: Google Font for body text
- **Charm**: Bold and Regular for decorative headings
- **Noto Serif Georgian**: Bold and Regular for main headings
- **Satoshi**: Variable font for testimonials and content

### Interactive Elements
1. **Navbar**: Hover-triggered expandable menu with 700ms smooth transitions
2. **Wellness Section**: Automatic image cycling every 800ms with 300ms fade transitions
3. **Testimonials**: Auto-rotating testimonials every 2 seconds
4. **FAQ**: Accordion-style questions with expand/collapse functionality
5. **Navigation**: Smooth scroll to sections (#features, #how-it-works, #faq)

### Responsive Breakpoints
- **Mobile**: < 768px (base styles)
- **Tablet**: ≥ 768px (md: prefix)
- **Desktop**: ≥ 1024px (lg: prefix)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vita-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Sections

### 1. Hero Section
- Main landing area with hero image
- Dual-font heading with "Understand your health, without the overwhelm"
- Call-to-action buttons with hover effects

### 2. Wellness Features
- Showcases three wellness categories with cycling images:
  - Health Tracking (4 images)
  - Personalized Insights (3 images)
  - Smart Recommendations (3 images)
- Smooth fade transitions between images

### 3. How It Works
- Three-column staggered layout on desktop
- Steps: Ask Naturally → Get Clear Guidance → Live Your Life
- Responsive to single column on mobile

### 4. Testimonials
- Auto-rotating customer testimonials
- Profile images with quotes
- 2-second rotation interval

### 5. FAQ Section
- Accordion-style questions
- First question open by default
- Plus/minus toggle icons

### 6. CTA & Footer
- Background image with overlay content
- Multi-column footer with links
- Copyright and social information

## 🎨 Customization

### Colors
Primary colors are defined in `globals.css` using Tailwind's theme configuration:
- Primary Green: `#2D7967`
- Dark Text: `#0E241FFF`
- Light Background: `#F8F9FA`
- Gray Text: `#495057`, `#919191`

### Fonts
Fonts are configured in `app/layout.tsx` and can be modified by updating the font imports and CSS variables.

## 📱 Mobile Responsiveness

All sections are fully responsive with:
- Flexible layouts (flexbox/grid)
- Responsive typography scaling
- Touch-friendly interactive elements
- Optimized image loading for different screen sizes

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- Client components marked with `'use client'` directive
- CSS classes using Tailwind utility-first approach
- Semantic HTML structure

## 📄 License

Private project - All rights reserved

## 🤝 Contributing

This is a private project. For any questions or contributions, please contact the project owner.

---

Built with ❤️ using Next.js and Tailwind CSS
