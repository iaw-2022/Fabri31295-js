import { Fragment } from "react"
import logo from '../resources/logo.png'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBar = () => {
    return(
        <>
        <Navbar className="navBg" bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/profile" >About</Nav.Link>
                <Navbar.Brand as={Link} to="/" >
                    <img src={logo} style={{width:110, margin: -6}}/>
                </Navbar.Brand>
                <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                <Nav.Link as={Link} to="/store" >Store</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
            

        <section>
            <Outlet></Outlet>
        </section>
        </>
    )
}
export default NavBar