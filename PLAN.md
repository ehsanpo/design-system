# Portfolio Site Plan - Astro Implementation

## Project Overview
Convert existing React-based design system to an Astro static site for a developer portfolio.

**Tech Stack:**
- Astro 4.x (Static Site Generator)
- Tailwind CSS (with existing design tokens)
- TypeScript
- Markdown/MDX for content

---

## 1. Site Architecture

### Site Map
```
/
├─ Home (/)                    - Landing page with hero, featured projects
├─ Work (/work)                - Project archive/grid
│  └─ [slug] (/work/[slug])   - Individual project pages
├─ About (/about)              - Bio, skills, experience
├─ Blog (/blog)                - Technical articles
│  └─ [slug] (/blog/[slug])   - Individual blog posts
└─ Contact (/contact)          - Contact form/info
```

### Page Purposes

**Home (/)** - The Router
- Hero section (name, role, value statement)
- Featured projects (2-4 cards)
- Tech stack snapshot
- CTA buttons (View Work, Contact)
- Total sections: ~4-5 (fits in 1-2 screens)

**Work (/work)** - Project Archive
- Filterable project grid
- Each card: thumbnail, title, tech stack, short description
- Links to detailed project pages
- Categories: Web Apps, Design Systems, Open Source

**Work/[slug]** - Project Detail
- Hero image/video
- Problem statement
- Solution & approach
- Tech stack & tools
- Results/outcomes
- Learnings
- Live demo + GitHub links
- Related projects

**About (/about)** - The Narrative
- Short bio (human, authentic)
- Skills mapped to design tokens
- Experience timeline
- Tech proficiency visualization
- Downloadable resume

**Blog (/blog)** - Credibility Builder
- Article grid/list
- Filter by tags/categories
- Reading time estimate
- Date published
- Categories: Design Systems, Astro, Frontend, TypeScript

**Blog/[slug]** - Article Page
- MDX support for interactive demos
- Code syntax highlighting
- Table of contents
- Share buttons
- Related articles

**Contact (/contact)** - Minimal Friction
- Email link
- Social links (GitHub, LinkedIn, Twitter)
- Simple contact form (optional)
- Current availability status

---

## 2. Folder Structure

```
example1/
├─ public/
│  ├─ fonts/                   # Basement, Kabel fonts
│  ├─ images/
│  │  ├─ projects/
│  │  ├─ blog/
│  │  └─ avatar.jpg
│  └─ favicon.svg
│
├─ src/
│  ├─ components/
│  │  ├─ layout/               # Layout components
│  │  │  ├─ BaseLayout.astro
│  │  │  ├─ Header.astro
│  │  │  ├─ Footer.astro
│  │  │  └─ Navigation.astro
│  │  │
│  │  ├─ ui/                   # Ported UI primitives
│  │  │  ├─ Button.astro
│  │  │  ├─ Card.astro
│  │  │  ├─ Badge.astro
│  │  │  ├─ Input.astro
│  │  │  ├─ Section.astro
│  │  │  ├─ SectionDivider.astro
│  │  │  ├─ ProjectCard.astro
│  │  │  ├─ BlogCard.astro
│  │  │  ├─ SkillCard.astro
│  │  │  └─ ThemeToggle.astro  # Client-side component
│  │  │
│  │  └─ sections/             # Page sections
│  │     ├─ Hero.astro
│  │     ├─ FeaturedProjects.astro
│  │     ├─ TechStack.astro
│  │     ├─ ProjectGrid.astro
│  │     ├─ AboutIntro.astro
│  │     ├─ Skills.astro
│  │     ├─ Experience.astro
│  │     └─ ContactForm.astro
│  │
│  ├─ layouts/
│  │  ├─ DefaultLayout.astro    # Base layout
│  │  ├─ PageLayout.astro       # Content pages
│  │  ├─ ProjectLayout.astro    # Project pages
│  │  └─ BlogLayout.astro       # Blog posts
│  │
│  ├─ pages/
│  │  ├─ index.astro            # Home
│  │  ├─ about.astro            # About
│  │  ├─ contact.astro          # Contact
│  │  ├─ work/
│  │  │  ├─ index.astro         # Projects grid
│  │  │  └─ [slug].astro        # Project detail
│  │  └─ blog/
│  │     ├─ index.astro         # Blog list
│  │     └─ [slug].astro        # Blog post
│  │
│  ├─ content/
│  │  ├─ config.ts              # Content collections config
│  │  ├─ work/                  # Project markdown files
│  │  │  ├─ project-1.md
│  │  │  ├─ project-2.md
│  │  │  └─ project-3.md
│  │  └─ blog/                  # Blog markdown files
│  │     ├─ astro-design-system.md
│  │     └─ building-with-tokens.md
│  │
│  ├─ styles/
│  │  ├─ tokens.css             # Design tokens as CSS vars
│  │  ├─ globals.css            # Global styles
│  │  ├─ animations.css         # Animations from design system
│  │  └─ themes.css             # Light/dark theme vars
│  │
│  ├─ tokens/
│  │  ├─ colors.ts              # Ported from existing
│  │  ├─ typography.ts          # Ported from existing
│  │  └─ spacing.ts             # Ported from existing
│  │
│  ├─ utils/
│  │  ├─ cn.ts                  # className utility
│  │  └─ date.ts                # Date formatting
│  │
│  └─ config/
│     └─ site.ts                # Site metadata
│
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ tsconfig.json
└─ package.json
```

