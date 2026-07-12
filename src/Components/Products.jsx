import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      title: "Mobile",
      price: 500,
    },
    {
      id: 3,
      title: "Headphones",
      price: 200,
    },
  ];



  return (
    <div>
      <h1>Products Page</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>

          <Link to={`/product/${product.id}`}>View Details</Link>

          <hr />
        </div>
      ))}
    </div>
  );
}
