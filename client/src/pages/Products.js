import React from "react";
import Container from "../components/Container/Container";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../assets/fakeData";

const Products = () => {
  return (
    <Container>
      {products.map((p) => (
        <ProductCard
          source={p.imageUrl}
          name={p.name}
          price={p.price}
          key={p.id}
          rating={p.rating}
        />
      ))}
    </Container>
  );
};

export default Products;
