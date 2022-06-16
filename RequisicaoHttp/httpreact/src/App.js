import "./App.css";

import { useState } from "react";

// custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  //const [products, setProducts] = useState([]);

  // custom hooks
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // resgatando dados

  /*useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, [setProducts]);*/

  // add produtos

  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = {
      name,
      price,
    };

    // remove produtos

    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(products),
    });

    // carregamento dinamico
    const addedProducts = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProducts]);*/

    // refatorando post
    httpConfig(products, "POST");
    // resetando os inputs
    setName("");
    setPrice("");
  };
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista De Produtos</h1>
      {/*loading*/}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - r$: {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Excluir
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/*state de loading*/}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar Produto" />}
        </form>
      </div>
    </div>
  );
}

export default App;
