import React from "react";
import "./FoodItem.css";
import FoodForm from "./FoodForm";

export default function FoodItem(props) {

  return (
    <li className="li" key={props.item.id}>
      <div className="list">
        <div>
          <h4 className="name">{props.item.name}</h4>
          <p className="desc">{props.item.description}</p>
          <p className="price">${props.item.price.toFixed(2)}</p>
        </div>
        <div>
          <FoodForm item = {props.item} />
        </div>
      </div>
          <hr className="line" />
    </li>


    );
}
