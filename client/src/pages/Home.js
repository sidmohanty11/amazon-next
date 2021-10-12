import React, { useEffect, useState } from "react";
import CustomCarousel from "../components/Carousel/Carousel";
import Container from "../components/Container/Container";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "@styled-icons/boxicons-regular/Loader";
import { getData, selectProducts } from "../store/reducers/dataSlice";
import axios from "../axios";

const Home = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/v1/products");
        if (data) {
          dispatch(getData(data));
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    getProducts();
  }, [dispatch]);

  return (
    <div>
      <CustomCarousel />
      <h2 style={{ textAlign: "center", margin: "10px", fontSize: "35px" }}>
        Featured Products!
      </h2>
      <Container>
        {loading ? (
          <p>
            <Loader />
            Loading...
          </p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          products
            .slice(3, 11)
            .map((p) => (
              <ProductCard
                source={p.imageUrl}
                name={p.name}
                price={p.price}
                key={p.id}
                id={p.id}
                rating={p.rating}
              />
            ))
        )}
      </Container>
    </div>
  );
};

export default Home;
