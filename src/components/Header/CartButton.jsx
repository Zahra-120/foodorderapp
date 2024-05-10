import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartModal from "../Modal/CartModal";
import "./CartButton.css";
import cartLogo from '/home/zahrav/Documents/React JS/foodorder/src/assets/grocery-store.png'

export default function CartButton() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };
  

  return (
    <>
      <button className="cartButton" onClick={cartHandler}>
        <img className="cartLogo" src={cartLogo} alt="CartLogo" />
        <p className="yourCart">Your Cart</p>
      </button>
      {showCart && <CartModal onClose={closeCartHandler} />}
      <label className="cartLabel">{totalQuantity}</label>
    </>
  );
}
