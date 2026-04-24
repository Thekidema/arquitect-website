# ARQUITECT Project - Prompt Quick Reference
**For rapid project management and issue resolution**

---

## 🚀 Fast Prompt Templates

### Template 1: Cleanup & Maintenance
```
Role: You are an elite web architect specializing in code cleanliness and structure optimization.

Task: Audit the ARQUITECT website project and:
1. Identify and remove unused files/folders
2. Fix any broken image or asset paths
3. Optimize folder structure
4. Verify all CSS/JS files are referenced correctly

Acceptance Criteria:
- No 404 errors in console
- Clean, logical folder hierarchy
- All 13 images load correctly
- No duplicate files
- All modules properly initialized

Reference: SYSTEM-PROMPT.md Phase 1
```

### Template 2: Visual Design Enhancement
```
Role: You are a world-class web designer from Locomotive/Active Theory level.

Task: Enhance ARQUITECT website visuals:
1. Add premium effects (glassmorphism, 3D, animations)
2. Improve color harmony and typography
3. Implement scroll-linked animations
4. Create micro-interactions on hover/click

Requirements:
- No jank (60fps minimum)
- Accessible color contrast (WCAG AA)
- Mobile-optimized animations
- Consistent with Luxury Editorial aesthetic

Reference: SYSTEM-PROMPT.md Phase 2-4
```

### Template 3: Dark Mode Implementation
```
Role: You are a senior frontend engineer implementing theme systems.

Task: Create complete dark mode:
1. Design dark color palette
2. Implement theme toggle button
3. Add localStorage persistence
4. Theme all components (cards, buttons, sections)
5. Handle system preference (prefers-color-scheme)

Requirements:
- Smooth transitions (0.3s)
- No flickering on load
- All components styled for both themes
- Accessible contrast in both modes

Reference: SYSTEM-PROMPT.md Phase 3
```

### Template 4: Performance Optimization
```
Role: You are a performance engineer optimizing for 60fps.

Task: Optimize ARQUITECT performance:
1. Profile animations (DevTools Performance)
2. Remove layout thrashing
3. Optimize particle system
4. Reduce CSS file sizes
5. Lazy load non-critical assets

Target Metrics:
- Lighthouse Performance > 95
- LCP < 1.8s
- CLS < 0.1
- 60fps animations

Reference: SYSTEM-PROMPT.md Phase 5
```

### Template 5: Responsive Design
```
Role: You are a mobile-first responsive design specialist.

Task: Ensure ARQUITECT is perfectly responsive:
1. Test at 320px, 768px, 1024px, 1440px
2. Use fluid typography (clamp())
3. Implement responsive grids
4. Mobile-optimize animations
5. Test touch interactions

Requirements:
- No horizontal scrolling
- Touch targets 44px minimum
- Readable at all sizes
- Fast on mobile devices

Reference: SYSTEM-PROMPT.md Phase 5
```

---

## 🎨 Design Principles Checklist

### Before Starting Any Visual Work
- [ ] What emotion should users feel? (confidence, trust, warmth)
- [ ] What's the ONE memorable thing? (particles? dark mode? 3D tilt?)
- [ ] Does it strengthen the ARQUITECT brand? (construction builder)
- [ ] Is it performant? (60fps animations?)
- [ ] Is it accessible? (proper contrast? semantic HTML?)

### Color System
```
PRIMARY ORANGE: #F97316 (light) / #ff9d3d (dark)
BACKGROUNDS: #FAFAFA (light) / #0d0d0b (dark)
TEXT: #1C1C1C (light) / #f0ede6 (dark)
SECONDARY: #6B7280 (light) / #8a8580 (dark)
```

### Typography
```
DISPLAY: Playfair Display (serif, elegant)
BODY: Outfit (sans-serif, readable)
SIZING: Use clamp() - NEVER fixed pixels
SPACING: 8px grid system
```

