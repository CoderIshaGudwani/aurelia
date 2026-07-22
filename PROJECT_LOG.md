
# PROJECT LOG

## Sprint 0

✔ Created React app with Vite
✔ Installed Bootstrap
✔ Created Navbar
✔ Created Hero

---

## Sprint 1

✔ Added Google Font
✔ Created global design system
✔ Started premium landing page

## Sprint 2

- Added global styling system
- Installed Git
- Initialized local repository
- Started professional version control workflow


## Sprint 3

- Installed Git
- Initialized local Git repository
- Created first Git commit
- Installed React-Bootstrap
- Built premium glassmorphism navbar
- Improved landing page styling

## SPRINT 4

- Added React Router.
- Created Login, Register and Dashboard pages.
- Implemented routing with BrowserRouter.
- Built the first version of the Login page with a glassmorphism design.
- Connected Login and Register pages using React Router Link.

## SPRINT 5 - Dashboard Foundation

### Features Added
- Created Dashboard page layout
- Added Sidebar navigation
- Added Topbar with welcome message
- Added Dashboard cards:
  - Focus Timer
  - Today's Tasks
  - Evolution Progress
- Hid Navbar on Dashboard
- Improved dashboard structure for future Task CRUD and Pomodoro integration

### Progress
Aurelia now has separate public pages (Landing, Login, Register) and an application dashboard ready for upcoming features.

## Day 9

### Features Completed
- Built complete Task CRUD.
- Added Local Storage persistence.
- Added Edit Task functionality.
- Added XP Progress system.
- Created functional Pomodoro timer component.


## Day 10

- Added task search functionality.
- Added task filtering (All, Active, Completed).
- Added task sorting (Newest / Oldest).
- Added task priority (High, Medium, Low).
- Added due date support.
- Added delete completed tasks feature.
- Added clear all tasks feature.
- Created reusable TaskList component.
- Created reusable StatisticsCard component.
- Added productivity statistics dashboard.
- Improved sidebar styling.
- Added glassmorphism cards and better UI.

# 🎓 What I Learned Today

- ✅ How `package.json` scripts work.
- ✅ What `npm run dev` actually does.
- ✅ Difference between CommonJS and ES Modules.
- ✅ Why `"type": "module"` matters.
- ✅ Why ES Modules require `.js` in local imports.
- ✅ How to read and understand Node.js error messages.
- ✅ Why backend development often starts with debugging the project setup before writing business logic.

---

Today wasn't about building new features—it was about setting up a solid backend foundation. I learned how Node.js starts an application, how ES Modules work, how npm scripts are executed, and how to debug common backend setup issues. These are core skills that will help me in every future Node.js and MERN project.

## Milestone 3 - Task CRUD Backend

✅ Added JWT Authentication Middleware

Status:
- Verifies JWT
- Protects private routes
- Stores decoded user in req.user

## Milestone 3 - Task CRUD Backend

✅ Created taskRoutes.js

Added protected CRUD routes:

- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

All routes now use JWT middleware.

## Milestone 3 - Task CRUD Backend

✅ Implemented Task Controller

Completed:
- Get Tasks
- Create Task
- Update Task
- Delete Task

Each operation is restricted to the logged-in user.


## Milestone 3 - Task CRUD Backend

🔄 Backend API testing started.

Endpoints under test:
- Register
- Login
- Create Task
- Get Tasks
- Update Task
- Delete Task

## Milestone 3 Completed ✅

Backend completed:

- JWT Middleware
- Protected Task Routes
- Task CRUD Controllers
- MongoDB Integration
- CRUD API Tested