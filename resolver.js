/**
 * Conflict resolver utility module.
 * Provides theme switching and conflict resolution helpers.
 */

function applyThemeMode(theme = 'light') {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    return root.classList.contains('dark') ? 'dark' : 'light';
}

function resolveCourseConflicts(schedule) {
    const conflictGroups = [];
    schedule.forEach((section, index) => {
        for (let j = index + 1; j < schedule.length; j += 1) {
            if (section.day === schedule[j].day && section.startTime < schedule[j].endTime && schedule[j].startTime < section.endTime) {
                conflictGroups.push({ a: section, b: schedule[j] });
            }
        }
    });
    return conflictGroups;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { applyThemeMode, resolveCourseConflicts };
}
