# CourseFlow 🎓

CourseFlow is an interactive full-stack web application designed to help university students plan, build, and optimize their class schedules. It features automated schedule generation, conflict checking, professor rating integrations, and persistent local backend storage.

---

## 🚀 Features

- **Interactive Course Management:** Easily add or remove courses, sections, times, locations, and professor info.
- **Automated Schedule Solver:** Instantly generates valid, non-overlapping schedule combinations.
- **Backend Persistence:** Automatically fetches and saves course data to `courses.json` using an Express REST API.
- **Responsive UI:** Modern, clean user interface built with Tailwind CSS and Lucide icons.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS, Lucide Icons
- **Backend:** Node.js, Express.js
- **Storage:** JSON file storage (`courses.json`)

---

## 🏁 Getting Started

Follow these steps to set up and run CourseFlow on your local machine.

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### 2. Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/courseflow.git
   cd courseflow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## 💻 Running the Application

### Option A: Development Mode (with hot-reloading)
Runs the backend server using `nodemon` to automatically restart on file changes:
```bash
npm run dev
```

### Option B: Production Mode
Runs the backend server directly with Node.js:
```bash
npm start
```

---

## 🌐 Accessing the App

Once the server is running, open your browser and navigate to:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
courseflow/
├── server.js          # Express.js backend server API
├── courses.json       # Backend database / JSON storage
├── index.html         # Main frontend application interface
├── package.json       # Node project configuration & dependencies
└── README.md          # Project documentation
```
