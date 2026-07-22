# 🎨 DESIGN.MD - Design System & Visual Specification

> **Design System Name**: FlowGlass UI  
> **Aesthetic Philosophy**: Dark Glassmorphism, Modern Dashboard Architecture, Luminous Neon Accents, High Contrast Legibility.

---

## 1. Color System & Design Tokens

### Background & Surface Hierarchy
```css
--bg-workspace:    #0f172a; /* Tailwind slate-900 */
--bg-sidebar:      #020617; /* Tailwind slate-950 */
--bg-card:         rgba(2, 6, 23, 0.8); /* Slate 950 glass */
--border-subtle:   #1e293b; /* Tailwind slate-800 */
--border-highlight: rgba(99, 102, 241, 0.4); /* Indigo glow */
```

### Course Card Palette Definitions
| Category | Token / Class | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Indigo** | `bg-indigo-500/15 text-indigo-300 border-indigo-500/40` | `#6366f1` | Computer Science / Core STEM |
| **Sky** | `bg-sky-500/15 text-sky-300 border-sky-500/40` | `#0ea5e9` | Mathematics & Statistics |
| **Amber** | `bg-amber-500/15 text-amber-300 border-amber-500/40` | `#f59e0b` | Physics & Hard Sciences |
| **Emerald** | `bg-emerald-500/15 text-emerald-300 border-emerald-500/40` | `#10b981` | History & Social Studies |
| **Rose** | `bg-rose-500/15 text-rose-300 border-rose-500/40` | `#f43f5e` | English & Writing |
| **Violet** | `bg-violet-500/15 text-violet-300 border-violet-500/40` | `#8b5cf6` | Economics & Business |

---

## 2. Typography Specification

The application pairs a modern Sans-Serif variable font for UI text with a crisp Monospace font for data numbers, times, and mathematical expressions.

- **Primary UI Font**: `Inter`, `-apple-system`, `sans-serif`
  - Body text: `12px` / `0.75rem` (`text-xs`)
  - Subheaders: `14px` / `0.875rem` (`text-sm`, `font-semibold`)
  - Section Headers: `18px` / `1.125rem` (`text-lg`, `font-bold`)
- **Data & Monospace Font**: `JetBrains Mono`, `Consolas`, `monospace`
  - Match score, times (`09:00 - 10:15`), RateMyProfessor ratings (`⭐ 4.9`), and course section IDs (`CS101-01`).

---

## 3. Grid Systems & Layout Math

### Calendar Grid Structure
```
+----------------+------------+------------+------------+------------+------------+
| Time (60px)    | Mon (M)    | Tue (T)    | Wed (W)    | Thu (Th)   | Fri (F)    |
+----------------+------------+------------+------------+------------+------------+
| 08:00 - 18:00  | Column 1   | Column 2   | Column 3   | Column 4   | Column 5   |
+----------------+------------+------------+------------+------------+------------+
```

### Class Card Position Formula
Given a grid starting at 08:00 AM (480 minutes) and ending at 06:00 PM (1080 minutes):
$$\text{TotalGridMinutes} = 1080 - 480 = 600 \text{ mins}$$
$$\text{Top \%} = \left( \frac{\text{startMinutes} - 480}{600} \right) \times 100$$
$$\text{Height \%} = \left( \frac{\text{endMinutes} - \text{startMinutes}}{600} \right) \times 100$$

---

## 4. UI Components & Micro-Interactions

### 4.1 Custom Range Sliders
Styled with Tailwind `accent-indigo-500`, smooth track background `bg-slate-800`, and active numerical value feedback badges.

### 4.2 Buttons & Interactive Cards
- **Active State Scale**: `active:scale-[0.98]` micro-compression feedback.
- **Hover Transitions**: `transition-all duration-200 ease-in-out` with subtle glow shadow (`shadow-indigo-500/25`).
- **Calendar Card Scale**: `hover:scale-[1.02] hover:z-10` on hover for easy inspection.
