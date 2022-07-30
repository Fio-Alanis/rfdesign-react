import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Counter from "./components/Counter/Counter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  function handleOnAdd(count) {
    alert(`Agregaste ${count} al carrito`);
  }

  return (
    <div className="App">
      <Navbar />
      <Counter stock={10} initial={1} onAdd={handleOnAdd} />
      <ItemListContainer greeting="Hello World" />
    </div>
  );
}

export default App;