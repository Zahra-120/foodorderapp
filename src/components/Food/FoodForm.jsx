import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Header/redux/CartSlice";
import "./FoodForm.css";

export default function FoodForm(props) {
  console.log("Received item in FoodForm:", props.item);
  const item = props.item;
  const dispatch = useDispatch();
  // var quantity = 0;
  const [quantity, setQuantity] = useState(0); 

  const inputHandler = (event) => {
    setQuantity(parseInt(event.target.value));
    console.log("quantity from input",event.target.value)
    // quantity = parseInt(event.target.value); 
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: quantity,
      })
    );
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="quantity">
        <p className="qty">Quantity</p>
        <input
          className="input"
          name="quantity"
          type="number"
          min="1"
          max="5"
          value={quantity} 
          onChange={inputHandler}
        />
      </div>
      <button type="submit" className="qtyBtn">+ Add</button>
    </form>
  );
}

