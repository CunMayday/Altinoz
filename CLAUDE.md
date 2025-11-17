# Claude Code Context for Dr. Cuneyt Altinoz Portfolio

## Project Overview
This is a portfolio website for Dr. Cuneyt Altinoz, Professor at Purdue University Global. The site showcases his academic credentials, teaching experience, awards, and professional background.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI (shadcn/ui pattern)
- **Icons**: Lucide React
- **Routing**: Wouter
- **Backend**: Express + Node.js (for full-stack capabilities, though mainly static frontend)

## Project Structure
```
Altinoz/
├── client/
│   ├── src/
│   │   ├── components/        # Main page sections
│   │   │   ├── Hero.tsx       # Hero section with stats
│   │   │   ├── Awards.tsx     # Awards & Recognition
│   │   │   ├── CurrentFocus.tsx  # AI education projects
│   │   │   ├── Education.tsx  # Academic degrees
│   │   │   ├── Experience.tsx # Professional experience
│   │   │   ├── Contact.tsx    # Contact section
│   │   │   └── Navigation.tsx # Site navigation
│   │   ├── pages/
│   │   │   └── Home.tsx       # Main page composing all sections
│   │   └── components/ui/     # Reusable UI components (shadcn)
│   └── index.html
├── server/                    # Express backend
├── content.md                 # Complete content reference guide
├── CLAUDE.md                  # This file - context for AI assistance
└── package.json

```

## Design Style: Neobrutalism

The website uses a **neobrutalist** design aesthetic with these characteristics:

### Visual Elements
- **Bold black borders** (4px, 6px, 8px) on all cards and components
- **Thick shadows** (`shadow-brutal`, `shadow-brutal-lg`, `shadow-brutal-xl`)
- **Rotated elements** (-3°, -2°, -1°, 1°, 2°, 3°) for dynamic feel
- **Flat, vibrant colors** with no gradients
- **Sharp corners** (rounded-none or minimal rounding)
- **Geometric shapes** as decorative floating elements

### Typography
- **Display font**: Montserrat (bold, uppercase for headings)
- **Body font**: Space Grotesk
- **Monospace**: Space Mono
- All headings are UPPERCASE and bold/black weight

### Color Palette (Purdue University Brand)

#### Primary Colors
- **Campus Gold**: `#C28E0E` (bg-primary) - Main accent color for highlights
- **Athletic Gold**: `#CEB888` (bg-secondary) - Softer gold for secondary elements
- **Purdue Black**: `#000000` - Primary text and borders
- **Gray**: `#9D968D` (bg-muted) - Supporting elements
- **Dark Gray**: `#373A36` - Secondary text
- **White**: `#FFFFFF` - Clean backgrounds

#### Color Usage in Tailwind Classes
```css
bg-primary      /* Campus Gold #C28E0E */
bg-secondary    /* Athletic Gold #CEB888 */
bg-chart-3      /* Additional accent colors */
bg-muted        /* Gray #9D968D */
border-black    /* Always black borders */
```

### Animation Patterns
- **Entrance animations**: Fade in + slide (x or y axis)
- **Floating shapes**: Gentle up/down movement (y: [0, -20, 0])
- **Hover effects**:
  - Reset rotation to 0
  - Slight scale increase (1.02-1.03)
  - Enhanced shadow on hover
  - Translate up slightly

### Common Component Patterns

#### Card Structure
```tsx
<motion.div
  className="bg-white border-8 border-black p-8 shadow-brutal-lg rotate-1"
  whileHover={{ rotate: 0, scale: 1.02 }}
>
  {/* Content */}
</motion.div>
```

#### Badge/Pill Components
```tsx
<div className="bg-primary border-4 border-black px-6 py-2 shadow-brutal">
  {/* Content */}
</div>
```

## Key Content Sections

### 1. Hero Section
- Large name display: "CUNEYT ALTINOZ"
- Title badge: "Professor at Purdue University Global"
- Quick stats box:
  - 16+ Years at Purdue Global
  - 22 Years Teaching Experience
  - 4 Major Awards
- Two CTA buttons: "Get in Touch" and "Learn More"
- Floating geometric shapes in background

### 2. Awards & Recognition
- 4 award cards (2025, 2023, 2021, 2016)
- Leadership roles section
- Award icons with year badges

### 3. Current Focus
- AI Systems for Education focus
- 3 project cards with external links
- Interactive tools for DBA students

### 4. Education
- 3 degree cards (PhD, MBA, BS)
- Large year numbers showing **end year** (2001, 1996, 1994)
- Alternating left/right alignment
- Color-coded by degree level

