import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItemList = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItemList.map((item) => (
          <li key={item.id}>
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              name={item.name}
              total={item.totalPrice}
            />
          </li>
        ))}
      </ul>
      {cartItemList.length === 0 && <h2>Cart is empty..!!</h2>}
    </div>
  );
};

export default CartItems;
