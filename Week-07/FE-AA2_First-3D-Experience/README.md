# FE-AA2 — First 3D Experience on the Web

## Interactive 3D Experience

A lightweight interactive 3D experience built with React, TypeScript, Three.js and React Three Fiber. The experience uses a cool blue visual direction with a procedural 3D orb that responds to user interaction.

---

## Demo

**Local:** `http://localhost:5173/`

**Production Preview:** `http://localhost:4173/`

---

## Experience

The 3D experience provides these interactions:

- **Drag / Orbit** — Users can rotate around the 3D scene with mouse or touch.
- **Click / Tap** — Clicking the orb enlarges it and increases its brightness.
- **Floating Motion** — The orb gently moves up and down while continuously rotating.
- **Responsive Layout** — The experience adapts to desktop and mobile screen sizes.
- **Static Fallback** — Reduced-motion and lower-power devices receive a simplified static visual.

---

## Interaction Flow

```text
Open Experience
      ↓
Explore the 3D Scene
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

The main interaction goes beyond camera orbiting: clicking or tapping the orb changes its scale, brightness and visual state.

---

## Visual Direction

The experience uses a cool blue palette inspired by:

- Cool Cerulean
- Baby Blue Eyes
- Midnight Blue
- Platinum
- Light Blue Grey

The visual style focuses on a minimal, atmospheric and premium 3D presentation without relying on a large external 3D model.

---

## Motion Decisions

- The orb continuously rotates using lightweight frame-based animation.
- A gentle floating motion adds depth without excessive movement.
- Clicking the orb smoothly interpolates its scale to create a responsive interaction.
- Lighting changes visually emphasize the active orb state.
- Mouse and touch orbit interactions are supported.
- `prefers-reduced-motion` is respected by switching to a static fallback.
- Motion is kept lightweight to reduce unnecessary rendering work.

---

## Performance

- The 3D object uses procedural `icosahedronGeometry` instead of a large external GLB model.
- The 3D experience is lazy-loaded with `React.lazy`.
- Device pixel ratio is capped at `1.5`.
- A static fallback is provided for reduced-motion preferences and lower-power devices.
- Three.js dependencies are code-split into smaller production chunks.
- Production build completed successfully without chunk-size warnings.

---

## Production Build

```text
react   → ~178 KB
r3f     → ~183 KB
three   → ~331 KB + ~370 KB
```

The Three.js bundle was split into multiple chunks so that no individual JavaScript chunk exceeds the default 500 KB warning threshold.

---

## Accessibility & Device Support

- Mouse and touch interaction are supported.
- The experience remains usable on mobile layouts.
- `prefers-reduced-motion` is respected.
- Lower-power devices receive a simplified static fallback.
- The 3D canvas is not required for the main page content.
- The experience is visually contained within a responsive card.

---

## Tech Stack

- React
- TypeScript
- Vite
- Three.js
- React Three Fiber
- @react-three/drei
- CSS
- ESLint

---

## Project Structure

```text
FE-AA2_First-3D-Experience/
├── src/
│   ├── components/
│   │   ├── Experience.tsx
│   │   ├── Orb.tsx
│   │   └── Scene.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## With More Time

With more time, I would:

- Add a small material or lighting configurator.
- Add more interactive 3D objects.
- Improve transitions between different orb states.
- Add a richer mobile interaction experience.
- Complete a formal FE-10 accessibility and performance audit.
- Test frame rate and loading performance on more real mobile devices.

---

## Status

✅ **Complete**