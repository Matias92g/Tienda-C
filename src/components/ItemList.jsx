import Container from 'react-bootstrap/Container';
import { Item } from './item';

export const ItemList = ({ items }) => {
    return (
        <Container className='d-flex flex-wrap'>
            {items.map((item) => (<Item key={item.id} item={item} />))}
        </Container>)
}