import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // rota dinamica
  const { id } = useParams();

  // carregamento dado individual
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <h2>ID do produto: {id}</h2>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1> {product.name}</h1>
          <p>{product.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;
