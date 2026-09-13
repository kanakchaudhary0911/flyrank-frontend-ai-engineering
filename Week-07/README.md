# Week 7 – Frontend AI Engineering

This folder contains the work completed during **Week 7** of the FlyRank Frontend AI Engineering program.

---

## Week 7 Overview

| Assignment | Title | Status |
|---|---|---|
| FE-AA2 | First 3D Experience on the Web | ✅ Completed |
| FE-10 | Accessibility and Performance Audit | ✅ Completed |

---

## Assignments

### FE-AA2 – First 3D Experience on the Web

**Objective**

Build a real 3D experience for the web that goes beyond a static visual by providing meaningful interaction, responsive behaviour, and responsible loading/performance decisions.

The assignment focused on creating an interactive 3D scene while keeping the experience lightweight and usable across different devices.

**Key Activities**

- Build a real 3D scene in the browser
- Use React Three Fiber and Three.js
- Create an interactive procedural 3D orb
- Implement mouse-based orbit interaction
- Support touch interaction for mobile devices
- Add click/tap interaction beyond camera orbiting
- Animate the orb with rotation and floating motion
- Add visual feedback when the orb is clicked
- Create a responsive desktop and mobile layout
- Implement lazy loading for the 3D experience
- Add a static fallback for reduced-motion users
- Add a simplified fallback for lower-power devices
- Cap device pixel ratio at `1.5`
- Use lightweight procedural geometry instead of a large external 3D model
- Code-split Three.js dependencies for production
- Verify the production build
- Document performance decisions

**Interaction**

The experience supports multiple forms of interaction:

- **Drag / Orbit** — Rotate around the 3D scene using mouse or touch.
- **Click / Tap** — Enlarge and brighten the orb.
- **Continuous Motion** — The orb gently rotates and floats.
- **Responsive Layout** — The experience adapts to different screen sizes.
- **Static Fallback** — Reduced-motion and lower-power devices receive a simplified visual experience.

**Interaction Flow**

```text
Open Experience
      ↓
Explore 3D Scene
      ↓
Drag / Touch to Orbit
      ↓
Click / Tap the Orb
      ↓
Orb Enlarges + Brightens
      ↓
Click / Tap Again
      ↓
Returns to Normal State
```

The main interaction goes beyond orbit controls: clicking or tapping the orb changes its scale and visual intensity.

**Visual Direction**

The experience uses a cool blue visual direction inspired by:

- Cool Cerulean
- Baby Blue Eyes
- Midnight Blue
- Platinum
- Light Blue Grey

The final interface uses a minimal midnight-blue environment with a bright blue 3D orb and soft atmospheric lighting.

**Performance & Loading**

The 3D experience was designed to load responsibly.

*Performance Decisions*

- Procedural `icosahedronGeometry` is used instead of a large external GLB model.
- The 3D experience is lazy-loaded with `React.lazy`.
- Device pixel ratio is capped at `1.5`.
- A static fallback is shown when `prefers-reduced-motion` is enabled.
- Lower-power devices receive a simplified static experience.
- Three.js dependencies are code-split into separate production chunks.
- The main page content does not depend on the 3D canvas to communicate its purpose.

*Production Build*

```text
react   → ~178 KB
r3f     → ~183 KB
three   → ~331 KB + ~370 KB
```

The Three.js bundle was split into multiple chunks so that no individual JavaScript chunk exceeds the default 500 KB warning threshold.

The final production build completed successfully without chunk-size warnings.

**Accessibility & Device Support**

- Mouse interaction supported
- Touch interaction supported
- Responsive mobile layout
- `prefers-reduced-motion` support
- Static fallback for reduced-motion users
- Lower-power device fallback
- 3D experience remains contained within a responsive card
- Main content remains understandable without interacting with the 3D scene

---

### FE-10 – Accessibility and Performance Audit

**Objective**

