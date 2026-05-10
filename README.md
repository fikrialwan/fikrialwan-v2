# Fikri Alwan Ramadhan — Portfolio

Personal portfolio website built with React Router v7, Tailwind CSS v4, and Cloudflare.

## Design

Neubrutalism aesthetic with:
- Thick 3px black borders
- 8px offset box shadows
- Pink accent (#FF2D55)
- Cream background (#FFEBE6)
- Space Grotesk typography

## Tech Stack

- **Framework**: React Router v7 (Cloudflare)
- **Styling**: Tailwind CSS v4
- **Font**: Space Grotesk (Google Fonts)
- **Deployment**: Cloudflare Workers

## Sections

1. **Hero** — Name, title, bio, contact links, portrait
2. **Experience** — Timeline with 4 work experiences
3. **Projects** — 4 community/project cards (GDG Bandung, BandungDev, DevFest, IOX)
4. **Technologies** — Tech stack grid (Languages, State, Backend, Tools)
5. **Get In Touch** — CTA with email/LinkedIn/GitHub
6. **Footer** — Copyright, education, social links

## Project Structure

```
app/
├── app.css              # Tailwind + CSS variables
├── root.tsx             # Root layout + fonts
├── routes/
│   └── home.tsx         # Home page
└── components/
    ├── ui/
    │   ├── Button.tsx   # Button component
    │   └── Tag.tsx      # Tag/pill component
    └── sections/
        ├── HeroSection.tsx
        ├── ExperienceSection.tsx
        ├── ProjectsSection.tsx
        ├── TechnologiesSection.tsx
        ├── GetInTouchSection.tsx
        └── Footer.tsx
```

## Color Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | #FF2D55 | Pink accent |
| `--color-cream` | #FFEBE6 | Hero bg |
| `--color-dark` | #1B1B1B | Text |
| `--color-muted` | #4C4546 | Secondary text |
| `--color-gray` | #EEEEEE | Section headers |
| `--color-bg-light` | #F9F9F9 | Cards bg |
| `--color-bg-dark` | #F4F4F4 | Alternate bg |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Deploy to Cloudflare
pnpm deploy
```

## Portfolio Content

- **Name**: Fikri Alwan Ramadhan
- **Title**: Frontend Engineer
- **Location**: Jakarta, Indonesia
- **Email**: fikrial93@gmail.com
- **Phone**: 089516269950

### Experience
- **Advance Intelligence Group** — Frontend Engineer (Dec 2025–Present)
- **PT. Shell Infotech** — Frontend Developer (Nov 2022–Nov 2025)
- **PT. Netta Code Indonesia** — Mobile Developer (Sept 2021–Oct 2022)
- **Bersihberes** — Mobile Developer (June 2020–Jan 2021)

### Education
S.Kom. Computer Software Engineering, Tanjungpura University (2016–2022)