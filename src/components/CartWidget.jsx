import { useContext } from "react";
import cart from "../assets/cartWidgetpng.png"
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
    const { items } = useContext(CartContext);
    const total = items.reduce((acumulador, actual) => acumulador + actual.quantity, 0);
    return (
        <>
            <img src={cart} alt="Carrito" height={"50"} />
            <span className='mt-2 text-success text-center'>{total}</span>
        </>
    );

};