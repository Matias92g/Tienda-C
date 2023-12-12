import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const clear = () => setItems([]);
    const addItem = (item, quantity) => {
        const itemRepeat = isInCart(item)
        if (itemRepeat) {
            const itemToModify = items.find(
                (items) => items.id === item.id);
            const updateItem = {
                ...itemToModify,
                quantity: itemToModify.quantity + quantity,
            }
            setItems((prev) => prev.map((items) => items.id === item.id ? updateItem : items));
        } else {
            setItems((prev) => { return prev.concat({ ...item, quantity }) });

        }

        setItems((prev) => { return [...prev, item] })
    };
    const isInCart = (item) => {
        return items.some((items) => items.id === item.id);
    }

    const removeItem = (id) => {
        const newItems = items.filter((prev) => prev.id !== id);
        setItems(newItems);
    }
    console.log(items)
    return <CartContext.Provider value={{ removeItem, addItem, clear, items }}> {children}</CartContext.Provider>
}