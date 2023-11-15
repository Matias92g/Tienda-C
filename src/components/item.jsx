import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <Card className= "rounded m-2 border border-success-subtle"style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.marca}</Card.Title>
                <Card.Img variant="top" src={item.img} />
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
                <Link to={`/item/${item.id}`}><Button variant="success">Ver datalles</Button></Link>
            </Card.Body>
        </Card>
    )
}

