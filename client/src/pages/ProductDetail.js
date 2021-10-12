import React, { useEffect, useState } from "react";
import ProductDetailComponent from "../components/ProductDetail/ProductDetail";
import ProductReview from "../components/ProductReview/ProductReview";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { Loader } from "@styled-icons/boxicons-regular/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/v1/products/${id}`);
        if (data) {
          setProduct(data);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    getProducts();
  }, [id]);

  return (
    <div style={{ width: "1200px", margin: "auto" }}>
      {loading ? (
        <p>
          <Loader />
          Loading...
        </p>
      ) : error ? (
        <p>Something went wrong!</p>
      ) : (
        <>
          <ProductDetailComponent product={product} />
          <h2>Customer Reviews</h2>
          {product.reviews?.map((r) => (
            <ProductReview review={r} key={r.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductDetail;
