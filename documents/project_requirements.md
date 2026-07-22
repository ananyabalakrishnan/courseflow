# 📋 PROJECT_REQUIREMENTS.MD - Product Requirements Document (PRD)

> **Project Name**: CourseFlow & OmniCalc Pro Suite  
> **Target Audience**: College & University Students, Academic Advisors, Power Users  
> **Status**: Production Ready / Active Development

---

## 1. Executive Summary

Students frequently struggle with semester course planning due to time conflicts, professor quality variations, and long transit distances across sprawling university campuses. 

**CourseFlow** solves this problem by providing an automated **Constraint Satisfaction & Schedule Optimization Engine** that evaluates hundreds of possible class section combinations in real time. It balances user preferences (RateMyProfessor scores, campus walking times, start times, and Friday class exclusions) to generate an optimal weekly timetable.

Complementing CourseFlow, **OmniCalc Pro** provides a full-fledged scientific, programmer, and unit conversion calculator suite to assist students in technical coursework.

---

## 2. User Personas

### Persona A: Alex (Engineering Sophomore)
- **Goal**: Needs to take 5 heavy STEM courses (`CS 101`, `MATH 302`, `PHYS 201`).
- **Pain Point**: Engineering buildings and Science halls are on opposite sides of campus (15+ min walk). Needs to avoid tight 10-minute campus transitions.
- **Usage**: Sets the *Minimize Walking Time* slider to 90% and enables *Max 2 Back-to-Back Classes*.

### Persona B: Jordan (Liberal Arts Senior)
- **Goal**: Wants a balanced 4-day schedule with top-rated faculty.
- **Pain Point**: Hates 8:00 AM classes and Friday lectures.
- **Usage**: Enables *No Friday Classes*, sets *Earliest Start Time* to 10:00 AM, and sets *Maximize Professor Rating* weight to 100%.

---

## 3. Functional Requirements

### FR-1: Course & Section Data Management
- Pre-loaded with mock university course catalog (at least 6 core courses across Computer Science, Math, Physics, History, English, Economics).
- Support for multiple section options per course with details: Section ID, Professor Name, RateMyProfessor Score (1.0 to 5.0), Days (`M`, `T`, `W`, `Th`, `F`), Start/End Time (`HH:MM`), and Building Location.
- Ability for users to add custom courses and sections dynamically via an in-app modal interface.

### FR-2: Campus Distance & Transit Matrix
- Lookup map containing walking distances in minutes between campus locations (`Engineering Quad`, `Math Annex`, `Science Hall`, `Humanities Center`, `Arts Building`, `Tech Center`).
- Automatic detection of back-to-back classes with insufficient walking break buffers (< 15-minute gap with > 10-minute walk).

### FR-3: Hard Constraint Filtering Engine
- **Overlapping Slot Rejection**: Eliminate any schedule where two class times overlap on shared days.
- **No Friday Classes**: Filter out schedules containing Friday sessions when toggle is active.
- **Earliest Preferred Start Time**: Reject schedules with classes starting before the selected hour (08:00 AM - 11:00 AM).
- **Max Consecutive Classes**: Enforce limits on back-to-back class chains (Max 1, 2, or 3).

### FR-4: Multi-Objective Ranking & Optimization
- Calculate normalized score (0–100) combining:
  1. Average RateMyProfessor rating score.
  2. Total campus walking time penalty across all weekly transitions.
- Allow dynamic weight adjustments via UI sliders with instant re-ranking of valid options.

### FR-5: Visual Timetable & Metrics Dashboard
- 5-Day (Mon–Fri) visual calendar grid with time slots from 08:00 AM to 06:00 PM.
- Color-coded section cards positioned dynamically based on exact class duration.
- Summary dashboard metrics: Overall Match Score, Total Transit Minutes, Average Professor Score, Total Credit Hours.
- Visual warning badges for tight campus transitions.

---

## 4. Non-Functional Requirements

- **Performance**: Solver execution and UI re-rendering must take less than 50 milliseconds for up to 1000 combinations.
- **Offline-First / Zero Dependencies**: Operates entirely client-side in the browser without external backend server dependencies.
- **Responsiveness**: Fluid layout across desktop displays (1920x1080), laptops (1366x768), and tablet screens.
- **Accessibility**: High contrast dark theme, clear typography hierarchy, and full keyboard navigation (arrow keys for schedule browsing).
