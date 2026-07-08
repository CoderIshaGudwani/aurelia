import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="glass p-5"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold">
          Welcome Back 🦋
        </h2>

        <form>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="btn btn-light w-100 rounded-pill fw-bold"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4">

          New here?

          <Link
            to="/register"
            className="ms-2 text-warning text-decoration-none fw-bold"
          >
            Create Account
          </Link>

        </p>

      </div>
    </section>
  );
}