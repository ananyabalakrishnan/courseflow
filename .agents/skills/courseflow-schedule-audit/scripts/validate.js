const fs = require('fs');
const path = require('path');

// Look for courses.json in the project root directory
const coursesPath = path.join(process.cwd(), 'courses.json');

if (!fs.existsSync(coursesPath)) {
    console.error("❌ Error: courses.json was not found in the root workspace directory.");
    process.exit(1);
}

try {
    const rawData = fs.readFileSync(coursesPath, 'utf8');
    const courses = JSON.parse(rawData);

    console.log(`\n🔍 Auditing ${courses.length || 0} course entries from courses.json...\n`);

    const warnings = [];
    const validDays = ['M', 'T', 'W', 'Th', 'F'];

    // 1. Schema Validation
    courses.forEach((course, index) => {
        const idLabel = course.id ? `${course.id} (Section ${course.section || 'N/A'})` : `Item #${index}`;

        if (!course.id) warnings.push(`[Schema] ${idLabel} is missing an 'id'.`);
        if (!course.startTime || !course.endTime) warnings.push(`[Schema] ${idLabel} is missing start or end times.`);
        if (!course.days || !Array.isArray(course.days) || course.days.length === 0) {
            warnings.push(`[Schema] ${idLabel} has no days assigned.`);
        } else {
            const invalidDays = course.days.filter(d => !validDays.includes(d));
            if (invalidDays.length > 0) {
                warnings.push(`[Schema] ${idLabel} contains invalid day code(s): ${invalidDays.join(', ')}.`);
            }
        }
    });

    // 2. Conflict & Overlap Check
    for (let i = 0; i < courses.length; i++) {
        for (let j = i + 1; j < courses.length; j++) {
            const c1 = courses[i];
            const c2 = courses[j];

            if (!c1.days || !c2.days || !c1.startTime || !c1.endTime || !c2.startTime || !c2.endTime) continue;

            // Check if they share any days
            const sharedDays = c1.days.filter(day => c2.days.includes(day));
            if (sharedDays.length > 0) {
                // Time comparison
                if (c1.startTime < c2.endTime && c1.endTime > c2.startTime) {
                    warnings.push(`[Conflict] Overlap between ${c1.id} (${c1.startTime}-${c1.endTime}) and ${c2.id} (${c2.startTime}-${c2.endTime}) on days: ${sharedDays.join(', ')}.`);
                }
            }
        }
    }

    // 3. Report Results
    if (warnings.length > 0) {
        console.warn("⚠️ Audit Warnings Found:");
        warnings.forEach(w => console.warn(`  • ${w}`));
        console.log(`\nTotal warnings: ${warnings.length}`);
    } else {
        console.log("✨ All course entries match the CourseFlow schema with no time conflicts!");
    }

} catch (err) {
    console.error("❌ Failed to parse courses.json:", err.message);
}