//Importaciones de Librerias
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Importaciones locales
import { CartWidget } from "./cartWidget"

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda C</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Futbol</Nav.Link>
            <Nav.Link href="#features">Basquet</Nav.Link>
            <Nav.Link href="#pricing">Tenis</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
                  

    )
}