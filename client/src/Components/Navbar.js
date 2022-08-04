import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({isLogOn, setIsLogOn, user}) {

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        })
        .then(() => setIsLogOn(false))
    }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="title" href="/home" style={{color: 'limegreen'}}>Detailify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">    
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="favorites">Favorites</Nav.Link>
          </Nav>
          <Nav>
            {isLogOn ? <Nav.Link href="login" onClick={handleLogout}>Logout</Nav.Link> : <Nav.Link href="login">Login</Nav.Link>}
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;