import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="glass mt-3 mx-3 py-3" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bold fs-3">
          🦋 Aurelia • Focus Beautifully
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="#">Features</Nav.Link>

            <Nav.Link href="#">Journey</Nav.Link>

            <Nav.Link href="#">About</Nav.Link>

            <Link
              to="/login"
              className="btn btn-light rounded-pill px-4 fw-bold"
            >
              Get Started
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
