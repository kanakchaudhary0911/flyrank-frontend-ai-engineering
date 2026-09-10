# FE-AA1 — Buttons with a Brain

## Motion & State Micro-interactions

A reusable React + TypeScript button that communicates its complete interaction lifecycle through motion and visual feedback.

---

## Demo

**Local:** `http://localhost:5173/`

---

## States

The button supports these states:

- **Idle** — Ready to generate.
- **Hover / Focus** — Button lifts slightly to communicate interactivity.
- **Loading** — Button is disabled and displays a spinner while the action is processing.
- **Success** — Green feedback with a checkmark.
- **Error** — Red feedback with an error icon and a short shake animation.
- **Reset** — Returns the component to its idle state.

---

## Interaction Flow

```text
Idle
  ↓
Loading
  ↓
Success / Error
  ↓
Idle
```

The demo also provides dedicated Force Success and Force Error controls so reviewers can inspect both states on demand.

---

## Motion Decisions

- Hover uses a short `180ms` transition for a quick response.
- Color and shadow transitions use approximately `220ms` so feedback feels smooth without becoming slow.
- Success uses a short `320ms` scale animation to provide confirmation.
- Error uses a `360ms` shake to communicate that the action needs attention.
- Loading spinner uses a `700ms` rotation cycle.
- Motion uses compositor-friendly properties such as `transform` and `opacity`.
- `prefers-reduced-motion` is respected by reducing animations and transitions while keeping visual state feedback available.

---

## Accessibility

- The main action is a native HTML `<button>`.
- Keyboard focus is visible with `:focus-visible`.
- Loading disables the main button to prevent repeated submissions.
- `aria-live="polite"` communicates state changes to assistive technologies.
- Reduced-motion preferences are respected.

---

## Spam-Click Protection

The action ignores additional clicks while the button is loading. This prevents duplicate actions and conflicting state transitions.

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- ESLint

---

## Project Structure

```text
FE-AA1_Buttons-with-a-Brain-Motion-and-State-Micro-interactions/
├── app/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   ├── package.json
│   └── ...
└── README.md
```
---

## Status

**Complete** ✅