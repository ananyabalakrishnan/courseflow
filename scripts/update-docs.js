const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '..', 'DOCS.md');
const timestamp = new Date().toISOString();

const logEntry = `\n- **[Auto-Doc Update]** Commit prepared at ${timestamp}`;

fs.appendFileSync(logPath, logEntry, 'utf8');
console.log("📝 Updated DOCS.md documentation via Husky hook.");