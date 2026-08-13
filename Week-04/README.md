# Week 4 – Frontend AI Engineering

This folder contains all work completed during **Week 4** of the FlyRank Frontend AI Engineering program.

The focus of this week was building accessible React components from first principles, understanding WAI-ARIA interaction patterns, implementing keyboard accessibility, and comparing hand-built components with open-code components from shadcn/ui.

---

## Assignments

### FE-05 – Accessible Component Fundamentals

**Objective**

Build three interactive and keyboard-accessible components from scratch in React + TypeScript and implement them according to established WAI-ARIA patterns.

The assignment focuses on understanding accessibility fundamentals before relying on AI-generated or pre-built components.

**Key Activities**

- Build a Modal Dialog from scratch
- Build accessible Tabs from scratch
- Build an accessible Disclosure component
- Implement appropriate ARIA semantics
- Support keyboard-only interaction
- Implement modal focus trapping and focus restoration
- Test keyboard navigation and interaction
- Review shadcn/ui open-code Dialog and Tabs implementations
- Document gaps between the hand-built components and shadcn/ui

---

## Learning Outcomes

By completing this week's assignment, I learned how to:

- Implement accessible interactive components in React
- Apply WAI-ARIA patterns to common UI widgets
- Handle keyboard interactions without relying on component libraries
- Manage focus correctly inside modal dialogs
- Restore focus after closing a modal
- Implement arrow-key navigation for tabs
- Understand the difference between semantic HTML and ARIA requirements
- Review accessibility-focused component source code
- Compare custom implementations with production-oriented component implementations
- Identify accessibility and engineering gaps in AI-assisted component development

---

## Repository Structure

```text
Week-4/
│
├── README.md
│
└── FE-05_Accessible-Component-Fundamentals/
    ├── README.md
    ├── NOTES.md
    ├── SHADCN-SOURCE-REVIEW.md
    │
    └── playground/
        ├── src/
        │   ├── components/
        │   │   ├── Disclosure.tsx
        │   │   ├── Modal.tsx
        │   │   ├── Tabs.tsx
        │   │   └── ui/
        │   │       ├── dialog.tsx
        │   │       └── tabs.tsx
        │   │
        │   ├── App.tsx
        │   ├── App.css
        │   ├── index.css
        │   ├── main.tsx
        │   └── vite-env.d.ts
        │
        ├── package.json
        ├── tsconfig.json
        ├── vite.config.ts
        └── index.html