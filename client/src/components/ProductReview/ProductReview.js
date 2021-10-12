import React from "react";
import "./ProductReview.css";
import Star from "../Star/Star";

const ProductReview = ({ review }) => {
  return (
    <div className="product_review">
      <h4>{review.username}</h4>
      <p>
        {Array.from({ length: parseInt(review.rating) }, (_, i) => (
          <Star key={`star_${i + 1}`} />
        ))}
      </p>
      <p>{review.content}</p>
    </div>
  );
};

export default ProductReview;
