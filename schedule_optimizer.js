/**
 * Schedule Optimizer V2 helper module
 * Provides conflict scoring, schedule evaluation, and optimization utilities.
 */

const COURSE_COLORS = ["indigo", "sky", "amber", "emerald", "rose", "violet"];

function parseTimeSlot(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function timeRangeOverlaps(first, second) {
    return first.start < second.end && second.start < first.end;
}

function normalizeSection(section) {
    return {
        ...section,
        start: parseTimeSlot(section.startTime),
        end: parseTimeSlot(section.endTime)
    };
}

function hasSectionConflict(a, b) {
    if (a.day !== b.day) return false;
    return timeRangeOverlaps(normalizeSection(a), normalizeSection(b));
}

function computeConflictScore(schedule) {
    const conflicts = [];
    for (let i = 0; i < schedule.length; i += 1) {
        for (let j = i + 1; j < schedule.length; j += 1) {
            if (hasSectionConflict(schedule[i], schedule[j])) {
                conflicts.push({ a: schedule[i], b: schedule[j] });
            }
        }
    }
    return conflicts.length * 25;
}

function computeScheduleScore(schedule, options = {}) {
    const baseRating = schedule.reduce((sum, section) => sum + (section.rating || 4.0), 0);
    const averageRating = schedule.length ? baseRating / schedule.length : 0;
    const conflictPenalty = computeConflictScore(schedule);
    const walkPenalty = schedule.reduce((penalty, section, index) => {
        if (index === 0) return penalty;
        const prev = schedule[index - 1];
        if (prev.day !== section.day) return penalty;
        const distance = (options.distanceMatrix?.[prev.building]?.[section.building] ?? 10);
        return penalty + Math.max(0, distance - 5);
    }, 0);

    return Math.max(0, Math.round((averageRating * 20) - conflictPenalty - walkPenalty));
}

function optimizeScheduleList(schedules, options = {}) {
    return schedules
        .map(schedule => ({
            schedule,
            score: computeScheduleScore(schedule, options),
            conflicts: computeConflictScore(schedule)
        }))
        .sort((a, b) => b.score - a.score);
}

function describeScheduleIssues(schedule) {
    const conflicts = [];
    schedule.forEach((section, index) => {
        for (let j = index + 1; j < schedule.length; j += 1) {
            if (hasSectionConflict(section, schedule[j])) {
                conflicts.push(`${section.courseId} conflicts with ${schedule[j].courseId} on ${section.day}`);
            }
        }
    });
    return conflicts;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        parseTimeSlot,
        hasSectionConflict,
        computeScheduleScore,
        optimizeScheduleList,
        describeScheduleIssues,
        COURSE_COLORS
    };
}
