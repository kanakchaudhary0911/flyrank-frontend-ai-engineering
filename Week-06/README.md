# Week 6 – Frontend AI Engineering

This folder contains the work completed during **Week 6** of the FlyRank Frontend AI Engineering program.

The focus of this week was building interactive frontend experiences with intentional motion, state-driven UI feedback, accessible interactions, and micro-interactions that communicate what the interface is doing.

---

## Week 6 Overview

| Assignment | Title | Status |
|---|---|---|
| FE-AA1 | Buttons with a Brain: Motion & State Micro-interactions | ✅ Completed |
| TBD | Upcoming Week 6 Assignment | ⏳ Pending |

---

## Assignments

### FE-AA1 – Buttons with a Brain: Motion & State Micro-interactions

**Objective**

Build an interactive button that communicates its complete lifecycle through intentional motion and visual state changes instead of abruptly switching between states.

The assignment focused on designing meaningful micro-interactions that provide clear feedback during user actions, processing, success, and failure.

**Key Activities**

- Build a reusable state-driven interactive button
- Implement idle state
- Implement hover and keyboard focus states
- Implement loading state with spinner feedback
- Implement success state with checkmark feedback
- Implement error state with retry feedback
- Add a Reset action
- Add dedicated Force Success and Force Error demo controls
- Add smooth state transitions
- Add success scale animation
- Add error shake animation
- Use compositor-friendly properties such as `transform` and `opacity`
- Prevent repeated actions while loading
- Handle rapid/spam clicks safely
- Add visible keyboard focus feedback
- Implement `aria-live` state announcements
- Respect `prefers-reduced-motion`
- Test all interaction states
- Verify the production build
- Document motion and easing decisions

**Technology Used**

- React
- TypeScript
- Vite
- CSS
- ESLint
- npm

**Skills Practiced**

- State-driven UI
- React State Management
- CSS Transitions
- CSS Animations
- Micro-interactions
- Motion Design
- Accessibility
- Keyboard Navigation
- Reduced Motion
- Interaction Design
- Responsive UI
- Event Handling
- Async State Simulation
- Spam-click Protection
- Testing
- Debugging
- Documentation

---

## Repository Structure

```text
Week-06/
│
├── README.md
│
└── FE-AA1_Buttons-with-a-Brain-Motion-and-State-Micro-interactions/
    │
    ├── README.md
    │
    └── app/
        ├── public/
        │
        ├── src/
        │   ├── App.tsx
        │   ├── App.css
        │   ├── index.css
        │   └── main.tsx
        │
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── package-lock.json
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
```

---

## Button State Lifecycle

The button communicates its state through visual feedback and intentional motion.

```text
              ┌──────────────┐
              │     IDLE     │
              │   Generate   │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   LOADING    │
              │  ⟳ Processing │
              └──────┬───────┘
                     │
              ┌──────┴───────┐
              ▼              ▼
       ┌────────────┐  ┌────────────┐
       │  SUCCESS   │  │   ERROR    │
       │ ✓ Success! │  │ ! Try Again│
       └────────────┘  └────────────┘
              │              │
              └──────┬───────┘
                     ▼
              ┌──────────────┐
              │    RESET     │
              │     IDLE     │
              └──────────────┘
```

The demo also provides dedicated controls for forcing Success and Error states so reviewers can inspect both states on demand.

---

## Motion Decisions

Motion was designed to communicate interaction rather than act as decoration.

- Hover uses a short `180ms` transition so the button responds immediately to pointer interaction.
- Active interaction uses a subtle scale change to provide tactile feedback.
- Background color and shadow transitions use approximately `220ms` for a smooth but responsive change.
- Success uses a `320ms` scale animation to provide a brief confirmation effect.
- Error uses a `360ms` shake animation to communicate that the action requires attention.
- The loading spinner uses a `700ms` rotation cycle to provide continuous processing feedback.
- Motion primarily uses `transform` and `opacity` so animations remain compositor-friendly.
- `prefers-reduced-motion` reduces animation and transition duration while preserving state feedback.

---

## Accessibility

The component was designed to remain usable with keyboard and assistive technologies.

