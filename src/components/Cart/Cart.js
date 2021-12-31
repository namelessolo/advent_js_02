import React from "react";
import CartItem from "../CartItem/CartItem";
import Totals from "../Totals/Totals";

const Cart = ({ data }) => {
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      <ul className="cart-summary">
        {data.map((order) => (
          <CartItem order={order} key={order.id} />
        ))}
      </ul>
      <Totals data={data} />
    </div>
  );
};

export default Cart;
