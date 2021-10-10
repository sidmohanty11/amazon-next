import React from "react";
import { ShoppingCart as CartIcon } from "@styled-icons/material-rounded/ShoppingCart";
import CartItem from "../components/Cart/CartItem";
import "../Auth.css";

const Cart = () => {
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
        <h2 style={{ marginBottom: "20px" }}>Shopping Cart</h2>
        <h3 style={{ marginBottom: "20px" }}>Total Price: &#8377;1299</h3>
        <CartItem />
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
