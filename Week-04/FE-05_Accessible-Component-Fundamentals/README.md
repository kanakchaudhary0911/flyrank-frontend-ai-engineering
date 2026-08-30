# FE-05 – Accessible Component Fundamentals

## Overview

This assignment focuses on building reusable, keyboard-accessible UI components from scratch using React and TypeScript.

The project follows **WAI-ARIA accessibility patterns** to ensure that each component supports proper keyboard interaction, focus management, and screen-reader semantics.

The assignment also includes a source-level review of the **shadcn/ui Base UI** Dialog and Tabs implementations, comparing the hand-built components against an established, production-grade component library.

---

## Objectives

- Build reusable UI components from scratch
- Implement WAI-ARIA accessibility patterns
- Manage keyboard navigation and focus
- Add proper ARIA semantics to each component
- Test components using keyboard-only navigation
- Review open-source shadcn/ui Base UI implementations
- Compare custom components with library-based components
- Document accessibility and implementation decisions

---

## Project

### Accessible Component Set

The project delivers three accessible, keyboard-navigable UI components built independently, along with a source review of equivalent shadcn/ui Base UI components.

### Components Implemented

**1. Modal Dialog**

- Open and close functionality
- Keyboard accessibility
- Focus management
- Focus return to the trigger button
- `Escape` key support
- `Tab` and `Shift + Tab` navigation
- ARIA dialog semantics
- Accessible labeling

**2. Tabs**

- Keyboard-accessible tab navigation
- Active tab state
- Tab panel switching
- ARIA tab semantics
- Accessible relationships between tabs and panels

**3. Disclosure**

- Expand/collapse interaction
- Keyboard-accessible button behavior
- ARIA expanded state
- Accessible relationship between trigger and content

### shadcn/ui Source Review

A source-level review of the **shadcn/ui Base UI Dialog and Tabs** implementations was conducted to compare accessibility patterns, structure, and implementation approach against the hand-built components.

---

## Technology Stack

- React
- TypeScript
- WAI-ARIA
- HTML5
- CSS3
- Git & GitHub
- AI-assisted development

---

## Application Structure

```text
FE-05-Accessible-Component-Fundamentals/
│
├── README.md
│
├── app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Modal.tsx
│   │   │   ├── Tabs.tsx
│   │   │   └── Disclosure.tsx
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── tsconfig.json
│
└── playground/
    └── src/
        └── components/
            └── ui/
```

---

## Skills Practiced

- React Development
- TypeScript
- Accessibility (WAI-ARIA)
- Keyboard Navigation
- Focus Management
- Component-Based Development
- Source Code Review
- UI Development
- Documentation
- Git & GitHub

---

## Status

✅ Completed