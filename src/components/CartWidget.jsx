import cart from "../assets/cartWidgetpng.png"

export const CartWidget = ()=>{
    return (
        <>
        <img src={cart} alt="Carrito" height={"50"}/>
        <span className='mt-2 text-success text-center'>10</span>
        </>
        );
    
};