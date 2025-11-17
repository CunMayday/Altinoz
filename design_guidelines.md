# Neobrutalist Portfolio Design Guidelines for Professor Cuneyt Altinoz

## Design Approach
**Neobrutalism with Maximum Creative Expression** - Drawing inspiration from brutalist web design pioneers like Gumroad's early designs, combined with modern web brutalism (thick borders, bold shadows, asymmetric grids, raw aesthetics). Push boundaries with unexpected layouts, jarring color combinations, and aggressive typography.

## Color Strategy (User-Specified Neobrutalist Palette)
Given the explicit neobrutalist requirement, use vibrant, clashing color combinations:
- Primary accent: Electric cyan/lime green for headers and CTAs
- Secondary: Hot pink/bright orange for cards and highlights  
- Tertiary: Vibrant yellow for accents and borders
- Background: Stark white with black borders
- Text: Pure black (#000000) for maximum contrast
- Shadows: Solid black drop shadows (offset 6-8px)

## Typography Hierarchy
- **Display**: Ultra-bold sans-serif (e.g., "Space Grotesk" weight 700-900) for hero and section headers - massive sizes (text-6xl to text-8xl on desktop)
- **Headers**: Bold sans-serif (weight 700) for subsections and card titles
- **Body**: Medium-weight sans-serif (weight 500-600) for readability - larger than typical (text-lg base)
- **All text**: Uppercase for headers, sentence case for body content
- Line height: Tight for headlines (leading-tight), comfortable for body (leading-relaxed)

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 24 (e.g., p-8, gap-12, mb-24)
**Brutalist Grid**: Intentionally broken/asymmetric grids with overlapping elements and rotated containers
**Section padding**: py-24 desktop, py-16 mobile with dramatic spacing variations

## Hero Section
**No background image** - pure neobrutalist composition:
- Split asymmetric layout: 60/40 text-to-visual ratio
- Oversized name in stacked format with rotation (-2deg to 2deg tilts)
- Title/position in contrasting color block with thick border (border-8)
- Animated geometric shapes floating in background (circles, squares, triangles in vibrant colors)
- Large CTA button with exaggerated shadow and slight rotation

## Core Components

**Education Timeline** (Vertical Cards):
- Thick bordered cards (border-4 to border-8) with heavy drop shadows (shadow-brutal custom class)
- Each card rotated slightly (rotate-1, -rotate-1 alternating)
- Staggered widths and alignments (not uniform)
- Degree year in massive typography overlapping card edge
- Institution names in bold caps with underline decorations

**Experience Cards** (Staggered Grid):
- 2-column desktop (lg:grid-cols-2), single mobile
- Cards with different heights, creating jagged skyline effect
- Position titles in colored header blocks (full-width with border)
- Bullet points with custom geometric markers (squares, arrows)
- Hover: Lift effect with shadow increase and slight rotation

**Awards Section** (Floating Badges):
- Asymmetric masonry-style layout
- Badge-style components with thick borders and rotations
- Award year in large background numbers (opacity-20)
- Interactive hover with scale and color shift animations

**Contact Footer**:
- Full-width color block with thick top border
- Email in oversized clickable text
- Social links as brutalist buttons with exaggerated states
- Copyright in small caps, offset to bottom-right

## Animations (Framer Motion)
- **Scroll-triggered**: Elements slide in from sides with rotation (variants for each section)
- **Hero**: Glitch effect on name (rapid position shifts), geometric shapes parallax
- **Cards**: Stagger animation (delay 0.1s between cards), fade + slide + rotate
- **Hover**: All interactive elements scale (1.05) and rotate (1-2deg) with shadow growth
- **Page load**: Sequential reveal - hero → education → experience → awards (cascade effect)

## Section Dividers
Thick diagonal lines (h-2 bg-black) with rotation, or geometric SVG shapes that overlap sections

## Navigation
Fixed top bar with thick bottom border, brutalist pill-shaped nav items with solid backgrounds, smooth anchor scroll with offset for fixed nav

## Responsive Strategy
- Desktop (lg+): Multi-column asymmetric grids, larger rotations, extreme typography sizes
- Tablet (md): 2-column max, reduced rotations, moderate sizing
- Mobile: Single column, minimal rotation (safety), increased padding, simplified overlaps

## Key Neobrutalist Principles
1. **Raw edges**: No rounded corners except intentional pill shapes
2. **Thick borders**: Everything bordered (4px minimum)
3. **Solid shadows**: No blur, pure offset drop shadows in black
4. **Clashing colors**: Vibrant, unexpected combinations
5. **Broken symmetry**: Intentional asymmetry and rotation throughout
6. **Bold typography**: Oversized, heavy weights dominating layout
7. **Layering**: Elements overlap with clear z-index hierarchy