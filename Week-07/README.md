# Week 7 – Frontend AI Engineering

This folder contains the work completed during **Week 7** of the FlyRank Frontend AI Engineering program.

---

## Week 7 Overview

| Assignment | Title | Status |
|---|---|---|
| FE-AA2 | First 3D Experience on the Web | ✅ Completed |
| Next Assignment | Upcoming Week 7 Assignment | ⏳ Not Started |

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

---

## Interaction

The experience supports multiple forms of interaction:

- **Drag / Orbit** — Rotate around the 3D scene using mouse or touch.
- **Click / Tap** — Enlarge and brighten the orb.
- **Continuous Motion** — The orb gently rotates and floats.
- **Responsive Layout** — The experience adapts to different screen sizes.
- **Static Fallback** — Reduced-motion and lower-power devices receive a simplified visual experience.

---

## Interaction Flow

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

---

## Visual Direction

The experience uses a cool blue visual direction inspired by:

- Cool Cerulean
- Baby Blue Eyes
- Midnight Blue
- Platinum
- Light Blue Grey

The final interface uses a minimal midnight-blue environment with a bright blue 3D orb and soft atmospheric lighting.

---

## Performance & Loading

The 3D experience was designed to load responsibly.

**Performance Decisions**

- Procedural `icosahedronGeometry` is used instead of a large external GLB model.
- The 3D experience is lazy-loaded with `React.lazy`.
- Device pixel ratio is capped at `1.5`.
- A static fallback is shown when `prefers-reduced-motion` is enabled.
- Lower-power devices receive a simplified static experience.
- Three.js dependencies are code-split into separate production chunks.
- The main page content does not depend on the 3D canvas to communicate its purpose.

**Production Build**

```text
react   → ~178 KB
r3f     → ~183 KB
three   → ~331 KB + ~370 KB
```

The Three.js bundle was split into multiple chunks so that no individual JavaScript chunk exceeds the default 500 KB warning threshold.

The final production build completed successfully without chunk-size warnings.

---

## Accessibility & Device Support

- Mouse interaction supported
- Touch interaction supported
- Responsive mobile layout
- `prefers-reduced-motion` support
- Static fallback for reduced-motion users
- Lower-power device fallback
- 3D experience remains contained within a responsive card
- Main content remains understandable without interacting with the 3D scene

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
└── FE-AA2_First-3D-Experience/
    │
    ├── README.md
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

---

## What I Enjoyed Most

- Building my first interactive 3D experience for the web.
- Designing the Blue Orbit visual style.
- Creating the procedural orb without depending on a large 3D model.
- Making the orb react to click and touch interaction.
- Adding rotation and floating motion.
- Supporting both mouse and mobile interactions.
- Optimizing the Three.js bundle after the initial production build showed a large chunk.
- Seeing the final production build complete without chunk-size warnings.

---

## Week 7 Progress

```text
Week 07
│
├── FE-AA2
│   └── ✅ Completed
│
└── Next Assignment
    └── ⏳ Upcoming
```

---

## Week 7 Status

🟡 **Week 7 In Progress**

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

**Upcoming**

- [ ] Next Week 7 assignment
- [ ] Complete and document upcoming assignment
- [ ] Update Week 7 README
- [ ] Final Week 7 testing
- [ ] Final Week 7 status

---

## Completion Status

**Week 7 – Frontend AI Engineering is currently in progress.** 🟡

The first Week 7 assignment, **FE-AA2 — First 3D Experience on the Web**, has been implemented, tested, optimized, and documented.

The remaining Week 7 assignment will be added to this README once it is completed.