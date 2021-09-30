import React from "react";
import CustomCarousel from "../components/Carousel/Carousel";
import Container from "../components/Container/Container";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <div>
      <CustomCarousel />
      <h2 style={{ textAlign: "center", margin: "10px", fontSize: "35px" }}>
        TRENDING SHOES!
      </h2>
      <Container>
        <ProductCard source="./shoe1.jpg" name="Professionals 1" price={1999} />
        <ProductCard source="./shoe2.jpg" name="Professionals 2" price={2999} />
        <ProductCard source="./shoe3.jpg" name="Professionals 3" price={1799} />
        <ProductCard source="./shoe4.jpg" name="Professionals 4" price={2099} />
      </Container>
      <h2 style={{ textAlign: "center", margin: "10px", fontSize: "35px" }}>
        Shirts for you...
      </h2>
      <Container>
        <ProductCard source="./shirt1.webp" name="Checked Shirt" price={999} />
        <ProductCard source="./shirt2.webp" name="Zebra Shirt" price={1999} />
        <ProductCard source="./shirt3.webp" name="Indian Shirt" price={1599} />
        <ProductCard source="./shirt4.webp" name="Solid Shirt" price={1999} />
      </Container>
      <h2 style={{ textAlign: "center", margin: "10px", fontSize: "35px" }}>
        Pants for you...
      </h2>
      <Container>
        <ProductCard
          source="./pant1.webp"
          name="Grey Formal Pant"
          price={1999}
        />
        <ProductCard
          source="./pant2.webp"
          name="Black Formal Pant"
          price={2499}
        />
        <ProductCard source="./pant3.jpg" name="Suit Pant" price={2999} />
        <ProductCard source="./pant4.webp" name="Comedy Pant" price={999} />
      </Container>
    </div>
  );
};

export default Home;