### 5. Experience
- 6 position cards in chronological order:
  1. Professor - Purdue University Global (2009-Present)
  2. Assistant Professor - East Carolina University (2003-2008)
  3. Post-doctoral Research Fellow - NC State (2001-2003)
  4. Research Assistant - NC State (1997-2001)
  5. Consultant - CIBA Vision (1995-1997)
  6. Operations Analyst - IBM (1995)
- Each card has header with organization color and bullet highlights

### 6. Contact
- Email: caltinoz@purdueglobal.edu
- Tag cloud of expertise areas
- Social media links (placeholder)

## Important Implementation Details

### Framer Motion Patterns
```tsx
// Standard entrance animation
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Staggered delays for lists
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### Responsive Design
- Mobile-first approach
- Grid layouts collapse on mobile (grid → stack)
- Hamburger menu for mobile navigation
- Font sizes scale with md: and lg: breakpoints

### Custom Tailwind Classes
The project uses custom shadow utilities defined in tailwind.config:
- `shadow-brutal`: 4px 4px 0px 0px rgba(0,0,0,1)
- `shadow-brutal-lg`: 8px 8px 0px 0px rgba(0,0,0,1)
- `shadow-brutal-xl`: 12px 12px 0px 0px rgba(0,0,0,1)

## Content Management

All content is maintained in two places:
1. **content.md** - Comprehensive content guide (source of truth)
2. **Component files** - Implementation of content with styling

When making content changes:
1. Update the relevant component file (e.g., Experience.tsx)
2. Update content.md to reflect the change
3. Keep both in sync

## Development Workflow

### Running Locally
```bash
# Start Vite dev server (frontend only)
npx vite

# Runs on http://localhost:5173/Altinoz/
```

### Building for Production
```bash
npm run build
```

### Deployment
- Deployed to GitHub Pages
- Base path: `/Altinoz/`
- GitHub Actions workflow handles automated deployment

## Style Guidelines for AI Assistance

When making changes to this project:

1. **Maintain neobrutalist aesthetic**:
   - Always use thick black borders (border-4, border-6, border-8)
   - Include shadow-brutal variants
   - Apply subtle rotations (-3° to 3°)
   - Keep corners sharp (rounded-none)

2. **Follow Purdue color scheme**:
   - Use only the defined color palette
   - Campus Gold (#C28E0E) for primary accents
   - Athletic Gold (#CEB888) for secondary
   - Black borders always

3. **Animation consistency**:
   - Use Framer Motion for all animations
   - Stagger list items with delay
   - Hover states should reduce/remove rotation
   - viewport={{ once: true }} to prevent re-triggering

4. **Typography**:
   - Headings: UPPERCASE, font-black
   - Use font-bold for important text
   - Maintain hierarchy with text size classes

5. **Component structure**:
   - Each section is its own component
   - Use motion.div from framer-motion
   - Apply data-testid for testing
   - Semantic HTML (section, h2, h3, etc.)

6. **Content updates**:
   - Always update both component AND content.md
   - Verify years and dates are consistent
   - Check that highlights/bullets are accurate

## Recent Changes Log

### 2025-11-16
- Updated hero stats: "Years at Purdue" → "Years at Purdue Global"
- Changed "3 Advanced Degrees" → "22 Years Teaching Experience"
- Changed "5+ Major Awards" → "4 Major Awards"
- Education section: Display end years instead of start years
- Experience - Professor position: Removed 4 award bullets and faculty advisor bullet
- Experience - Professor position: Added course lead bullet for GB 513, GB 700, GB 701
- Experience - Post-doc position: Added patent filing bullet
- Experience: Added new Assistant Professor position at ECU (2003-2008)
- Content.md: Updated Leadership role description

## File Reference Quick Links

### Main Components
- Hero with stats: `client/src/components/Hero.tsx`
- Awards section: `client/src/components/Awards.tsx`
- Education cards: `client/src/components/Education.tsx`
- Experience cards: `client/src/components/Experience.tsx`
- Contact section: `client/src/components/Contact.tsx`
- Current Focus: `client/src/components/CurrentFocus.tsx`
- Navigation: `client/src/components/Navigation.tsx`

### Configuration
- Content guide: `content.md`
- Package config: `package.json`
- Tailwind config: `tailwind.config.ts`
- Vite config: `vite.config.ts`

## Tips for Future Development

1. **Adding new experience positions**: Update `experiences` array in Experience.tsx, maintain chronological order (newest first)

2. **Changing colors**: All color references use Purdue brand colors, update them globally in tailwind config if needed

3. **New sections**: Follow existing pattern - create component in `components/`, import in `Home.tsx`, add ID for navigation

4. **Testing locally**: Use `npx vite` for quick frontend preview (backend not needed for portfolio content)

5. **Content-only changes**: Edit the data arrays at top of component files (don't modify JSX/styling)

---

*This file helps Claude Code understand the project context, design system, and coding patterns for consistent assistance.*
