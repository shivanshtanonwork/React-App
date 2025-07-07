import Price from "./Price";
import "./Product.css";

export default function Product({ title, oldPrice, newPrice, description }) {
  return (
    <div className="Product">
      <h5>{title}</h5>
      <p>{description}</p>
      <Price oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}
