import { useEffect, useState } from "react";
import Pomodoro from "./Pomodoro";
import TaskList from "./TaskList";

export default function DashboardHome() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [dueDate, setDueDate] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (task.trim() === "") return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: task,
                dueDate,
                completed: false,
            },
        ]);

        setTask("");
        setDueDate("");
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const deleteCompleted = () => {
        setTasks(tasks.filter((t) => !t.completed));
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
    const streak = completedTasks > 0 ? 1 : 0;

    return (
        <div className="container-fluid p-4">
            <Pomodoro />

            <div className="card shadow border-0 my-4">
                <div className="card-body">
                    <h4>🌱 Today's Tasks</h4>

                    <div className="row g-2 mt-2">
                        <div className="col-md-6">
                            <input
                                className="form-control"
                                placeholder="Enter task..."
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && addTask()}
                            />
                        </div>

                        <div className="col-md-3">
                            <input
                                type="date"
                                className="form-control"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>

                        <div className="col-md-3">
                            <button
                                className="btn btn-success w-100"
                                onClick={addTask}
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <input
                className="form-control mb-4"
                placeholder="🔍 Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="d-flex gap-2 mb-4">
                <button
                    className={`btn ${filter === "all" ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={`btn ${filter === "active" ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>

                <button
                    className={`btn ${filter === "completed" ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>

            <div className="card shadow border-0 mb-4">
                <div className="card-body d-flex justify-content-between">
                    <span>Total: {tasks.length}</span>
                    <span>Completed: {completedTasks}</span>
                    <span>Remaining: {tasks.length - completedTasks}</span>
                </div>
            </div>

            <div className="card shadow border-0 mb-4">
                <div className="card-body">
                    <h4>🦋 Evolution Progress</h4>

                    <div className="progress my-3">
                        <div
                            className="progress-bar bg-success"
                            style={{ width: `${Math.min(xp, 100)}%` }}
                        />
                    </div>

                    <h5>{xp} XP / 100 XP</h5>
                    <p>{level}</p>
                </div>
            </div>

            <div className="card shadow border-0 mb-4">
                <div className="card-body text-center">
                    <h4>🔥 Daily Streak</h4>
                    <h2>{streak} Day</h2>
                </div>
            </div>

            <TaskList
                tasks={tasks}
                search={search}
                filter={filter}
                editingId={editingId}
                editText={editText}
                setEditText={setEditText}
                setEditingId={setEditingId}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                saveTask={saveTask}
                deleteCompleted={deleteCompleted}
            />
        </div>
    );
}