Audit and improve the Week 7 3D experience for accessibility and performance using Lighthouse, WAVE, and manual keyboard testing.

**Audit Activities**

- Run Lighthouse Mobile audit before changes
- Run WAVE accessibility audit before changes
- Perform keyboard-only testing
- Add a keyboard-accessible control for the 3D interaction
- Add visible focus styling
- Improve small-text readability
- Run Lighthouse Mobile audit after changes
- Run WAVE audit after changes
- Document measurable before/after results
- Verify the production build
- Document audit evidence in `AUDIT.md`

**Lighthouse Results**

| Metric | Before | After | Delta |
|---|---:|---:|---|
| Performance | 89 | 92 | +3 |
| Accessibility | 100 | 100 | Maintained |
| Best Practices | 100 | 100 | Maintained |
| SEO | 90 | 90 | Maintained |

**WAVE Results**

| Metric | Before | After | Delta |
|---|---:|---:|---|
| Errors | 0 | 0 | Maintained |
| Contrast Errors | 0 | 0 | Maintained |
| Alerts | 1 | 0 | -1 |
| AIM Score | 10/10 | 10/10 | Maintained |

**Keyboard Testing**

The primary 3D interaction was tested using keyboard-only navigation.

Verified:

- `Tab` reaches the accessible control
- `Enter` activates the control
- `Space` activates the control
- Visible focus state is present
- The orb interaction can be operated without relying exclusively on a mouse

**FE-06 AI Chat Verification**

The existing FE-06 Streaming AI Chat was also manually checked for keyboard accessibility because FE-10 itself does not contain an AI chat interface.

Verified:

- Chat input is keyboard reachable
- Primary chat flow can be navigated using `Tab`
- AI response streaming works during normal interaction
- Stop/control interaction was manually checked

The FE-06 WAVE scan could not successfully load the dynamic deployed application, so no FE-06 WAVE score is claimed.

**Audit Documentation**

Detailed audit evidence, screenshots, findings, fixes, and before/after measurements are documented in:

`FE-10_Accessibility-and-Performance-Audit/AUDIT.md`

---

## Technology Used

- React
- TypeScript
- Vite
- Three.js
- React Three Fiber
- @react-three/drei
- CSS
- ESLint
- npm

---

## Skills Practiced

- 3D Web Development
- React Three Fiber
- Three.js
- Interactive 3D
- Touch Interaction
- Orbit Controls
- React Lazy Loading
- Code Splitting
- Performance Optimization
- Responsive UI
- Reduced Motion
- Device Adaptation
- Animation
- Interaction Design
- Accessibility
- Keyboard Navigation
- Lighthouse Auditing
- WAVE Auditing
- Production Builds
- Debugging
- Documentation

---

## Repository Structure