---

## 3. Design System Port Strategy

### Components to Port (Priority Order)

**Phase 1 - Core UI (Critical)**
1. ✅ Button.astro - Core interaction
2. ✅ Card.astro - Content container
3. ✅ Badge.astro - Labels/tags
4. ✅ Section.astro - Page sections
5. ✅ SectionDivider.astro - Visual breaks

**Phase 2 - Layout (Essential)**
6. ✅ Header.astro - Navigation
7. ✅ Footer.astro - Site footer
8. ✅ BaseLayout.astro - HTML shell

**Phase 3 - Content Cards (Important)**
9. ✅ ProjectCard.astro - Work display
10. ✅ BlogCard.astro - Blog display
11. ✅ SkillCard.astro - About page

**Phase 4 - Interactive (Client-side)**
12. ✅ ThemeToggle.astro - Dark mode (client:load)
13. ✅ ContactForm.astro - Form handling (client:load)

**Phase 5 - Advanced (Nice to have)**
14. ⏭ TechStackVisualizer - Skills visualization
15. ⏭ ImageGallery - Project images
16. ⏭ Progress - Loading states
17. ⏭ Pagination - Blog navigation

### React → Astro Conversion Rules

**Static Components (Most components)**
```tsx
// React
export function Button({ variant, children }) {
  return <button className={...}>{children}</button>
}

// Astro
---
interface Props {
  variant?: string;
}
const { variant } = Astro.props;
---
<button class={...}><slot /></button>
```

**Interactive Components (Client-side needed)**
```astro
---
// Component with client: directive
---
<div client:load>
  <script>
    // Client-side JS here
  </script>
</div>
```

---

## 4. Content Strategy

### Project Content Schema
```typescript
// src/content/config.ts
const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    featured: z.boolean().default(false),
    heroImage: z.string(),
    tags: z.array(z.string()),
    techStack: z.array(z.string()),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    category: z.enum(['web-app', 'design-system', 'open-source']),
  })
});
```

### Blog Content Schema
```typescript
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Ehsan'),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    draft: z.boolean().default(false),
  })
});
```

