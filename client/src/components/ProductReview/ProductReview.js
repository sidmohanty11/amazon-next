import React from "react";
import "./ProductReview.css";
import Star from "../Star/Star";

const ProductReview = () => {
  return (
    <div className="product_review">
      <h4>username</h4>
      <p>
        <Star />
        <Star />
        <Star />
        <Star />
      </p>
      <p>lorem ipsum</p>
    </div>
  );
};

export default ProductReview;
