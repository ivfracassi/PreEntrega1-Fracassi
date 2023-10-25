import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const incremento = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decremento = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={decremento}>-</button>
        <h4>{quantity}</h4>
        <button onClick={incremento}>+</button>
      </div>
      <div>
        <button onClick={() => onAdd(quantity)} disabled={stock === 0}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
