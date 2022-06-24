import { useParams } from "react-router-dom";

const Product = () => {
  // rota dinamica
  const { id } = useParams();
  return (
    <>
      <h2>ID do produto: {id}</h2>;
    </>
  );
};

export default Product;
