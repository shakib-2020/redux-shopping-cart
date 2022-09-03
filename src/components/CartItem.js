import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
      })
    );
  };
  const decrement = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrement}>
        -
      </button>
      <button className="cart-actions" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CartItem;
