function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            🦋 Aurelia
          </a>
  
          <div className="ms-auto">
            <button className="btn btn-outline-light">
              Login
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;