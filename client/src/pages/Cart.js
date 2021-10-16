import React from "react";
import { ShoppingCart as CartIcon } from "@styled-icons/material-rounded/ShoppingCart";
import CartItem from "../components/Cart/CartItem";
import "../Auth.css";
import {
  selectItems,
  selectTotal,
  selectTotalItems,
} from "../store/reducers/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const totalItems = useSelector(selectTotalItems);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CartIcon size={200} />
        <h2 style={{ marginBottom: "20px" }}>Shopping Cart({totalItems})</h2>
        <h3 style={{ marginBottom: "20px" }}>Total Price: &#8377; {total}</h3>
        {items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <button
          style={{ marginTop: "20px" }}
          className="auth__container_form_button"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
