import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h1>Prodcut Page {id} Product!!</h1>;
}

export default ProductPage;
