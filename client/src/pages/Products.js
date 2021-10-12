import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import ProductCard from "../components/ProductCard/ProductCard";
import axios from "../axios";
import { Loader } from "@styled-icons/boxicons-regular/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getData, selectProducts } from "../store/reducers/dataSlice";

const Products = () => {
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
    <Container>
      {loading ? (
        <p>
          <Loader />
          Loading...
        </p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        products?.map((p) => (
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
  );
};

export default Products;
