import React from "react";
import chevron from "../../assets/chevron.svg";

const CartItem = ({ order: { name, price, image, alt, quantity } }) => {
  return (
    <li>
      <div className="plate">
        <img src={"images/" + image} alt={alt} className="plate" />
        <div className="quantity">{quantity}</div>
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">${price}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease">
          <img src={chevron} alt="" />
        </button>
        <div className="quantity">{quantity}</div>
        <button className="increase">
          <img src={chevron} alt="" />
        </button>
      </div>
      <div className="subtotal">${price * quantity}</div>
    </li>
  );
};

export default CartItem;
