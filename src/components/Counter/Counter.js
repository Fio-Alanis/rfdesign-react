import { useState } from "react";

const Counter = ({ stock, initial, onAdd }) => {
  // Como valor inicial del contador usamos la prop initial.
  const [count, setCount] = useState(initial);

  const decrement = () => {
    // Si el contador es igual al valor inicial no tengo que permitir restar.
    if (count === initial) return;

    setCount(count - 1);
  };

  const increment = () => {
    // Si el contador es igual al stock no tengo que permitir sumar.
    if (count === stock) return;

    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;