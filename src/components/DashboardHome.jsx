import { useState } from "react";

export default function DashboardHome() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <div className="container-fluid p-4">

      <div className="card shadow border-0 mb-4">
        <div className="card-body">

          <h4 className="mb-3">🌱 Today's Tasks</h4>

          <div className="d-flex gap-2">

            <input
              type="text"
              className="form-control"
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button
              className="btn btn-success"
              onClick={addTask}
            >
              Add
            </button>

          </div>

        </div>
      </div>

      <div className="card shadow border-0">
        <div className="card-body">

          <h5>Task List</h5>

          {tasks.length === 0 ? (
            <p className="text-muted">
              No tasks yet 🌿
            </p>
          ) : (
            <ul className="list-group">

              {tasks.map((t) => (
                <li
                  key={t.id}
                  className="list-group-item"
                >
                  {t.text}
                </li>
              ))}

            </ul>
          )}

        </div>
      </div>

    </div>
  );
}