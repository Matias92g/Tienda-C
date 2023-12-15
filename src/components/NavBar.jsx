//Importaciones de Librerias
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Importaciones locales
import { CartWidget } from './cartWidget.jsx';


export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/"><Navbar.Brand >Tienda C</Navbar.Brand></NavLink>
        <Nav className="me-auto">
        <Nav.Link as={NavLink} to={`/category/Futbol`}>Futbol</Nav.Link>
        <Nav.Link as={NavLink} to={`/category/Tenis`}>Tenis</Nav.Link>
        <Nav.Link as={NavLink} to={`/category/Basquet`}>Basquet</Nav.Link>
        </Nav>
        <NavLink to="/cart" >{<CartWidget />}</NavLink>
      </Container>
    </Navbar>
  )
};  