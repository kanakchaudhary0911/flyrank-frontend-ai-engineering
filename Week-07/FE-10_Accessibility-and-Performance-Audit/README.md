# FE-10 — Accessibility and Performance Audit

**Week 7 · Frontend AI Engineering**

## Overview

FE-10 is an accessibility and performance audit pass for the interactive 3D experience built in FE-AA2.

The goal of this assignment was to evaluate the deployed experience using Lighthouse and WAVE, identify accessibility and performance issues, apply targeted fixes, and verify the results through a second audit.

The audit focused on:

- Lighthouse Mobile performance
- Lighthouse accessibility
- WAVE accessibility evaluation
- Keyboard-only interaction
- Visible focus states
- Accessible interaction for the 3D experience
- Text readability and contrast
- 3D performance optimization
- AI-specific accessibility considerations

---

## Assignment Objective

The objective of FE-10 was to:

1. Establish a Lighthouse Mobile baseline.
2. Run a WAVE accessibility audit.
3. Perform a keyboard-only accessibility pass.
4. Fix identified accessibility issues.
5. Verify the fixes through another Lighthouse and WAVE audit.
6. Record measurable before/after results in `AUDIT.md`.

---

## Audited Experience

### FE-10 Production Deployment

**Live URL:** 🔗 [https://fe-10-accessibility-performance-aud.vercel.app](https://fe-10-accessibility-performance-aud.vercel.app)

The FE-10 version is an audit-focused copy of the original FE-AA2 experience.

The original FE-AA2 project remains unchanged.

---

## Audit Results

### Lighthouse Mobile

**Before**

| Category | Score |
|---|---:|
| Performance | **89** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **90** |

**After**

| Category | Score |
|---|---:|
| Performance | **92** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **90** |

**Improvement**

- Performance: 89 → 92 (+3)
- Accessibility: 100 → 100 (maintained)

The final Performance and Accessibility scores both meet the assignment's 90+ target.

---

### WAVE

**Before**

| Result | Count |
|---|---:|
| Errors | **0** |
| Contrast Errors | **0** |
| Alerts | **1** |
| AIM Score | **10/10** |

The baseline alert was related to very small text.

**After**

| Result | Count |
|---|---:|
| Errors | **0** |
| Contrast Errors | **0** |
| Alerts | **0** |
| Features | **1** |
| Structural Elements | **2** |
| ARIA | **2** |
| AIM Score | **10/10** |

**Improvement**

- WAVE Alerts: 1 → 0
- WAVE Errors: 0 → 0
- Contrast Errors: 0 → 0
- AIM Score: 10/10 → 10/10

---

## Accessibility Improvements

### 1. Keyboard-accessible 3D interaction

The original 3D orb was primarily activated through pointer interaction.

A native button was added as a keyboard-accessible alternative.

The control includes:

- `type="button"`
- descriptive `aria-label`
- `aria-pressed`
- keyboard activation
- visible focus styling

Users can activate and deactivate the Blue Orbit using:

- `Enter`
- `Space`

---

### 2. Visible focus state

A dedicated `:focus-visible` style was added to make keyboard focus clearly visible.

This provides a clear visual indicator when navigating the interface with the keyboard.

---

### 3. Improved text readability

The small scene label was adjusted after the baseline WAVE audit reported a very-small-text alert.

The label was changed from:

```css
font-size: .65rem;
```

to:

```css
font-size: .78rem;
```

Its text contrast was also increased.

After the change, WAVE reported: **0 Alerts**

---

## Keyboard-only Testing

The primary FE-10 interaction was manually tested without relying on a mouse.

**Test Flow**

1. Reload the page.
2. Navigate using `Tab`.
3. Reach the Activate Blue Orbit button.
4. Press `Enter`.
5. Press `Space`.
6. Confirm that the orbit state changes.

**Result:** ✅ **PASS**

The primary 3D interaction is keyboard reachable and operable.

---

## Performance Improvements

The experience already used several performance-conscious techniques, which were verified as part of the audit.

**Implemented techniques**

- Lazy-loaded 3D experience
- Lazy-loaded 3D scene
- Device pixel ratio capped at `1.5`
- Procedural 3D geometry
- No heavy external 3D model
- Reduced-motion fallback
- Low-power device fallback
- Production bundle code splitting
- Separate chunks for major 3D/runtime dependencies

**Performance Result**

Lighthouse Mobile Performance improved from **89 → 92** — a measurable +3 point improvement.

---

## Responsive and Device Considerations

The experience supports responsive layouts across desktop and smaller screens.

The 3D experience also includes fallback behaviour for:

- `prefers-reduced-motion`
- lower-power devices

This prevents unnecessary animation and 3D workload where a simplified experience is more appropriate.

---

## AI-specific Accessibility

FE-10 itself is an interactive 3D experience and does not contain an AI chat interface.

The existing FE-06 Streaming AI Chat was therefore checked separately as the related AI interface.

**FE-06 Manual Keyboard Check**

The deployed FE-06 chat was manually checked for:

- Keyboard-reachable chat input
- Keyboard navigation through the primary chat flow
- Streaming response behaviour
- Stop/control interaction

The primary keyboard flow was successfully completed.

**WAVE limitation**

The online WAVE scanner could not successfully load the deployed FE-06 dynamic application and displayed a page-load error instead.

Therefore, no WAVE score for FE-06 is claimed in this README or the audit report.

---

## Screenshots

Audit evidence is stored in the `screenshots/` directory.

```text
screenshots/
├── lighthouse-before.png
├── lighthouse-after.png
├── wave-before.png
└── wave-after.png
```

The complete audit evidence and measurable before/after comparison are documented in `AUDIT.md`.

---

## Tech Stack

- React
- TypeScript
- Vite
- Three.js
- React Three Fiber
- @react-three/drei
- CSS
- Vercel
- Lighthouse
- WAVE

---

## Project Structure

```text
FE-10_Accessibility-and-Performance-Audit/
│
├── .vercel/
│   ├── project.json
│   └── README.txt
│
├── dist/
│   ├── assets/
│   └── index.html
│
├── screenshots/
│   ├── lighthouse-after.png
│   ├── lighthouse-before.png
│   ├── wave-after.png
│   └── wave-before.png
│
├── src/
│   ├── components/
│   │   ├── Experience.tsx
│   │   ├── Orb.tsx
│   │   └── Scene.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── AUDIT.md
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Quality Checklist

- [x] Lighthouse Mobile audit completed
- [x] Lighthouse Performance reached 90+
- [x] Lighthouse Accessibility reached 90+
- [x] WAVE audit completed
- [x] WAVE Errors = 0
- [x] WAVE Contrast Errors = 0
- [x] WAVE Alerts = 0
- [x] Keyboard-only interaction tested
- [x] 3D interaction has keyboard alternative
- [x] Enter activation tested
- [x] Space activation tested
- [x] Visible focus state added
- [x] Small-text issue fixed
- [x] Before/after screenshots captured
- [x] Measurable audit results documented

---

## What I Learned

This audit showed that accessibility should be considered as part of interaction design rather than added only at the end.

The biggest improvement was providing a native keyboard-accessible control for an interaction that was originally designed around pointer input.

I also learned how small typography and contrast decisions can affect automated accessibility audits, and how performance optimizations such as lazy loading and code splitting can improve the overall experience without removing the visual character of a 3D interface.

---

## Final Status

| Area | Status |
|---|---|
| Lighthouse Performance | 92 ✅ |
| Lighthouse Accessibility | 100 ✅ |
| WAVE Errors | 0 ✅ |
| WAVE Contrast Errors | 0 ✅ |
| WAVE Alerts | 0 ✅ |
| Keyboard-only flow | PASS ✅ |
| Before/After evidence | Complete ✅ |
| AUDIT.md | Complete ✅ |

---

## FE-10 Status

✅ **Completed**

---

## Related Work

**Previous Assignment**

`FE-AA2 — First 3D Experience`

The original FE-AA2 project remains unchanged.

**Related AI Interface**

`FE-06 — Streaming AI Chat`

Used for separate manual verification of the AI chat keyboard flow.