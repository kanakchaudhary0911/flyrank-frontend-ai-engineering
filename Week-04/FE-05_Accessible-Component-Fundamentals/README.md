# Week 4 – Frontend AI Engineering

This folder contains the work completed during **Week 4** of the FlyRank Frontend AI Engineering program.

The focus of this week was building accessible React components from scratch using **React + TypeScript**, following **WAI-ARIA accessibility patterns**, and reviewing production-style component implementations.

---

## Assignment

### FE-05 – Accessible Component Fundamentals

**Objective**

Build reusable and keyboard-accessible UI components from scratch while understanding accessibility patterns, keyboard interactions, focus management, and ARIA semantics.

The assignment also includes a source-level review of **shadcn/ui Base UI** components to compare the hand-built implementations with an established component library.

---

## Key Activities

- Build an accessible Modal Dialog from scratch
- Implement keyboard navigation and focus management
- Add proper ARIA dialog semantics
- Build accessible Tabs with keyboard interaction
- Build an accessible Disclosure component
- Test components using keyboard navigation
- Review open-source shadcn/ui Base UI Dialog and Tabs implementations
- Compare custom implementations with library-based components
- Document accessibility and implementation decisions

---

## Components Implemented

### 1. Modal Dialog

The Modal Dialog demonstrates:

- Open and close functionality
- Keyboard accessibility
- Focus management
- Focus return to the trigger button
- `Escape` key support
- `Tab` and `Shift + Tab` navigation
- ARIA dialog semantics
- Accessible labeling

### 2. Tabs

The Tabs component demonstrates:

- Keyboard-accessible tab navigation
- Active tab state
- Tab panel switching
- ARIA tab semantics
- Accessible relationships between tabs and panels

### 3. Disclosure

The Disclosure component demonstrates:

- Expand/collapse interaction
- Keyboard-accessible button behavior
- ARIA expanded state
- Accessible relationship between trigger and content

---

## shadcn/ui Source Review

The project also includes a source-level review of the **shadcn/ui Base UI Dialog and Tabs implementations**.

The reviewed source files are available in:

```text
playground/
└── src/
    └── components/
        └── ui/