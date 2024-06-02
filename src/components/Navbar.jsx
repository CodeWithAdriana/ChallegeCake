import { Navbar as BootstrapNavbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <BootstrapNavbar className="bg-danger" variant="dark">
      <Container className="justify-content-start text-white">
        <Link to="/" className="text-decoration-none text-white ms-3">
          Home 🏠
        </Link>
        <Link to="/contact" className="text-decoration-none text-white ms-3">
          Contacto 📗
        </Link>
        <BootstrapNavbar.Collapse className="justify-content-end">
          <BootstrapNavbar.Text className="text-white ms-3 fw-bold">
            Happy Cake 🍰
          </BootstrapNavbar.Text>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
