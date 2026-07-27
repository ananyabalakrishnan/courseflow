/**
 * Calendar export helper module.
 * Generates ICS content and triggers file downloads for schedules.
 */

function formatScheduleAsICS(schedule, options = {}) {
    const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//CourseFlow//EN'
    ];

    schedule.forEach((section, index) => {
        const start = section.startTime.replace(':', '') + '00';
        const end = section.endTime.replace(':', '') + '00';
        const uid = `courseflow-${section.courseId}-${index}@courseflow.local`;
        lines.push('BEGIN:VEVENT');
        lines.push(`UID:${uid}`);
        lines.push(`SUMMARY:${section.courseId} ${section.sectionId}`);
        lines.push(`DESCRIPTION:${section.courseTitle} - ${section.professor}`);
        lines.push(`DTSTART:${options.datePrefix || '20260101T'}${start}`);
        lines.push(`DTEND:${options.datePrefix || '20260101T'}${end}`);
        lines.push(`LOCATION:${section.building}`);
        lines.push('END:VEVENT');
    });

    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
}

function downloadCalendarFile(schedule, filename = 'courseflow-schedule.ics', options = {}) {
    const content = formatScheduleAsICS(schedule, options);
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return { filename, content };
    }

    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatScheduleAsICS, downloadCalendarFile };
}
