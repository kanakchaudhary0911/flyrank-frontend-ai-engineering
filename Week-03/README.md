# Week 3 – Frontend AI Engineering

This folder contains all work completed during **Week 3** of the FlyRank Frontend AI Engineering program.

The focus of this week was practical frontend engineering with AI as a development assistant. The work covers project planning, application development, routing, deployment preparation, debugging, testing, documentation, and manual improvements.

---

## Week 3 Overview

| Assignment | Title | Status |
|---|---|---|
| FE-03 | Capstone Skeleton and Deployment | ✅ Completed |
| FE-04 | React App Development with AI | ✅ Completed |

---

## Assignments

### FE-03 – Capstone Skeleton and Deployment

**Objective**

Build the initial skeleton of a professional developer portfolio using Next.js and prepare the application for deployment.

The project establishes the core structure of a portfolio application with reusable navigation, multiple routes, a health-check system, responsive styling, and production build validation.

**Main Routes**

- `/` – Home
- `/projects` – Projects / Case Studies
- `/about` – About
- `/contact` – Contact
- `/health` – Application Health Check
- `/api/health` – Health Check API

---

### FE-04 – React App Development with AI

**Objective**

Build a practical React application while using AI as a development assistant throughout the development process.

For this assignment, a practical **Job Application Tracker** was developed instead of a basic Todo application.

---

## Repository Structure

```text
Week-3/
│
├── README.md
│
├── FE-03_Capstone-Skeleton-and-Deployment/
│   ├── README.md
│   ├── AI_ASSISTANCE.md
│   ├── AI_PROMPTS.md
│   ├── DEPLOYMENT.md
│   ├── MANUAL_IMPROVEMENTS.md
│   └── app/
│
└── FE-04_React-App-Development-with-AI/
    ├── README.md
    ├── app/
    └── Docs/
        ├── AI_ASSISTANCE.md
        ├── AI_PROMPTS.md
        ├── MANUAL_IMPROVEMENTS.md
        └── WORKFLOW.md
```

---

## What I Learned

- Building a multi-page app with Next.js routing taught me how to structure navigation and layouts that scale beyond a single page.
- Adding a health-check API route showed how frontend and backend concerns meet even in a "frontend" project — small but important for deployment readiness.
- Building the Job Application Tracker reinforced that real applications need more than core features — search, filtering, and persistence (LocalStorage) change how a UI needs to be structured from the start.
- AI assistance is most useful for scaffolding and repetitive patterns, but debugging and correctness checks still needed close manual review.
- Documenting AI prompts and manual improvements side-by-side made it much clearer which decisions were AI-driven vs. my own judgment calls.
- Running a production build early (not just at the end) caught configuration issues before they became harder to debug.

---

## What I Enjoyed Most

- Seeing a blank Next.js skeleton grow into a working multi-route app with a real navigation flow felt like the most "production-like" work so far in the program.
- Building the Job Application Tracker was more satisfying than a typical Todo app — it felt like solving an actual problem instead of a tutorial exercise.
- Comparing AI-assisted code against my own manual fixes helped me notice patterns in where AI tends to over-simplify (e.g. edge cases, empty states).

---

## Week 3 Summary

Week 3 moved from isolated exercises into building real, structured applications — a portfolio skeleton ready for deployment and a practical Job Application Tracker. Both assignments reinforced that AI works best as a collaborator during planning and scaffolding, while manual review remains essential for correctness, edge cases, and production readiness.

---

## Week 3 Status

✅ **Week 3 Completed — All assignments finished, tested, and documented.**