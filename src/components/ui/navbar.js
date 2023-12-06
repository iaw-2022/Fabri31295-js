import React from 'react';
import logo from '../../resources/logo.png'
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import { requestNotificationPermission } from '../../firebase'
import './style.css'

const NavBar = () => {

    const initializeApp = async () => {
        await requestNotificationPermission();
      };

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
                        <Navbar.Brand id="logo" as={Link} to="/home" >
                            <img src={logo} style={{width:90, margin: -12}} alt="logo"/>
                        </Navbar.Brand>
                        <Nav.Link as={Link} to="/store">
                            Store &nbsp;
                        </Nav.Link>
                    </div>
                    <div className='navbarRight'>
                        <Button
                            onClick={() => initializeApp()}
                        >
                            act
                        </Button>
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