Q: What is Git?

A: Git is a distributed version control system that tracks changes in a project and allows developers to collaborate and maintain a history of code changes.

---

Q: Difference between git add and git commit?

A:

git add → Stages changes.

git commit → Saves a snapshot to the repository.

# Day 8 Interview Questions

## Q1. Why do we split React applications into multiple components?

Answer:
Splitting an application into components improves code readability, reusability, and maintainability. Each component has a single responsibility, making the project easier to scale.

---------------------------------------------------

## Q2. What is the purpose of flex-grow-1?

Answer:
`flex-grow-1` allows an element inside a flex container to take up all the remaining available space.

---------------------------------------------------

## Q3. Why use React Router?

Answer:
React Router enables client-side routing in React applications, allowing navigation between pages without reloading the browser.

---------------------------------------------------

## Q4. What is the advantage of Bootstrap Grid?

Answer:
Bootstrap Grid makes layouts responsive using rows and columns, reducing the need for custom CSS while supporting multiple screen sizes.

---------------------------------------------------

## Q5. Why use reusable components?

Answer:
Reusable components reduce code duplication, improve consistency, and make applications easier to maintain and extend.

Q: Why do we use a key prop inside map()?

A: React uses the key to identify which list items have changed, been added, or removed. This helps React update the DOM efficiently.

## Day 9

### React Interview

Q. Why use useEffect?
A. To perform side effects like API calls, timers, or syncing with Local Storage.

Q. Difference between map() and filter()?
A.
- map() transforms every item.
- filter() removes items based on a condition.

Q. Why use Local Storage?
A. To persist data after page refresh without a backend.

Q. What is CRUD?
A.
Create
Read
Update
Delete

Q.What is the difference between Link and NavLink in React Router?
Q.Why do we split React components instead of keeping everything in one file?
Q.Why do we keep task-related properties (priority, dueDate, completed) inside one object instead of separate arrays?

Q. "How do you protect private routes in a MERN application?"

Answer:

"I use JWT based authentication. After login, the server generates a token. The client sends that token with requests. Middleware verifies the token before allowing access to protected APIs."

### Q. What is middleware in Express?

Middleware is a function that runs before the route handler. It can authenticate users, validate data, log requests, or modify the request and response.

---

### Q. Why do we use JWT middleware?

JWT middleware verifies the user's token before allowing access to protected routes. If the token is valid, user information is attached to req.user.

### Why use Express Router?

Express Router helps organize endpoints into separate files, making applications easier to maintain and scale.

---

### Why use router.use(authMiddleware)?

Instead of adding middleware to every route individually, router.use() protects every route below it automatically.

### Why separate routes and controllers?

Routes define the API endpoints, while controllers contain the application logic. This separation keeps the code modular and easier to maintain.

---

### Why use findOneAndUpdate instead of updateOne?

findOneAndUpdate() returns the updated document (with { new: true }) and allows checking whether a matching document exists.

### Why test APIs before integrating React?

It isolates backend issues from frontend issues. If the API works independently, debugging the frontend becomes much easier.

---

### What is CRUD?

Create, Read, Update, Delete — the four basic operations performed on database records.

### Explain the MVC pattern in Express.

- Model: Represents the database schema.
- View: The frontend (React).
- Controller: Contains the application logic.
- Routes connect incoming requests to the appropriate controller.

---

### Why protect CRUD routes with JWT?

Without JWT authentication, any user could access or modify another user's data. JWT ensures only authenticated users can access their own resources.