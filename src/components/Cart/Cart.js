import React, { useContext } from "react";
import { OrdersContext } from "../../providers/OrdersProvider";
import CartItem from "../CartItem/CartItem";
import Totals from "../Totals/Totals";

const Cart = () => {
  const { orders } = useContext(OrdersContext);
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      {orders.length < 1 && <p className="empty">No orders</p>}
      <ul className="cart-summary">
        {orders.map((order) => (
          <CartItem order={order} key={order.id} />
        ))}
      </ul>
      {orders.length > 0 ? <Totals orders={orders} /> : null}
    </div>
  );
};

export default Cart;
