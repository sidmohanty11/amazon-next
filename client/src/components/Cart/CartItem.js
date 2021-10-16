import React from "react";
import "./CartItem.css";
import { PlusSquare } from "@styled-icons/feather/PlusSquare";
import { MinusSquare } from "@styled-icons/feather/MinusSquare";
import { addToCart, removeFromCart } from "../../store/reducers/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart__container_item">
      <img src={item.imageUrl} alt="" height={200} width={200} />
      <p>lorem ipsum</p>
      <div>
        <PlusSquare
          size={30}
          style={{ marginRight: "10px" }}
          onClick={() => dispatch(addToCart(item))}
        />
        <span>{item.qty}</span>
        <MinusSquare
          size={30}
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(removeFromCart(item))}
        />
      </div>
      <div>
        <p>&#8377; {item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
