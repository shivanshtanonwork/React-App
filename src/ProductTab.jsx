import Product from "./Product";

// data.js or inside ProductTab.jsx
const products = [
  {
    title: "Logitech MX Master",
    oldPrice: "12,900",
    newPrice: "10,900",
    description:
      "Advanced wireless mouse with ergonomic design and customizable buttons.",
  },
  {
    title: "Apple Pencil",
    oldPrice: "18,900",
    newPrice: "15,900",
    description:
      "Precision stylus for iPad with low latency and pressure sensitivity.",
  },
  {
    title: "Macbook M4 Pro",
    oldPrice: "1,85,999",
    newPrice: "1,65,999",
    description:
      "Powerful laptop with M4 chip, Liquid Retina XDR display, and long battery life.",
  },
  {
    title: "Samsung S25 Plus",
    oldPrice: "90,000",
    newPrice: "75,000",
    description:
      "Flagship smartphone with AMOLED display, top-tier camera, and fast charging.",
  },
];

export default function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      {products.map((product) => (
        <Product
          title={product.title}
          description={product.description}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
        />
      ))}
    </div>
  );
}
