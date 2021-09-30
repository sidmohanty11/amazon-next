import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Star from "../Star/Star";
import "./ProductCard.css";

const ProductCard = ({ source, name, price, rating, id }) => {
  return (
    <Card>
      <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
        <img src={source} height={400} width={300} alt="" />
        <p className="product__link">{name}</p>
        <p className="product__link">
          {Array.from({ length: parseInt(rating) }, (_, i) => (
            <Star key={`star_${i + 1}`} />
          ))}
        </p>
        <p className="product__link" style={{ fontWeight: "bold" }}>
          &#8377; {price}
        </p>
      </Link>
    </Card>
  );
};

export default ProductCard;
