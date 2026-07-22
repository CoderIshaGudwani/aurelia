# LEARNINGS

## React

### Global CSS

- Global CSS is imported only once in `main.jsx`.
- Every component automatically gets access to it.
- Utility classes like `.glass` and `.fade-up` can be reused anywhere.

---

### useEffect

- Used for side effects.
- Cleanup functions prevent memory leaks.

## Git (2)

- Git tracks changes locally.
- `git init` creates a repository.
- `git status` shows tracked and untracked files.
- `git add .` stages changes.
- `git commit` creates a snapshot.

## Git

- `git init` creates a Git repository.
- `git add .` stages all changes.
- `git commit -m "message"` creates a snapshot.
- `git log --oneline` shows commit history in a compact format.

## React

- If a package cannot be found, read the error carefully.
- Install missing packages using npm.
- Example:
  npm install react-bootstrap

  ## React

- Third-party libraries must be installed before importing them.
- Error messages often tell you exactly what is missing.
- React-Bootstrap provides Bootstrap components as React components.

## Git

### New Learning

- Created my first Git repository.
- Made my first Git commit.
- Learned how `git add`, `git commit`, and `git log --oneline` work.

## React Router

- BrowserRouter wraps the entire application.
- Routes define different pages.
- Route maps a URL to a component.
- Link changes pages without reloading the browser.
- React components use PascalCase (Link, BrowserRouter, Routes).

# Day 8 Learning

## React
- Learned how to split a page into reusable components.
- Used React Router to navigate between pages.
- Imported and combined multiple components into one page.

## Bootstrap
- Used Flexbox (`d-flex`) to create a Sidebar + Content layout.
- Used `flex-grow-1` to let the main content fill the remaining space.
- Used Bootstrap Grid (`row`, `col`) to create responsive dashboard cards.
- Used Bootstrap Cards and Progress Bar components.

## UI/UX
- Learned that dashboards should present important information at a glance.
- Understood the difference between a Landing Page and an Application Dashboard.
- Started designing UI around the Aurelia theme instead of generic CRUD layouts.

## Project Architecture
- Kept components modular:
  - Sidebar
  - Topbar
  - DashboardHome
- Prepared the dashboard for future Task CRUD and Pomodoro features.

## Day 10

### React
- Component splitting
- Props
- State management
- Conditional rendering
- Reusable components

### JavaScript
- filter()
- map()
- sort()
- includes()
- spread operator (...)

### UI
- Glassmorphism
- Hover animations
- Flexbox
- Bootstrap Grid
- CSS transitions

### Architecture
- Keeping large components modular
- Passing data between parent and child components


# 🎓 What I Learned Today

- ✅ How `package.json` scripts work.
- ✅ What `npm run dev` actually does.
- ✅ Difference between CommonJS and ES Modules.
- ✅ Why `"type": "module"` matters.
- ✅ Why ES Modules require `.js` in local imports.
- ✅ How to read and understand Node.js error messages.
- ✅ Why backend development often starts with debugging the project setup before writing business logic.


# Express Router

- Express Router groups related endpoints.
- Middleware can protect an entire router using router.use().
- Routes are separated from controller logic for cleaner code.



# Task Controller

- Controllers contain business logic.
- Mongoose methods like find(), create(), findOneAndUpdate(), and findOneAndDelete() interact with MongoDB.
- Filtering by user ensures each user only accesses their own tasks.

# Testing APIs

- Always test backend endpoints before connecting the frontend.
- JWT token must be included in the Authorization header for protected routes.
- CRUD operations should be verified independently to simplify debugging.

# Backend CRUD

A standard Express backend is organized into:

- Routes → define endpoints
- Middleware → authenticate requests
- Controllers → business logic
- Models → database schema

Keeping these layers separate makes the code scalable and maintainable.