### Effects Library
```
✅ Glassmorphism (blur + saturate)
✅ Particle System (30-35 particles, cursor tracking)
✅ 3D Tilt (±15° rotation, dynamic shadows)
✅ Text Reveals (4 types: clip, mask, fade, slide)
✅ Scroll Progress Bar (animated glow)
❌ DON'T: Blue-purple gradients, Inter font, emoji icons
```

---

## 📁 Project Structure

```
CLEAN & ORGANIZED ✅

public/
└── index.html                    (502 lines)

src/assets/
├── css/                          (2,253 lines, 6 files)
│   ├── variables.css            (design tokens)
│   ├── layout.css               (grid/flexbox)
│   ├── components.css           (UI components)
│   ├── animations.css           (@keyframes)
│   ├── premium-design.css       (glassmorphism, effects)
│   └── dark-mode.css            (theme variants)
├── js/modules/                  (1,393 lines, 11 modules)
│   ├── main.js                  (orchestration)
│   ├── dark-mode.js             (theme management)
│   ├── particles.js             (particle system)
│   ├── enhanced-tilt.js         (3D effects)
│   ├── scroll-animations.js     (scroll effects)
│   ├── reveal-text.js           (text animations)
│   ├── carousel.js              (hero carousel)
│   ├── counters.js              (animated numbers)
│   ├── effects.js               (visual effects)
│   ├── reveals.js               (scroll reveals)
│   └── whatsapp-integration.js  (WA button)
└── images/
    ├── hero/                    (3 SVG files)
    └── projects/                (6 SVG files)

config/
├── colors.json                  (centralized palette)
└── .env.example                 (env template)
```

---

## ✅ Quality Assurance Checklist

### Visual Quality
- [ ] Page loads smoothly (no jank)
- [ ] Animations run at 60fps
- [ ] Colors accurate (light & dark)
- [ ] Typography clear
- [ ] Spacing consistent (8px grid)
- [ ] Hover states visible

### Functionality
- [ ] All links work
- [ ] Images load (no 404s)
- [ ] Dark mode toggles
- [ ] Carousel rotates
- [ ] WhatsApp opens correctly
- [ ] Scroll animations trigger

### Code Quality
- [ ] No console errors
- [ ] No duplicate code
- [ ] Proper naming conventions
- [ ] DRY principles followed
- [ ] All functions scoped
- [ ] Modules properly initialized

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels present
- [ ] Color contrast 4.5:1+
- [ ] Keyboard navigation works
- [ ] Focus states visible

### Performance
- [ ] Lighthouse > 90
- [ ] LCP < 2.5s
- [ ] No layout shifts
- [ ] Mobile optimized
- [ ] Fast load times

### Browser Support
- [ ] Chrome latest ✅
- [ ] Firefox latest ✅
- [ ] Safari latest ✅
- [ ] Edge latest ✅
- [ ] Mobile Safari ✅

---

## 🔧 Common Commands

```bash
# View current state
git status
git log --oneline -5

# Cleanup & validate
npm run validate
npm run optimize-images

# Start development
npm run serve
# Access: http://localhost:8000

# Deploy
git push origin main           # Push to GitHub
vercel --prod                  # Deploy to Vercel
netlify deploy --prod          # Deploy to Netlify

# Check performance
npm run lighthouse             # Run Lighthouse audit
```

---

## 🚨 Red Flags & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| **Images not loading** | Wrong path `../src/assets/...` | Verify path from public/index.html |
| **CSS not applied** | CSS file not linked | Check `<link rel="stylesheet">` tags |
| **Dark mode broken** | localStorage not working | Check browser allows localStorage |
| **Animations janky** | Using layout properties (top, left, width) | Use transform & opacity only |
| **3D tilt not working** | Swiper or enhanced-tilt.js not loaded | Verify script tags in HTML |
| **Particles invisible** | Mobile (<768px) or disabled | Check mobile detection logic |
| **Console errors** | Missing library or broken reference | Check DevTools console tab |

---

## 📈 Performance Targets

