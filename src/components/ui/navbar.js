import logo from '../../resources/logo.png'
import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBriefcase, faStore } from '@fortawesome/free-solid-svg-icons' 
import { Outlet, Link } from "react-router-dom"
import './style.css'

const NavBar = () => {
    return(
        <>
        <Navbar className="navBg" bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <div className='navbarLeft'></div>
                    <div className="navbarCenter">
                        <Nav.Link as={Link} to="/portfolio">    
                            &nbsp;
                            Portfolio
                        </Nav.Link>
                        <Navbar.Brand id="logo" as={Link} to="/" >
                            <img src={logo} style={{width:90, margin: -12}}/>
                        </Navbar.Brand>
                        <Nav.Link as={Link} to="/store">
                            Store &nbsp;
                        </Nav.Link>
                    </div>
                    <div className='navbarRight'>
                        <Nav.Link as={Link} to="/register">
                            Log out &nbsp;
                        </Nav.Link>
                    </div>
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