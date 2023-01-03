import './NavBar.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from '../pages/Contact.js';
import Home from '../pages/Home.js'
import Resume from '../pages/Resume.js'

function NavBar() {
    return (
        <Router>
            <Navbar className="navbar-main" expand="lg">
                <Container fluid>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link id="nav-link" className="custom-nav-link" as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link id="nav-link" className="custom-nav-link" as={Link} to={'/resume'}>Resume</Nav.Link>
                            <Nav.Link id="nav-link" className="custom-nav-link" as={Link} to={'/contact'}>Contact</Nav.Link>

                        </Nav>
                        <div className="buttonName">
                            <a href="/">

                                <button className="btn">Joseph Pogue</button>
                            </a>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default NavBar