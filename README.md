# Smart Site - Portfolio Website

A modern, responsive Portfolio website built with Next.js 13.4.12, React 18.2.0, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern UI with smooth animations
- 📱 Fully responsive design (mobile-first)
- 🖼️ Optimized images using Next.js Image component
- ⚡ Fast performance with SSR
- 🎯 Auto-rotating hero slider
- 🍕 Interactive menu page
- ⭐ Customer reviews section
- 📖 Story section with engaging content

## Tech Stack

- **Framework**: Next.js 13.4.12
- **React**: 18.2.0
- **Styling**: Tailwind CSS 3.2.0
- **Icons**: Lucide React
- **Node.js**: >=14.x

## Getting Started

### Prerequisites

- Node.js >=14.x
- npm (not yarn)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/
├── components/          # Reusable UI components
│   ├── Logo.js
│   ├── Navigation.js
│   ├── HeroSlider.js
│   ├── StorySection.js
│   ├── ReviewSection.js
│   ├── Footer.js
│   └── MenuCard.js
├── pages/              # Next.js pages
│   ├── _app.js
│   ├── index.js
│   └── menu.js
├── styles/            # Global styles
│   └── globals.css
├── public/            # Static assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Components

### HeroSlider
Full-screen image slider with auto-rotation, gradient overlays, and CTA buttons.

### StorySection
Two-column layout showcasing Portfolio history with engaging visuals.

### ReviewSection
Customer testimonials in a responsive grid layout with hover animations.

### Menu
Interactive menu page with pizza listings, images, and order buttons.

### Navigation
Sticky navigation with mobile menu, smooth scrolling, and scroll-triggered background changes.

### Footer
Contact information, social links, and quick navigation.

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- `accent-red`: #CD291E
- `accent-yellow`: #FDB912
- `light-white`: #FFF9EE
- `custom-grey`: #231F20
- `dark-green`: #316131

### Fonts

The logo uses "Lilita One" from Google Fonts. Add additional fonts in `pages/index.js` and reference them in components.

## Building for Production

```bash
npm run build
npm start
```

## License

© 2024 Smart Site. All rights reserved.

