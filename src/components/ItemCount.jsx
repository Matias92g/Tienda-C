import { useState } from "react";

export const ItemCounter = ({ valueInitial, stock, addItem }) => {
  const [count, setCount] = useState(valueInitial);

  const handleDecreaseCount = () => {
    if (count > valueInitial) {
      setCount(count - 1);
    }
  };

  const handleIncreaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAdd = () => {
    addItem(count);
    setCount(valueInitial);
  }

  return (
    <div>
      <div className="col-6">
        <div className="d-flex justify-content-center" style={{ width: '300px' }}>
          <div>
            <button className="btn btn-success m-1 " onClick={handleDecreaseCount}>-</button>
          </div>
          <div className="d-flex"><span className="text-center" >Unidades: {count}</span></div>
          <div>
            <button className="btn btn-success m-1 " onClick={handleIncreaseCount}>+</button>
          </div>
        </div>
        <div>
          <button className="btn btn-success m-4" onClick={handleAdd} style={{ width: '300px' }}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCounter;