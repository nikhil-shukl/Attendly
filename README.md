# 🎓 Attendly

### Smart Attendance Management for TCET

**Attendly** is a full-stack attendance management platform built for **Thakur College of Engineering & Technology (TCET), Mumbai**. It provides dedicated dashboards for students, faculty, and administrators to manage attendance, timetables, academic records, and reports.

## 🚀 Live Demo

- 🌐 **Frontend:** https://attendly-buddh369-4525s-projects.vercel.app
- ⚙️ **Backend API:** https://backend-buddh369-4525s-projects.vercel.app

## ✨ Features

### 👨‍🎓 Student
- View overall and subject-wise attendance
- Colour-coded attendance percentage
- Weekly timetable
- Attendance reports
- Secure registration and login

### 👨‍🏫 Faculty
- View assigned subjects and divisions
- Mark student attendance
- Track Present, Absent, Late & Excused status
- Review attendance sessions
- View timetable and reports

### 🛡️ Administrator
- Campus attendance overview
- Manage students and faculty
- Manage departments and subjects
- Monitor attendance operations
- Handle correction requests

## 🔐 Demo Accounts

**Password:** `Attendly123!`

| Role | Email |
|---|---|
| Admin | `admin@attendly.demo` |
| Student | `student1@attendly.demo` |
| Faculty | `faculty1@attendly.demo` |

Demo data includes **6 students, 6 faculty members, 6 subjects, timetable entries, and attendance records.**

## 🛠️ Tech Stack

**Frontend:** React, Vite, JavaScript, CSS, Axios, Lucide React  
**Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose  
**Authentication:** JWT, bcrypt  
**Validation:** Zod  
**Security:** Helmet, CORS, Express Rate Limit  
**Deployment:** Vercel  
**Version Control:** Git & GitHub

## 🏗️ Project Structure

```text
Attendly/
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── api/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── scripts/
│
└── package.json
```

## ⚙️ Run Locally

```bash
git clone https://github.com/nikhil-shukl/Attendly.git
cd Attendly

npm install
npm install --prefix frontend
npm install --prefix backend

npm run seed
npm run dev
```

> **Note:** The seed command resets the demo database and creates fresh users, subjects, timetable entries, and attendance records.

## ☁️ Deployment

- **Frontend:** Vercel
- **Backend:** Vercel Serverless Functions
- **Database:** MongoDB Atlas

## 🎯 Project Focus

Attendly demonstrates a real-world full-stack system with:

**Role-Based Access • Secure Authentication • REST APIs • Academic Management • Attendance Tracking**

---

⭐ **If you find Attendly useful, consider starring the repository!**

**GitHub:** https://github.com/nikhil-shukl/Attendly
