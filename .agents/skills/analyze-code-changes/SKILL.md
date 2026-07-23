# Skill: Analyze CourseFlow Code Changes

## Purpose
Inspect code diffs in the CourseFlow repository and categorize updates.

## Execution Rules
1. **Optimization Engine:** Flag any changes to scheduling algorithms, time conflict resolvers, or course sorting.
2. **Backend API:** Flag new or modified Node.js Express routes or JSON data models.
3. **Frontend UI:** Flag new user-facing features or schedule view controls.

## Output Format
Return JSON summarizing the `change_type`, `affected_modules`, and `description`.