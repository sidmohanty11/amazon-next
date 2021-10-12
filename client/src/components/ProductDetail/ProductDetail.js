import React from "react";
import "./ProductDetail.css";
import { PlusSquare } from "@styled-icons/feather/PlusSquare";
import { MinusSquare } from "@styled-icons/feather/MinusSquare";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartSlice";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product_detail__container">
      <div>
        <img src={product.imageUrl} alt="" height={800} width={500} />
      </div>
      <div className="product_detail__sub_container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div>
          <MinusSquare size={30} style={{ marginRight: "10px" }} />
          <span>{product.qty}</span>
          <PlusSquare size={30} style={{ marginLeft: "10px" }} />
        </div>
        <p>
          Price :{" "}
          <span style={{ fontWeight: "bold" }}>&#8377; {product.price}</span>
        </p>
        <button
          className="product_detail__btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
