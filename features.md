# 🚀 FEATURES.MD - Complete Feature Catalog & Specifications

> **System**: CourseFlow & OmniCalc Pro  
> **Overview**: Detailed inventory of functional features, user capabilities, and interactive workflows across the suite.

---

## 1. CourseFlow: Smart Schedule Optimizer Features

### F-1.1: Interactive Course Catalog & Selector
- Multi-select checkbox checklist displaying course code, full title, credit hours, and available section count.
- Quick action buttons: **Select All** and **Clear All**.
- Live course & section counter in top header.

### F-1.2: Hard Constraint Filter Controls
- **No Friday Classes Toggle**: Instantly excludes any section running on Friday (`F`).
- **Earliest Preferred Start Time Selector**: Filters out early morning classes (08:00 AM, 09:00 AM, 10:00 AM, 11:00 AM).
- **Max Consecutive Classes Limit**: Restricts back-to-back class chains to prevent student burnout (Max 1, Max 2, Max 3, or No Limit).

### F-1.3: Multi-Objective Ranking Sliders
- **Professor Rating Weight Slider (0–100%)**: Adjusts priority for RateMyProfessor scores.
- **Min Walking Time Weight Slider (0–100%)**: Adjusts penalty weight for long campus transit times between back-to-back classes.
- Dynamic instant recalculation of match scores upon slider movement.

### F-1.4: Visual Weekly Calendar Grid
- 5-Day Mon–Fri timetable spanning 08:00 AM to 06:00 PM.
- Precise percentage-based top offset and card height positioning calculated from class start/end times.
- Color-coded course cards featuring Course Code, Section ID, Professor Name, ⭐ RateMyProfessor badge, Time Range, and Building Location.

### F-1.5: Transit Warning System
- Realtime detection of tight campus transitions between consecutive classes where walking distance exceeds available break buffer.
- Glowing amber warning badge on calendar blocks and dedicated warning alert bar (`Notice: 1 tight transition between back-to-back classes`).

### F-1.6: Option Navigator & Sort Controls
- Schedule option pagination (`Option 1 of 12`) with Previous/Next controls and keyboard arrow navigation (`←` / `→`).
- Sort selector dropdown: *Highest Match Score*, *Top Rated Professors*, *Least Walking Distance*.
- Export schedule data to JSON file and Save/Favorite button.

### F-1.7: Custom Course Creation Modal
- Modal dialog allowing students to add new custom courses and sections on the fly (Course Code, Title, Professor, RMP rating, Days, Building, Start/End times).

---

## 2. OmniCalc Pro: Calculator Suite Features

### F-2.1: Multi-Mode Scientific Engine
- **Standard Mode**: Basic operations (`+`, `-`, `×`, `÷`, `%`, `±`, `√`) and memory tools (`MC`, `MR`, `M+`, `M-`, `MS`).
- **Scientific Mode**: Trigonometric functions (`sin`, `cos`, `tan`, `asin`, `acos`, `atan`), logarithmic (`log`, `ln`), exponential (`x²`, `xʸ`), constants (`π`, `e`), factorial (`n!`), and DEG/RAD angle toggling.
- **Programmer Mode**: Realtime radix conversion between **HEX**, **DEC**, **OCT**, and 16-bit **BIN** displays.
- **Unit Converter**: Realtime unit conversion across 7 categories (Length, Weight, Temperature, Area, Volume, Speed, Digital Storage).

### F-2.2: Audio FX & Glassmorphic Themes
- Web Audio API click sound synthesis with mute toggle.
- 5 Theme Palettes: *Aurora Dark*, *Cyber Neon*, *OLED Obsidian*, *Sunset Ember*, *Emerald Glass*.
- Interactive equation history drawer with `.txt` export capability.
