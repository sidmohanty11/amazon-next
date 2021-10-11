import React from "react";
import ProductDetailComponent from "../components/ProductDetail/ProductDetail";
import ProductReview from "../components/ProductReview/ProductReview";

const ProductDetail = () => {
  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <ProductDetailComponent />
      <h2>Customer Reviews</h2>
      <ProductReview />
      <ProductReview />
      <ProductReview />
    </div>
  );
};

export default ProductDetail;
