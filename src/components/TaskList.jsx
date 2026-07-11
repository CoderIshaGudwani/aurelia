import React from "react";

export default function TaskList({
    tasks,
    search,
    filter,
    editingId,
    editText,
    setEditText,
    setEditingId,
    toggleTask,
    deleteTask,
    saveTask,
    deleteCompleted,
    clearAllTasks
}) {
    const filteredTasks = tasks
        .filter((t) =>
            t.text.toLowerCase().includes(search.toLowerCase())
        )
        .filter((t) => {
            if (filter === "active") return !t.completed;
            if (filter === "completed") return t.completed;
            return true;
        });

    return (
        <div className="card shadow border-0">
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Task List</h5>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={deleteCompleted}
                        >
                            🗑 Completed
                        </button>

                        <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={clearAllTasks}
                        >
                            ❌ Clear All
                        </button>
                    </div>
                </div>

                {filteredTasks.length === 0 ? (
                    <p className="text-muted">No tasks found 🌿</p>
                ) : (
                    <ul className="list-group">

                        {filteredTasks.map((t) => (
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
                                            className="form-control mt-2"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                        />
                                    ) : (
                                        <>
                                            <span
                                                style={{
                                                    textDecoration: t.completed
                                                        ? "line-through"
                                                        : "none",
                                                }}
                                            >
                                                {t.text}
                                            </span>

                                            {t.dueDate && (
                                                <small className="d-block text-muted">
                                                    📅 Due: {t.dueDate}
                                                </small>
                                            )}
                                        </>
                                    )}
                                </div>
                                <small
                                    className={`d-block fw-bold ${t.priority === "High"
                                        ? "text-danger"
                                        : t.priority === "Medium"
                                            ? "text-warning"
                                            : "text-success"
                                        }`}
                                >
                                    🚩 {t.priority}
                                </small>

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
    );
}