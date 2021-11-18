import logo from '../../images/paint_logo.png'
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
    return(
        <Navbar bg='light' expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                    width="30"
                    height="30"
                    className="d-inline-block align-top" 
                    src={logo} 
                    alt="mARTvelous"
                    />
                    mARTvelous
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link class="nav-link" href="/">Home</Nav.Link>
                        <Nav.Link class="nav-link" href="/paintbox">PaintBox</Nav.Link>
                        <Nav.Link class="nav-link" href="/faq">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;