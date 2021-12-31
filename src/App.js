import React, { useState } from "react";

import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { data } from "./data/data";
import { firstOrder } from "./data/firstOrder";

function App() {
  const [orders, setOrders] = useState(firstOrder);

  const addOrder = (id, data) => {
    const filteredOrder = data.filter((order) => id === order.id)[0];
    setOrders([...orders, { ...filteredOrder, quantity: 1 }]);
    console.log(orders);
  };
  return (
    <div className="wrapper menu">
      <ProductList data={data} addOrder={addOrder} />
      <Cart data={orders} />
    </div>
  );
}

export default App;
