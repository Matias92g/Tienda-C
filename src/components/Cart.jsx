import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const clearValues = { name: "", telefono: "", email: "" };

export const Cart = () => {
    const { clear, items, removeItem } = useContext(CartContext);
    const [buyer, setBuyer] = useState(clearValues);

    const total = items.reduce((acumulado, actual) => {
        return acumulado + actual.price * actual.quantity;
    }, 0)

    const handleSendOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert(`Su orden${id} ha sido completada!`);
            }
        }).finally(() => { setBuyer(clearValues), clear() })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBuyer((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <>
            <h1 className="mt-2 text-success text-center">Lista de Productos en el Carrito</h1>
            <Container className="mt-2 text-danger text-center d-flex flex-wrap justify-content-center">
                {items.map((item) => (
                    <div>
                        <Card className="rounded m-2 border border-success-subtle" style={{ width: '18rem' }} key={item.id}>
                            <Card.Body>
                                <Card.Title className="text-success">{item.title}</Card.Title>
                                <Card.Text className="text-success">{item.description} </Card.Text>
                                <Card.Text className="text-success">Precio por unidad ${item.price}</Card.Text>
                                <Card.Img variant="top" src={item.img} alt={item.description} width={100} />
                                <Card.Text className="text-success">Cantidad a comprar: {item.quantity}</Card.Text>
                                <Card.Text className="text-success">Precio total: {item.price * item.quantity} </Card.Text>
                                <div className=" p-1 d-flex justify-content-center">
                                    <button className="btn btn-success m-2 text-center" onClick={() => removeItem(item.id)}>Eliminar producto del carrito</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Container>
            <div className="col-6 mx-auto mb-5">
                <form >
                    <div>
                        <label className="text-success">Nombre</label>
                        <input type="text" className="form-control" name="name" value={buyer.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className="text-success">Telefono</label>
                        <input
                            type="text"
                            name="telefono"
                            className="form-control"
                            values={buyer.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-success">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            values={buyer.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </form>
                <p className="text-success">Total Carrito: $ {total}</p>
            </div>
            <div className="d-flex justify-content-center">
                {items.length == 0 ? (
                    <Link to="/"><button className="btn btn-success m-2">Inicio</button></Link>
                ) : (<>
                    <button className="btn btn-success m-2" onClick={handleSendOrder} > Comprar </button>
                    <button className="btn btn-success m-2" onClick={clear}>Limpiar carrito</button>
                </>
                )}

            </div>
        </>
    );
};
