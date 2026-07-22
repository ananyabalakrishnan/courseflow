# 📜 CONVENTIONS.MD - Coding Standards & Architectural Guidelines

> **Purpose**: Establishes strict coding rules, naming conventions, architectural patterns, and guidelines for AI agents and human contributors working on this project.

---

## 1. JavaScript Coding Standards?

### General Rules
- Use modern **ES6+ syntax** (`const`, `let`, arrow functions, template literals, array destructuring).
- Avoid legacy `var` declarations or global namespace pollution.
- All state modifications must go through explicit state update workflows (`appState`).
- Keep code pure where possible (e.g., helper functions `timeToMinutes`, `cleanFloat`, `getWalkingDistance`).

### Naming Conventions
| Type | Convention | Example |
| :--- | :--- | :--- |
| **Variables & Functions** | `camelCase` | `solveSchedules`, `selectedCourseIds`, `timeToMinutes` |
| **Constants / Datasets** | `UPPER_SNAKE_CASE` | `INITIAL_COURSES`, `DISTANCE_MATRIX`, `COLOR_STYLES` |
| **DOM Element References** | `camelCase` matching element ID | `prevScheduleBtn`, `selectStartTime`, `courseChecklist` |
| **CSS Classes (Tailwind)** | Utility-first lowercase | `bg-slate-900 border-slate-800 text-indigo-400` |

---

## 2. HTML & DOM Conventions

- **Semantic Elements**: Use `<header>`, `<main>`, `<aside>`, `<nav>`, `<button>`, `<section>`, and `<form>` tags appropriately.
- **Unique IDs**: Every interactive DOM element MUST have a unique `id` attribute formatted in camelCase (e.g., `id="toggleNoFriday"`, `id="sliderWeightProf"`).
- **Accessibility Attributes**: Provide `aria-label`, `title`, `alt`, and `role` attributes for icon buttons and custom controls.
- **Lucide Icons**: Use standard `<i data-lucide="icon-name" class="w-4 h-4"></i>` markup. Always call `lucide.createIcons()` immediately following any dynamic HTML insertion.

---

## 3. Tailwind CSS & Design Token Conventions

- **Dark Theme Baseline**: Use `bg-slate-900` or `bg-slate-950` as background base layers, paired with `border-slate-800` for structural gridlines.
- **Accent Palette**:
  - Primary Action / Indigo: `bg-indigo-600`, `text-indigo-400`, `border-indigo-500/30`
  - Success / Emerald: `text-emerald-400`, `bg-emerald-500/10`
  - Warning / Amber: `text-amber-400`, `bg-amber-500/10`
  - Danger / Rose: `text-rose-400`, `bg-rose-500/10`
- **Card Glassmorphism**: Use `bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl`.

---

## 4. State Management Protocol

- The global application state object `appState` acts as the single source of truth:
```javascript
let appState = {
    courses: [],
    selectedCourseIds: [],
    noFriday: false,
    earliestStartTime: "09:00",
    maxConsecutive: 2,
    weightProf: 70,
    weightWalk: 80,
    sortMode: "score",
    generatedSchedules: [],
    activeScheduleIndex: 0
};
```
- **Rule**: Never mutate DOM directly without updating `appState`. Always trigger `renderUI()` or `renderCalendar()` after state modification.

---

## 5. Defensive Programming & Error Handling

- Guard against `undefined` or `null` array lookups when indexing schedule arrays (`appState.generatedSchedules[appState.activeScheduleIndex]`).
- Fallback gracefully when 0 valid schedules match user constraints by rendering a friendly empty state message.
- Ensure all numeric operations handle edge cases (`NaN`, division by zero, float precision cleaning).
