# Ben Weinstein - Portfolio

> [weinstein.vercel.app](https://weinstein.vercel.app)

My personal portfolio built with modern web tech. Mathematics student at University of Waterloo interested in systems programming and data science.

## What's Here

An interactive portfolio site with animated background particles, project showcases with expandable images, tech skill grid, and a working contact form. Designed to be fast and look good on any device.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Canvas API** - Particle animation background
- **Formspree** - Contact form backend

## How It Works

The site uses a few interesting pieces:

**Animated Background**: Custom canvas with 80 particles that move around and connect to nearby particles. Physics-based movement with collision detection.

**Project Showcase**: Click any project image to expand it fullscreen-style. Supports both static images and GIFs.

**Tech Skills**: Icons automatically mapped from `/icons/` folder with hover effects and responsive grid.

**Contact Form**: Async form submission with loading states and proper error handling via Formspree.

## Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── AnimatedBackground.tsx
    ├── ContactForm.tsx
    ├── InteractiveSkills.tsx
    ├── LocalBadge.tsx
    ├── Navbar.tsx
    ├── ProfilePicture.tsx
    └── ProjectShowcase.tsx
```

Assets are organized in `/icons/` for tech skills and `/demo/` for project images.

## Running Locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000)

---

Built with Next.js and deployed on Vercel