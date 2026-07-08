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