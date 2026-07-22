# 🗄️ DATABASE.MD - Data Schemas, State Models & Persistence Strategy

> **System**: CourseFlow & OmniCalc Pro  
> **Storage Layer**: In-Memory JavaScript State (`appState`) + Browser `localStorage` API + Future Relational Schema Specification

---

## 1. Client State Data Models (TypeScript Interfaces)

### 1.1 Course Model (`Course`)
```typescript
interface Course {
    id: string;          // e.g. "CS 101"
    title: string;       // e.g. "Intro to Computer Science"
    credits: number;     // e.g. 4
    color: string;       // e.g. "indigo" | "sky" | "amber" | "emerald" | "rose" | "violet"
    sections: Section[]; // List of available sections
}
```

### 1.2 Section Model (`Section`)
```typescript
interface Section {
    id: string;          // e.g. "CS101-01"
    professor: string;   // e.g. "Dr. Alan Turing"
    rmp: number;         // RateMyProfessor score (1.0 - 5.0)
    days: string[];      // e.g. ["M", "W", "F"] or ["T", "Th"]
    startTime: string;   // HH:MM 24hr format, e.g. "09:00"
    endTime: string;     // HH:MM 24hr format, e.g. "10:15"
    building: string;    // e.g. "Engineering Quad"
    courseId?: string;   // Denormalized course ID parent reference
    courseTitle?: string;// Denormalized title reference
    credits?: number;    // Denormalized credit reference
    color?: string;      // Denormalized color reference
}
```

### 1.3 Campus Distance Matrix (`DistanceMatrix`)
```typescript
interface DistanceMatrix {
    [buildingFrom: string]: {
        [buildingTo: string]: number; // Transit time in minutes
    };
}

// Example Data:
// DISTANCE_MATRIX["Engineering Quad"]["Math Annex"] = 5;
// DISTANCE_MATRIX["Science Hall"]["Arts Building"] = 15;
```

### 1.4 Evaluated Schedule Option (`ScheduleOption`)
```typescript
interface ScheduleOption {
    sections: Section[];           // Combination of chosen sections
    matchScore: number;            // Final calculated match score (0 - 100)
    avgRmp: number;                // Average RateMyProfessor rating (e.g. 4.8)
    totalWalkingMinutes: number;   // Total transit time in minutes across week
    tightTransitionsCount: number; // Number of tight transit warnings
    tightAlerts: TightAlert[];     // Detailed transit alert objects
    totalCredits: number;          // Total credit hours (e.g. 17)
}

interface TightAlert {
    day: string;         // "M" | "T" | "W" | "Th" | "F"
    secA: string;        // First section course code
    secB: string;        // Second section course code
    walkMins?: number;   // Walking distance in minutes
    gapMins?: number;    // Available gap in minutes
}
```

---

## 2. Persistence Strategy (`localStorage`)

The application uses the browser's native `localStorage` API to persist user history, preferences, and custom courses across sessions:

| Storage Key | Data Format | Description |
| :--- | :--- | :--- |
| `omni_history` | JSON Array of `HistoryItem` | Stores past equation calculations, timestamps, and results in OmniCalc Pro. |
| `omni_theme` | String (e.g., `"theme-aurora"`) | Remembers the selected calculator glassmorphic theme. |
| `courseflow_saved` | JSON Array of `ScheduleOption` | Stores user's bookmarked / favorited semester schedules. |
| `courseflow_custom` | JSON Array of `Course` | Stores user-created custom courses and sections. |

---

## 3. Future Relational Database Schema (PostgreSQL Draft)

If migrating to a cloud backend (e.g., PostgreSQL with Supabase / Prisma), the following relational model is specified:

```sql
-- Courses Table
CREATE TABLE courses (
    id VARCHAR(20) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    credits INT NOT NULL DEFAULT 3,
    color VARCHAR(30) DEFAULT 'indigo',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sections Table
CREATE TABLE sections (
    id VARCHAR(30) PRIMARY KEY,
    course_id VARCHAR(20) REFERENCES courses(id) ON DELETE CASCADE,
    professor VARCHAR(100) NOT NULL,
    rmp_rating NUMERIC(3, 2) CHECK (rmp_rating >= 1.0 AND rmp_rating <= 5.0),
    days VARCHAR(20)[] NOT NULL, -- e.g. ARRAY['M', 'W', 'F']
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    building VARCHAR(100) NOT NULL
);

-- Campus Distance Matrix Table
CREATE TABLE campus_distances (
    from_building VARCHAR(100) NOT NULL,
    to_building VARCHAR(100) NOT NULL,
    walking_minutes INT NOT NULL,
    PRIMARY KEY (from_building, to_building)
);

-- User Saved Schedules Table
CREATE TABLE user_saved_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    schedule_name VARCHAR(100) NOT NULL,
    match_score INT NOT NULL,
    sections_json JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
