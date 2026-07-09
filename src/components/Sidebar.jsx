import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
    <h3 className="mb-4 text-center">
    🦋 Aurelia
    </h3>

    <hr className="border-secondary" />

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="#">
            Tasks
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="#">
            Pomodoro
          </Link>
        </li>

      </ul>
    </div>
  );
}