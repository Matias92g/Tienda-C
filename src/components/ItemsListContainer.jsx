import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { products } from "../data/products.js";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext.jsx';

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        });
        promise.then((response) => {
            if (id) {
                const filteres = response.filter(item => item.category === id);
                setItems(filteres)
            } else { setItems(response) }
        });
        promise.finally(() => setLoading(false))
    }, [id]);

    return (
        <Container className='mt-2 text-success text-center'>
            <h1>Lista de Productos</h1>
            <ItemList items={items} />
        </Container>
    )
};