- Uses a native HTML `<button>` element.
- Provides a visible `:focus-visible` state for keyboard users.
- Disables the main button while loading.
- Prevents repeated actions during processing.
- Uses `aria-live="polite"` to communicate state changes.
- Preserves visual feedback when reduced motion is requested.
- Uses clear labels for Success, Error, Loading, and Reset actions.

---

## Interaction Safety

The button prevents conflicting interactions while an action is processing.

When the button enters the loading state, additional clicks are ignored until the current action completes.

This prevents:

- Duplicate actions
- Conflicting timers
- Broken state transitions
- Accidental repeated submissions

The Reset control can safely return the component to the idle state.

---

## Demo Controls

The demo page includes dedicated controls for testing the complete lifecycle.

| Control | Purpose |
|---|---|
| Generate | Starts the normal action flow |
| Force Success | Directly demonstrates the success path |
| Force Error | Directly demonstrates the error path |
| Reset | Returns the component to idle |

These controls make every important state easy to reproduce during review.

---

## Testing

The following interaction scenarios were tested:

- [x] Idle state
- [x] Hover interaction
- [x] Keyboard focus
- [x] Loading state
- [x] Loading spinner
- [x] Success state
- [x] Error state
- [x] Success checkmark
- [x] Error feedback
- [x] Reset functionality
- [x] Force Success control
- [x] Force Error control
- [x] Rapid/spam clicking during loading
- [x] Disabled state during loading
- [x] Reduced-motion support
- [x] Production build

---

## What I Learned

- UI state changes should communicate what is happening instead of simply replacing text or colors.
- Small animations can make interfaces feel more responsive when they have a clear purpose.
- State-driven components are easier to reason about when each state has a defined visual and interaction behavior.
- `transform` and `opacity` are useful properties for creating performant UI motion.
- Keyboard focus needs to remain visible even when designing highly visual interfaces.
- `prefers-reduced-motion` should reduce unnecessary movement without removing important feedback.
- Preventing repeated actions during loading helps avoid conflicting state updates.
- Dedicated success and error triggers make interactive states easier to test and review.
- Micro-interactions are most effective when they reinforce the user's understanding of the interface.

---

## What I Enjoyed Most

- Designing a button where motion communicates the current state rather than being purely decorative.
- Seeing the loading state transition into clear success and error feedback.
- Adding the success checkmark and error shake to make the results immediately understandable.
- Testing rapid clicks and ensuring the component remained stable.
- Building the interaction using React, TypeScript, and CSS without relying on a component library.
- Testing keyboard focus and reduced-motion behaviour as part of the interaction design.

---

## Week 6 Summary

Week 6 focused on designing frontend micro-interactions with meaningful motion and state feedback.

FE-AA1 demonstrated how a single reusable button can communicate its complete lifecycle through intentional transitions:

```text
User Interaction
       ↓
      Idle
       ↓
     Loading
       ↓
 ┌─────┴─────┐
 ▼           ▼
Success     Error
 ✓           !
 └─────┬─────┘
       ↓
     Reset
       ↓
      Idle
```

The assignment combined React state management, CSS motion, accessibility, reduced-motion support, and interaction safety into one focused component.

An additional Week 6 assignment is still pending and will be added to this repository once it becomes available.

---

## Week 6 Status

🟡 **Week 6 In Progress**

FE-AA1 has been completed, tested, documented, and production-build verified. One more Week 6 assignment is still pending.

- [x] FE-AA1 completed
  - [x] Idle state implemented
  - [x] Hover/focus state implemented
  - [x] Loading state implemented
  - [x] Success state implemented
  - [x] Error state implemented
  - [x] Disabled/loading protection implemented
  - [x] Success and Error demo triggers added
  - [x] Motion and easing documented
  - [x] Accessibility implemented
  - [x] Reduced-motion support implemented
  - [x] Spam-click protection tested
  - [x] Local testing completed
  - [x] Production build verified
  - [x] Documentation completed
- [ ] Next Week 6 assignment — pending

```text
Week 06
│
└── FE-AA1
    └── ✅ Completed

Next assignment
    └── ⏳ Pending
```