//Importaciones de Librerias
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Importaciones locales
import { products } from "../data/products.js"
import {Cart} from "./Cart.jsx" 
import { CartWidget } from './cartWidget.jsx';

const categories = products.map((item) => item.category);
const uniqueCategories = new Set(categories)
export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/"><Navbar.Brand >Tienda C</Navbar.Brand></NavLink>
        <Nav className="me-auto">{[...uniqueCategories].map((item) => (<Nav.Link as={NavLink} key={item} to={`/category/${item}`}>{item}</Nav.Link>))}</Nav>
        <NavLink to="/cart" >{<CartWidget/>}</NavLink>
      </Container>
    </Navbar>
  )
};