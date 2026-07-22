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

## Day 10

Issue:
- "t is not defined"

Reason:
- JSX was placed outside tasks.map().

Fix:
- Moved JSX inside the map callback.

----------------------------------------

Issue:
- Due date was not clearing.

Reason:
- setDueDate("") was missing.

Fix:
- Added setDueDate("") after adding a task.

----------------------------------------

Issue:
- Sidebar CSS not applying.

Reason:
- Sidebar was using Bootstrap classes instead of a custom .sidebar class.

Fix:
- Created Sidebar.css and updated Sidebar.jsx to use it.

# 📅 Learning Log

## ✅ What I Debugged Today

### 1. Missing script: "dev"

**Error:**
```bash
npm ERR! Missing script: "dev"
```

**Cause:**
My `package.json` didn't contain a `dev` script.

**Fix:**
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

### 2. ERR_MODULE_NOT_FOUND

**Error:**
```bash
Cannot find module './config/db'
Did you mean './config/db.js'?
```

**Cause:**
Since the project uses `"type": "module"`, Node.js requires file extensions for local imports.

❌ Wrong
```javascript
import connectDB from "./config/db";
```

✅ Correct
```javascript
import connectDB from "./config/db.js";
```

---

### 3. MongoDB Connection Error

**Error:**
```bash
Invalid scheme, expected connection string to start with
mongodb://
or
mongodb+srv://
```

**Cause:**
The `MONGO_URI` value in the `.env` file wasn't a valid MongoDB Atlas connection string.

**Next Step:**
- Create a MongoDB Atlas M0 cluster.
- Copy the connection string.
- Replace the placeholder in `.env`:

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```


Debugging note:

Backend uses ES Modules. Converted authentication files from CommonJS syntax to import/export to maintain project consistency.

ERROR:
ERR_MODULE_NOT_FOUND authController.js

CAUSE:
Imported file path existed but file was missing/not named correctly.

FIX:
Created controllers/authController.js and matched ES Module import path.