import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
import { CartContext } from "../contexts/CartContext";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        });
        promise.then((response) => {
            const filteres = response.find((item) => item.id == id);
            setItem(filteres)
        });
    }, [id]);


    return (
        <div className="container d-flex flex-column align-items-center">
            <h1>{item?.title}</h1>
            <img src={item?.img} width={400} />
            <p >{item?.details} </p>
            <button onClick={()=> addItem(item)} >Agregar al Carrito</button>
        </div>)
}