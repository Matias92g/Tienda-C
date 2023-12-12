import { Container } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export const Cart = () => {
    const { clear, items } = useContext(CartContext)
    return (
        <Container className='mt-2 text-success text-center'>
            <h1>Lista de Productos en el Carrito</h1>
            {items.map((item)=>(
                <div key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.img} width={200} />
                <p >{item.description} </p>
                </div>
                
            ))}
            <button onClick={clear}>Vaciar Carrito</button>
        </Container>);

};