---
name: courseflow-schedule-audit
description: Audits CourseFlow schedule configurations for time conflicts, room distance feasibility, and professor rating optimization.
---

# CourseFlow Schedule Audit Skill

Use this skill whenever analyzing, debugging, or generating schedule configurations for the CourseFlow application.

## Core Domain Rules

1. **Course Data Structure**
   Each course section in `courses.json` must adhere to:
   ```json
   {
     "id": "PHYS-101",
     "section": "01",
     "title": "General Physics",
     "professor": "Dr. Smith",
     "rmp": 4.2,
     "days": ["M", "W", "F"],
     "startTime": "09:00",
     "endTime": "09:50"
   }

   