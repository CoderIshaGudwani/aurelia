import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">
        🦋 Aurelia
      </h2>

      <hr />

      <nav>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="#"
        >
          ✅ Tasks
        </NavLink>

        <NavLink
          to="#"
        >
          🍅 Pomodoro
        </NavLink>

      </nav>
    </div>
  );
}