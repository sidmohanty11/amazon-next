import React from "react";
import "./ProductDetail.css";
import { PlusSquare } from "@styled-icons/feather/PlusSquare";
import { MinusSquare } from "@styled-icons/feather/MinusSquare";

const ProductDetail = () => {
  return (
    <div className="product_detail__container">
      <div>
        <img src="./shoe1.jpg" alt="" height={800} width={500} />
      </div>
      <div className="product_detail__sub_container">
        <h2>lorem ipsum</h2>
        <p>description</p>
        <div>
          <PlusSquare size={30} style={{ marginRight: "10px" }} />
          <span>1</span>
          <MinusSquare size={30} style={{ marginLeft: "10px" }} />
        </div>
        <p>
          Price : <span style={{ fontWeight: "bold" }}>&#8377; 1299</span>
        </p>
        <button className="product_detail__btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
