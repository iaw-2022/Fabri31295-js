import React from 'react';
import logo from '../../resources/logo.png'
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import { requestNotificationPermission } from '../../firebase'
import Toast from '../toast/Toast';
import './style.css'

const NavBar = () => {

    const initializeApp = async () => {
        await requestNotificationPermission();
    };

    return (
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
                                    <img src={logo} style={{ width: 90, margin: -12 }} alt="logo" />
                                </Navbar.Brand>
                                <Nav.Link as={Link} to="/store">
                                    Store &nbsp;
                                </Nav.Link>
                            </div>
                            <div className='navbarRight'>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                    <Button
                        variant='link'
                        onClick={() => initializeApp()}
                        style={{ paddingRight: '5%' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                        </svg>
                    </Button>
                </Container>
            </Navbar>
            <section>
                <Toast />
                <Outlet></Outlet>
            </section>
        </>
    )
}
export default NavBar