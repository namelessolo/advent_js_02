import React, { useContext } from "react";
import { ReactComponent as Chevron } from "../../assets/chevron.svg";
import { OrdersContext } from "../../providers/OrdersProvider";

const CartItem = ({ order: { name, price, image, alt, id, quantity } }) => {
  const { increase, decrease } = useContext(OrdersContext);
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
        <button className="decrease" onClick={() => decrease(id)}>
          <Chevron />
        </button>
        <div className="quantity">{quantity}</div>
        <button className="increase" onClick={() => increase(id)}>
          <Chevron />
        </button>
      </div>
      <div className="subtotal">${(price * quantity).toFixed(2)}</div>
    </li>
  );
};

export default CartItem;
