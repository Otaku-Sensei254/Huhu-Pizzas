# Huhu Pizza Hub - Agent Guidelines

## Design System: Unslop Methodology

This project follows the **unslop** design methodology for crafting deliberate, non-template interfaces. Every change should maintain the crafted quality established in the unslop transformation.

### Core Principles

1. **One Neutral Ramp, One Accent**
   - All surfaces, borders, text use the warm cream neutral ramp (`--bg`, `--bg-subtle`, `--surface`, `--surface-muted`)
   - Single accent: Burnt orange (`--accent: #C8521A`) only for primary actions, active states, signature moments
   - No gradient text, colored glows, radial washes, neon borders

2. **4px Spacing Grid**
   - All margins, paddings, gaps, heights are multiples of 4px
   - Equal things have equal sizes (same gap in lists, same padding in sibling cards)
   - Space shows grouping: tighter inside groups, wider between groups

3. **Restrained Typography**
   - Weights: 400, 500, 600 only (no 700-900)
   - Hierarchy from size and color, not weight
   - Sentence case everywhere (no uppercase tracked labels)
   - Tabular figures for all numbers (`font-variant-numeric: tabular-nums`)

4. **Nested Radii**
   - Outer radius minus padding = inner radius (never less than 4px)
   - Scale: `--radius-xs: 6px`, `--radius-sm: 10px`, `--radius-md: 16px`, `--radius-lg: 24px`
   - No 9999px pills except rare inline badges

5. **Purposeful Motion Only**
   - No looping animations, no hover scales, no `transition-all`
   - Kept: scroll reveal (fade + rise), drawer slide, button press (0.98x)
   - One easing curve: `cubic-bezier(0.2, 0.8, 0.2, 1)`
   - Animate `transform` and `opacity` only

6. **Real Visuals, No Filler**
   - Hero: real product photo with grounded shadow
   - Menu: simple line illustrations per category
   - No floating blobs, glossy orbs, gradient washes
   - One visual moment per screen

7. **Quiet Components**
   - Three text roles: `--text`, `--text-muted`, `--text-light`
   - Badges: quiet text, proper radius, no emoji
   - Focus rings: 2px accent, 2px offset
   - Icons: one set, one size (14-22px), 1.5-2px stroke, text-role color

### Direction (Project Identity)

**Product:** Nairobi grill with WhatsApp ordering & 25-min delivery
**Character:** Warm, artisanal, confident
**World:** Open flames, stone ovens, charcoal smoke, terracotta
**Moments:** Hero pizza photo (grounded), menu line illustrations
**Signature:** Flame glyph only on hero badge, WhatsApp button, hero pizza tag

### File Structure

```
src/
├── index.css          # Design tokens, base styles, utilities
├── App.css            # Home page sections (features, CTA)
├── components/
│   ├── Hero/Hero.css
│   ├── Header/Header.css, StaggeredMenu.css
│   ├── Footer/Footer.css
│   ├── Cart/CartSidebar.css
│   ├── PageLoader/PageLoader.css
│   ├── CookieBanner/CookieBanner.css
│   └── ReflectiveCard/ReflectiveCard.jsx (WebGL - tokens via CSS custom props)
└── pages/
    ├── Menu/Menu.css
    ├── Promotions/Promotions.css
    ├── Contact/Contact.css
    └── NotFound/NotFound.css
```

### When Making Changes

1. **Check tokens first** - Use existing `:root` variables, don't add literal colors
2. **Follow 4px grid** - All spacing multiples of 4
3. **Match radii** - Use the scale, nest properly
4. **Limit accent** - Only primary actions, active states, 3 signature moments
5. **No new motion** - Unless it explains something (hover color, press scale, menu fade)
6. **Real copy** - Specific, verified, no hype words, no trailing periods on labels
7. **Tabular numbers** - All prices, counts use `font-variant-numeric: tabular-nums`

### Quality Gates

Before committing, verify:
- [ ] No literal colors outside `:root` tokens
- [ ] All spacing on 4px grid
- [ ] No `transition-all`, no animated layout properties
- [ ] No 900-weight headings, no uppercase tracked labels
- [ ] No emoji in interface
- [ ] Accent used only where fire is literal
- [ ] Nested radii math correct
- [ ] Numbers in consistent format with tabular-nums

### References

- Unslop skill: `/home/dtech/.agents/skills/unslop/SKILL.md`
- Transformation report: `UNSLOP_REPORT.md`
- Before/after snapshots: `unslop/original.html`, `unslop/unsloped.html`