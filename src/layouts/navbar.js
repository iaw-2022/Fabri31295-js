import logo from '../resources/logo.png'
import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBriefcase, faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
import { Outlet, Link } from "react-router-dom"

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
                            <a><FontAwesomeIcon icon={faBriefcase}/></a>
                            &nbsp;
                            Portfolio
                        </Nav.Link>
                        <Navbar.Brand id="logo" as={Link} to="/" >
                            <img src={logo} style={{width:90, margin: -12}}/>
                        </Navbar.Brand>
                        <Nav.Link as={Link} to="/store">
                            Store &nbsp;
                            <a><FontAwesomeIcon icon={faStore}/></a>
                        </Nav.Link>
                    </div>
                    <div className='navbarRight'>
                        <Nav.Link id="cart-icon" as={Link} to="/cart">
                            <a><FontAwesomeIcon icon={faShoppingCart}/></a>
                        </Nav.Link>
                        <Nav.Link id="profile-icon" as={Link} to="/profile">
                            Profile &nbsp;
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