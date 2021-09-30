import React from "react";
import CustomCarousel from "../components/Carousel/Carousel";
import Container from "../components/Container/Container";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../assets/fakeData";

const Home = () => {
  return (
    <div>
      <CustomCarousel />
      <h2 style={{ textAlign: "center", margin: "10px", fontSize: "35px" }}>
        Featured Products!
      </h2>
      <Container>
        {products.slice(3, 11).map((p) => (
          <ProductCard
            source={p.imageUrl}
            name={p.name}
            price={p.price}
            key={p.id}
            rating={p.rating}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
