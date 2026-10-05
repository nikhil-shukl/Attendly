# Attendly

Premium attendance management for campuses. This repository contains a React/Vite frontend and Express/MongoDB API.

## Quick start

1. Copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI` and a strong `JWT_SECRET`.
2. Run `npm install`, then `npm install --prefix frontend` and `npm install --prefix backend`.
3. Seed demo data: `npm run seed` (requires MongoDB).
4. Run `npm run dev` and open `http://localhost:5173`.

Demo accounts (development only): `admin@attendly.demo`, `faculty@attendly.demo`, and `student@attendly.demo`; password: `Attendly123!`.

## Architecture and assumptions

Authentication is JWT bearer-token based for this development slice. User credentials are separate from Student/Faculty profiles. Attendance eligibility is determined by submitted, non-cancelled sessions; records are unique per session/student. Faculty scope is enforced through `FacultyAssignment`. The server calculates percentages rather than persisting them as source-of-truth values.

The included vertical slice covers login, role-aware dashboards, attendance session creation and marking, student attendance analytics, and server-side scope/duplicate protections. Academic administration, QR presence, report exports, notification delivery, and correction approvals are structured as follow-on modules.