### Sample Content Files Needed
- 3-5 project files (work/*.md)
- 2-3 blog posts (blog/*.md)
- All with frontmatter following schema

---

## 5. Styling Approach

### CSS Architecture
```
globals.css           → Base resets, fonts
tokens.css           → CSS custom properties from design tokens
themes.css           → Light/dark mode variables
animations.css       → Design system animations

Tailwind classes     → Utility-first for layout/spacing
Component styles     → Scoped <style> blocks when needed
```

### Design Tokens → CSS Variables
```css
/* tokens.css */
:root {
  /* Colors from colors.ts */
  --primary-50: #fef2f4;
  --primary-500: #ef446a;
  --primary-900: #8a1e45;
  
  /* Spacing from spacing.ts */
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  
  /* Typography from typography.ts */
  --font-basement: 'Basement', sans-serif;
  --font-kabel: 'Kabel', sans-serif;
}
```

### Theme Variables
```css
/* themes.css */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 5%;
  --card-foreground: 0 0% 98%;
}
```

---

## 6. Astro Configuration

### Key Integrations
```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [
    tailwind(),           // Tailwind CSS
    mdx(),                // MDX support for blog
    sitemap(),            // SEO sitemap
  ],
  site: 'https://yoursite.com',
  output: 'static',       // Static site generation
});
```

### Tailwind Config
- Import existing design tokens
- Extend with custom utilities
- Configure dark mode: 'class'
- Content paths for Astro files

---

## 7. Performance Optimizations

**Image Optimization**
- Use Astro's `<Image />` component
- Lazy loading for below-fold images
- WebP format with fallbacks

**CSS Optimization**
- Critical CSS inlined
- Unused Tailwind purged
- Component styles scoped

**JavaScript**
- Minimal client-side JS
- Only load interactive components with `client:` directives
- Use `client:visible` for below-fold interactive elements

**Font Loading**
- Preload Basement & Kabel fonts
- font-display: swap
- Self-hosted fonts (already in public/fonts)

---

## 8. Development Phases

### Phase 1: Foundation (Setup & Core)
- [x] Create folder structure
- [x] Set up Astro project
- [x] Configure Tailwind with design tokens
- [x] Port CSS tokens and themes
- [x] Create base layouts
- [x] Port Button, Card, Badge components

### Phase 2: Pages (Content Structure)
- [ ] Build Home page (Hero + Featured)
- [ ] Build Work index page
- [ ] Build Work detail template
- [ ] Build About page
- [ ] Build Contact page

### Phase 3: Content (Collections)
- [ ] Configure content collections
- [ ] Create project markdown files
- [ ] Create blog markdown files
- [ ] Implement dynamic routing

### Phase 4: Blog (Optional but Recommended)
- [ ] Build Blog index page
- [ ] Build Blog post template
- [ ] Add MDX support
- [ ] Syntax highlighting
- [ ] Table of contents

### Phase 5: Polish (UX & Performance)
- [ ] Dark mode toggle
- [ ] Animations & transitions
- [ ] SEO meta tags
- [ ] Open Graph images
- [ ] Sitemap & RSS
- [ ] Performance audit

### Phase 6: Deployment
- [ ] Build optimization
- [ ] Deploy to Netlify/Vercel
- [ ] Set up custom domain
- [ ] Analytics (optional)

---

## 9. Key Differences: React vs Astro

| Feature | React (Current) | Astro (Target) |
|---------|----------------|----------------|
| Rendering | Client-side | Static HTML + islands |
| Components | `.tsx` files | `.astro` files |
| Props | `interface Props` | `interface Props` in frontmatter |
| Children | `{children}` | `<slot />` |
| State | `useState` | Minimal, use `client:load` |
| Events | `onClick={}` | `onclick=""` or client component |
| Styling | className | class (or className with React islands) |
| Data | API calls | Content collections |

---

## 10. Success Metrics

**Performance**
- Lighthouse score: 95+ (all categories)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size: < 100kb

**SEO**
- Valid meta tags on all pages
- Sitemap.xml generated
- robots.txt configured
- Semantic HTML

**Accessibility**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- Color contrast ratios

**Content**
- Minimum 3 projects
- Minimum 2 blog posts
- All pages have unique meta

---

## 11. Post-Launch

**Phase 1 (Month 1)**
- Add more blog posts
- Refine project case studies
- Collect feedback

**Phase 2 (Month 2-3)**
- Add advanced components (TechStackVisualizer, etc.)
- Implement search functionality
- Add newsletter signup (optional)

**Phase 3 (Ongoing)**
- Regular blog updates
- Project portfolio updates
- Performance monitoring

---

## Notes & Decisions

**Why Astro?**
- Zero JS by default = faster load times
- Keep design system components (minimal conversion)
- Better SEO with static HTML
- Islands architecture for selective interactivity
- Built-in Markdown/MDX support

**What Gets Client-Side JS?**
- Theme toggle (persist preference)
- Contact form (validation, submission)
- Image gallery modals (if needed)
- Code playground demos (in blog posts)

**What Stays Static?**
- Navigation
- Footer
- All content cards
- Hero sections
- Project grids
- Blog listings

---

## Dependencies to Install

```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/mdx": "^2.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "tailwindcss": "^3.4.0",
    "clsx": "^2.0.0",
    "lucide-astro": "^0.294.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

---

## File Naming Conventions

- Components: PascalCase (Button.astro, Card.astro)
- Pages: lowercase (index.astro, about.astro)
- Content: kebab-case (my-first-project.md, design-systems.md)
- Layouts: PascalCase (BaseLayout.astro, BlogLayout.astro)
- Utils: camelCase (cn.ts, date.ts)

---

**Total Estimated Time:** 2-3 days for MVP (core pages + 3 projects)

**Priority Focus:** Home → Work → About → (Blog optional for v1)
