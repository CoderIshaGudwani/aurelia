# DEBUGGING LOG

## Issue 1

Global CSS was not applying.

### What I Checked

- Verified folder name.
- Verified file name.
- Checked import path.
- Looked for conflicting CSS.

### Root Cause

VS Code autocomplete wasn't suggesting the file.
The file itself was correct.

### Lesson

Don't rely on IntelliSense.
If the import path is correct and there are no errors, manually importing is completely fine.

## Issue 2

VS Code autocomplete didn't suggest global.css.

### Investigation

- Verified folder structure.
- Verified filename.
- Manually imported the file.

### Lesson

Don't depend entirely on IntelliSense.
Always verify the actual import path.

## Git Warning

### Issue 3
Git displayed LF/CRLF line ending warnings while staging files.

### Root Cause
Windows uses CRLF while many repositories use LF.

### Solution
No action required. Git handles the conversion automatically.

### Lesson
LF/CRLF warnings are common on Windows and are not errors.

## Issue 4

Git showed "fatal: unrecognized argument".

### Root Cause

Typed `online` instead of `oneline`.

### Solution

Used the correct command:

git log --oneline

### Lesson

Read terminal errors carefully. Small typos are a common cause of command failures.

## Issue 5

Error: Cannot find module 'react-bootstrap'.

### Root Cause

The package was not installed.

### Solution

Ran:

npm install react-bootstrap

### Lesson

Always read the error message first. It often tells you exactly what's wrong.

## Issue 6

### Issue

```
The requested module '/src/components/Clock.jsx' does not provide an export named 'default'
```

### What I Checked

- Checked the import statement in `Hero.jsx`.
- Checked whether `Clock.jsx` had a default export.
- Verified that `Clock.jsx` and `Quote.jsx` existed.

### Root Cause

`Clock.jsx` and `Quote.jsx` had accidentally been deleted.

### Solution

Recreated both components and ensured they exported using:

```jsx
export default function Clock() {
  ...
}
```

and

```jsx
export default function Quote() {
  ...
}
```

### Lesson

When an import/export error appears, first verify that the file exists before debugging the code inside it.


## Issue 7

### Issue

```
The requested module '/src/components/Clock.jsx' does not provide an export named 'default'
```

### What I Checked

- Read the error message carefully.
- Checked the import in `Hero.jsx`.
- Checked whether `Clock.jsx` and `Quote.jsx` existed.

### Root Cause

Both `Clock.jsx` and `Quote.jsx` had accidentally been deleted, so React couldn't import the default export.

### Solution

Recreated both files and verified they were exporting using `export default`.

### Lesson

Before changing code, always verify that the imported file actually exists. Import/export errors are often caused by missing files rather than incorrect syntax.

### Personal Win

I resisted asking for help immediately.
I investigated the error myself, found the missing files, recreated them, and fixed the problem independently.

## Issue 8

### Issue

React Router Link was not working.

### Root Cause

Typed `LINK` instead of `Link`.

### Solution

Imported and used the correct React component:

```jsx
import { Link } from "react-router-dom";

Lesson :- React Components are Case Sensitive .Use PascalCase for Compoenents Names