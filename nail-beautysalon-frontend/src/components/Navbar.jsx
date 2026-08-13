import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar expand="lg" className="salon-navbar">
            <Container>

                {/* Brand */}
                <Navbar.Brand as={Link} to="/">
                    <span className="brand-name">NAIL & BEAUTY</span>
                    <span className="brand-subtitle">SALON</span>
                </Navbar.Brand>

                {/* Mobile menu button */}
                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">

                    <Nav className="mx-auto">

                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/services">
                            Services
                        </Nav.Link>

                        <Nav.Link as={Link} to="/products">
                            Products
                        </Nav.Link>

                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>

                    </Nav>

                    {/* Login */}
                    <Button
                        as={Link}
                        to="/login"
                        className="login-btn"
                    >
                        Login
                    </Button>

                    {/* Main call-to-action */}
                    <Button
                        as={Link}
                        to="/appointments"
                        className="book-now-btn"
                    >
                        Book Appointment
                    </Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;