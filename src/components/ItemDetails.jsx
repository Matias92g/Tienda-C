import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemCounter } from "./ItemCount"


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id);
        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });

        }).finally(() => setLoading(false))
    }, [id]);
    if (loading) {
        return <>Loading</>
    }

    const add = (quantity) => {
        addItem(item, quantity);
    };


    return (
        <div className="container d-flex flex-column align-items-center">
            <h1>{item?.title}</h1>
            <img src={item?.img} width={400} />
            <p >{item?.details} </p>
            <h4 className="text-success">Stock disponible: {item.stock} Uds</h4>
            <ItemCounter valueInitial={1} stock={item.stock} addItem={add} />
        </div>)
}