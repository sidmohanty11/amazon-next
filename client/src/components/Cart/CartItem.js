import React from "react";
import "./CartItem.css";
import { PlusSquare } from "@styled-icons/feather/PlusSquare";
import { MinusSquare } from "@styled-icons/feather/MinusSquare";

const CartItem = () => {
  return (
    <div className="cart__container_item">
      <img src="./shoe1.jpg" alt="" height={200} width={200} />
      <p>lorem ipsum</p>
      <div>
        <PlusSquare size={30} style={{ marginRight: "10px" }} />
        <span>1</span>
        <MinusSquare size={30} style={{ marginLeft: "10px" }} />
      </div>
      <div>
        <p>&#8377; 1299</p>
      </div>
    </div>
  );
};

export default CartItem;
