# 🤖 AGENTS.MD - AI Coding Agent Guidelines & Operating Manual

> **Scope**: Instructions, behavioral guardrails, architectural standards, and workflows for AI coding agents (Antigravity, Copilot, Cursor, etc.) working on this repository.

---

## 1. Core Principles & Philosophy

As an AI coding agent pair-programming on this project, you must adhere to these foundational rules:

1. **Obey Explicit Directives**: Always enforce user-specified constraints, layout boundaries, and technology choices without alteration.
2. **Never Guess Schemas or Paths**: Inspect authoritative files (`index.html`, `script.js`, `styles.css`) before assuming variable names, state shapes, or DOM element IDs.
3. **No Superficial Symptom Patches**: Never resolve runtime errors by wrapping broken code in silent `try/catch` blocks, returning dummy fallbacks, or disabling validations. Address the root cause.
4. **Empirical Runtime Verification**: Never claim a feature is complete or a bug is fixed without executing build/test commands or fetching runtime verification (e.g., local HTTP server response).
5. **Zero Placeholders Rule**: All UI elements, images, and logic must be complete and fully functional. Do not output dummy `lorem ipsum` text or unfinished code stubs.

---

## 2. Repository Structure

```
CLIProxyAPI/
├── courseflow/
│   └── index.html          # CourseFlow Smart Schedule Optimizer (Single-file SPA)
├── calculator/
│   ├── index.html          # OmniCalc Pro HTML Structure
│   ├── styles.css          # Glassmorphism Design System & Themes
│   └── script.js           # Core Math Engine & Audio Synthesizer
├── static/
│   └── management.html     # Proxy API Management Console
├── agents.md               # AI Agent Guidelines (This Document)
├── project_requirements.md # Product Requirements Document (PRD)
├── architecture.md         # System Architecture & Tech Stack Map
├── conventions.md          # Code Conventions & Linting Standards
├── features.md             # Functional Feature Specification
├── design.md               # Design System & UI Specification
└── database.md             # Data Models & Persistence Strategy
```

---

## 3. Technology Stack Guidelines

- **Tailwind CSS**: Used via CDN (`https://cdn.tailwindcss.com`) for utility-first responsive styling in `courseflow/index.html`.
- **Lucide Icons**: Used via CDN script (`https://unpkg.com/lucide@latest`). Always call `lucide.createIcons();` after dynamically modifying DOM elements containing `data-lucide` attributes.
- **Vanilla JavaScript (ES6+)**: Zero framework overhead. Use clean state-driven UI rendering functions (`renderUI()`, `solveSchedules()`).
- **Web Audio API**: Used in `calculator/script.js` for synthesizing UI sound FX without external audio assets.

---

## 4. Workflows for AI Agents

### Feature Implementation Protocol
1. **Analyze**: Read `project_requirements.md` and `features.md` to understand scope and acceptance criteria.
2. **Inspect Existing State**: View target files (`courseflow/index.html`, `calculator/script.js`) to verify current variables, data structures, and element IDs.
3. **Modify**: Apply edits using precision file replacement tools. Ensure HTML tags, Tailwind classes, and JS functions remain syntactically sound.
4. **Verify**: Run Python HTTP server or browser check commands (`python -m http.server <port>`) and read HTTP response content to ensure error-free rendering.
5. **Document**: Update relevant `.md` documentation files if data schemas or feature sets were altered.

---

## 5. Do's and Don'ts

| Do 🟢 | Don't 🔴 |
| :--- | :--- |
| Maintain existing state management patterns (`appState`). | Do not introduce heavy node module dependencies unless requested. |
| Use exact element IDs (`sliderWeightProf`, `toggleNoFriday`). | Do not hardcode pixel offsets without relative grid calculations. |
| Call `lucide.createIcons()` after dynamic DOM rendering. | Do not mutate state directly outside designated state update methods. |
| Keep single-file HTML self-contained and ready for execution. | Do not leave broken event listeners or unhandled promise rejections. |
