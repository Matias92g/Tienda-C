import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore";


export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const rerCollection = id
        ? query (collection(db, "items"), where ("category", "==", id))
        : collection(db, "items");

        getDocs(rerCollection).then((snapshot) => {
            setItems(snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data(), };
            }));
            setLoading(false);
        });
    }, [id]);

    return (
        <Container className='mt-2 text-success text-center'>
            <h1>Lista de Productos</h1>
            <ItemList items={items} />
        </Container>
    )
};