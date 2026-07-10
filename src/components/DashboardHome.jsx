import { useEffect, useState } from "react";
import Pomodoro from "./Pomodoro";

export default function DashboardHome() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

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

    const toggleTask = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id
                    ? { ...t, completed: !t.completed }
                    : t
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const saveTask = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, text: editText } : t
            )
        );

        setEditingId(null);
        setEditText("");
    };

    const completedTasks = tasks.filter((t) => t.completed).length;
    const xp = completedTasks * 10;
    const level = xp >= 100 ? "🦋 Butterfly" : "🐛 Caterpillar";

    return (
        <div className="container-fluid p-4">
            <Pomodoro />

            <br />

            {/* Add Task */}

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

            {/* Counter */}

            <div className="card shadow border-0 mb-4">
                <div className="card-body d-flex justify-content-between">

                    <span>Total : {tasks.length}</span>

                    <span>Completed : {completedTasks}</span>

                    <span>Remaining : {tasks.length - completedTasks}</span>

                </div>
            </div>

            <div className="card shadow border-0 mb-4">
                <div className="card-body">

                    <h4>🦋 Evolution Progress</h4>

                    <div className="progress my-3">

                        <div
                            className="progress-bar bg-success"
                            style={{
                                width: `${Math.min(xp, 100)}%`,
                            }}
                        ></div>

                    </div>

                    <h5>{xp} XP / 100 XP</h5>

                    <p>{level}</p>

                </div>
            </div>

            {/* Task List */}

            <div className="card shadow border-0">
                <div className="card-body">

                    <h5 className="mb-3">Task List</h5>

                    {tasks.length === 0 ? (
                        <p className="text-muted">
                            No tasks yet 🌿
                        </p>
                    ) : (
                        <ul className="list-group">

                            {tasks.map((t) => (

                                <li
                                    key={t.id}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >

                                    <div>

                                        <input
                                            type="checkbox"
                                            className="form-check-input me-3"
                                            checked={t.completed}
                                            onChange={() => toggleTask(t.id)}
                                        />
                                        {editingId === t.id ? (
                                            <input
                                                className="form-control d-inline w-50"
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                            />
                                        ) : (
                                            <span
                                                style={{
                                                    textDecoration: t.completed ? "line-through" : "none",
                                                    color: t.completed ? "gray" : "black",
                                                }}
                                            >
                                                {t.text}
                                            </span>
                                        )}

                                    </div>
                                    <div className="d-flex gap-2">

                                        {editingId === t.id ? (
                                            <button
                                                className="btn btn-success btn-sm"
                                                onClick={() => saveTask(t.id)}
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-warning btn-sm"
                                                onClick={() => {
                                                    setEditingId(t.id);
                                                    setEditText(t.text);
                                                }}
                                            >
                                                Edit
                                            </button>
                                        )}

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteTask(t.id)}
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </li>

                            ))}

                        </ul>
                    )}

                </div>
            </div>

        </div>
    );
}