```text
Week-07/
│
├── README.md
│
├── FE-AA2_First-3D-Experience/
│   │
│   ├── README.md
│   ├── src/
│   │   ├── components/
│   │   │   ├── Experience.tsx
│   │   │   ├── Orb.tsx
│   │   │   └── Scene.tsx
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
└── FE-10_Accessibility-and-Performance-Audit/
    │
    ├── README.md
    ├── AUDIT.md
    ├── screenshots/
    │   ├── lighthouse-before.png
    │   ├── lighthouse-after.png
    │   ├── wave-before.png
    │   └── wave-after.png
    │
    ├── src/
    │   ├── components/
    │   │   ├── Experience.tsx
    │   │   ├── Orb.tsx
    │   │   └── Scene.tsx
    │   ├── App.tsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.tsx
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## Week 7 Testing & Quality

### FE-AA2 Testing

The 3D experience was manually verified for:

- [x] 3D scene rendering
- [x] Orb animation
- [x] Mouse orbit interaction
- [x] Touch interaction
- [x] Click interaction
- [x] Orb scale transition
- [x] Orb visual feedback
- [x] Responsive layout
- [x] Reduced-motion fallback
- [x] Lower-power device fallback
- [x] Lazy-loaded 3D experience
- [x] DPR capped at 1.5
- [x] Production code splitting
- [x] Production build
- [x] No chunk-size warning after optimization

### FE-10 Testing

- [x] Lighthouse Mobile baseline recorded
- [x] WAVE baseline recorded
- [x] Keyboard-only testing completed
- [x] Keyboard-accessible 3D control added
- [x] Visible focus state added
- [x] Small-text accessibility issue addressed
- [x] Lighthouse Mobile after audit completed
- [x] WAVE after audit completed
- [x] Performance score reached 90+
- [x] Accessibility score reached 90+
- [x] WAVE Errors = 0
- [x] WAVE Contrast Errors = 0
- [x] WAVE Alerts = 0
- [x] Before/after screenshots added
- [x] AUDIT.md completed

---

## What I Learned

- 3D experiences should provide meaningful interaction instead of being purely decorative.
- Procedural geometry can be useful when a heavy external 3D model is unnecessary.
- Device pixel ratio has a direct impact on rendering cost.
- Lazy loading helps keep the initial application lighter.
- Code splitting can prevent large JavaScript chunks from becoming a single download.
- Reduced-motion support is important for animated experiences.
- Touch interaction needs to be considered when designing 3D interfaces.
- Performance decisions should be made while building the experience, not only after it is finished.
- A static fallback can make a 3D experience more resilient across different devices.
- Responsive layout is especially important when combining 3D content with text.
- Accessibility should be verified through both automated tools and manual keyboard testing.
- Native interactive elements provide a reliable keyboard-accessible alternative to pointer-only interactions.
- Lighthouse and WAVE help identify different categories of accessibility and performance issues.
- Before/after measurements make optimization work easier to evaluate.

---

## What I Enjoyed Most

- Building my first interactive 3D experience for the web.
- Designing the Blue Orbit visual style.
- Creating the procedural orb without depending on a large 3D model.
- Making the orb react to click and touch interaction.
- Adding rotation and floating motion.
- Supporting both mouse and mobile interactions.
- Optimizing the Three.js bundle after the initial production build showed a large chunk.
- Improving the experience through accessibility testing.
- Making the 3D interaction keyboard accessible.
- Seeing the final Lighthouse Performance score reach 92.
- Getting 100 Accessibility and 10/10 WAVE AIM Score after the audit.

---

## Week 7 Progress

```text
Week 07
│
├── FE-AA2
│   └── ✅ Completed
│
└── FE-10
    └── ✅ Completed
```

---

## Week 7 Status

🟢 **Week 7 Completed**

**Completed**

- [x] FE-AA2 — First 3D Experience on the Web
  - [x] Interactive 3D scene
  - [x] Meaningful orb interaction
  - [x] Mouse and touch support
  - [x] Responsive UI
  - [x] Reduced-motion fallback
  - [x] Lower-power device fallback
  - [x] Lazy loading
  - [x] DPR optimization
  - [x] Three.js code splitting
  - [x] Production build verified
  - [x] Documentation completed
- [x] FE-10 — Accessibility and Performance Audit
  - [x] Lighthouse baseline
  - [x] WAVE baseline
  - [x] Keyboard-only testing
  - [x] Accessibility fixes
  - [x] Performance verification
  - [x] Lighthouse after audit
  - [x] WAVE after audit
  - [x] Before/after screenshots
  - [x] AUDIT.md completed

---

## Completion Status

**Week 7 – Frontend AI Engineering is completed.** 🟢

Both Week 7 assignments have been completed:

- **FE-AA2 — First 3D Experience on the Web** ✅
- **FE-10 — Accessibility and Performance Audit** ✅

The 3D experience was built, optimized, accessibility-tested, and documented. The final Lighthouse and WAVE results were recorded in `AUDIT.md` with before/after evidence.

**Week 7 Status: COMPLETE ✅**