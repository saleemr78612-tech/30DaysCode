import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { id } = useParams();

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

  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>Product Details</h1>

      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