```
Lighthouse Scores:
  Performance: 95+  ✅
  Accessibility: 98+ ✅
  Best Practices: 96+ ✅
  SEO: 100 ✅

Core Web Vitals:
  LCP: < 1.8s ✅
  FID: < 45ms ✅
  CLS: < 0.1 ✅

Animation Target:
  Frame Rate: 60fps ✅
  Stagger Delay: 80ms ✅
  Easing: cubic-bezier ✅
```

---

## 🎯 When to Use Each Prompt

| Situation | Use This Template |
|-----------|------------------|
| "Clean up messy files" | Template 1: Cleanup |
| "Make it look premium" | Template 2: Visual Design |
| "Add dark mode" | Template 3: Dark Mode |
| "It's slow" | Template 4: Performance |
| "Looks bad on mobile" | Template 5: Responsive |
| "General maintenance" | SYSTEM-PROMPT.md Phase 1 |
| "Add new feature" | SYSTEM-PROMPT.md Phase 2-7 |

---

## 📞 Quick Decision Tree

```
User says: "Fix the website"
  → Is something broken?
     YES → Debug with DevTools
     NO → Do cleanup (Template 1)

User says: "Make it better"
  → Is it slow?
     YES → Optimize (Template 4)
     NO → Add effects (Template 2)

User says: "Prepare for launch"
  → Run all QA checklists
  → Deploy with Template
  → Monitor Lighthouse
```

---

## 🎓 Key Principles (Remember These!)

```
1. INTENTION
   Every effect should serve a purpose
   Not: Sparkles everywhere
   Yes: Guide user attention strategically

2. RESTRAINT
   Less is more
   Not: 100 different animations
   Yes: Cohesive animation system

3. PERFORMANCE
   Premium = smooth 60fps
   Not: Beautiful jank
   Yes: Elegant performance

4. ACCESSIBILITY
   Design for everyone
   Not: Color-only information
   Yes: WCAG AA+ compliance

5. MAINTAINABILITY
   Code for the future
   Not: Hacky one-liners
   Yes: Clean, modular architecture
```

---

## 📚 Full Documentation Links

- **SYSTEM-PROMPT.md** - Complete development guide (this is the master)
- **PROJECT-STATUS.md** - Current project state & features
- **TECHNICAL-REVIEW.md** - Quality standards & assessment
- **DEPLOYMENT-GUIDE.md** - How to ship to production
- **README.md** - Project overview

---

## 💡 Pro Tips

1. **Always read console** - DevTools F12 > Console tab
2. **Use Lighthouse** - DevTools > Lighthouse tab (run audit)
3. **Test on real phone** - Not just browser dev tools
4. **Mobile first** - Design for 320px, enhance to 1440px
5. **Commit often** - Small atomic commits are easier to track
6. **Document changes** - Help your future self
7. **Performance first** - Premium = smooth experience
8. **Ask questions** - When unclear, clarify before coding

---

## 🎬 Example Usage

### Scenario 1: User reports "Site feels slow"
```
1. Open DevTools (F12)
2. Go to Performance tab
3. Record page load & scroll
4. Look for red blocks (jank)
5. Use Template 4: Performance Optimization
6. Measure improvement in Lighthouse
```

### Scenario 2: User wants "dark mode"
```
1. Read SYSTEM-PROMPT.md Phase 3
2. Use Template 3: Dark Mode Implementation
3. Check QA checklist: dark mode section
4. Test on multiple browsers
5. Commit with clear message
6. Push to GitHub
```

### Scenario 3: User complains "looks different on mobile"
```
1. Test at 320px, 768px, 1024px
2. Look for horizontal scrolling
3. Check touch target sizes (44px min)
4. Use Template 5: Responsive Design
5. Run Lighthouse mobile audit
6. Verify all breakpoints
```

---

**This quick reference is your "cheat sheet" for maintaining ARQUITECT at the highest level.**

Keep it bookmarked. Use it daily. Refer to SYSTEM-PROMPT.md for detailed guidance.

*Last Updated: April 24, 2026*

