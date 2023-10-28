import cart from "../assets/cartWidgetpng.png"

export const CartWidget = ()=>{
    return (
    <>
    <img src={cart} alt="Carrito" height={"50"}/> 
    <span>3</span>
    </>
    );
};