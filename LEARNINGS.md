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

- Split a large React component into smaller reusable components.
- Implemented task search, filtering, sorting and priority.
- Used localStorage to persist task data.
- Improved dashboard UI with custom CSS instead of relying only on Bootstrap.
- Learned the difference between Link and NavLink.