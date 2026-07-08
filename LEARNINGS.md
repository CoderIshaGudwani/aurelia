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