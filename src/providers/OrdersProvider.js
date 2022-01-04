import React, { useState } from "react";
import { data as products } from "../data/data";

export const OrdersContext = React.createContext({
  products: [],
  orders: [],
  addOrder: () => {},
  increase: () => {},
  decrease: () => {},
});

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (product) => {
    setOrders([...orders, { ...product, quantity: 1 }]);
  };

  const increase = (id) => {
    setOrders((prevArray) => {
      const index = orders.findIndex((order) => order.id === id);
      const copyOfArray = [...prevArray];
      copyOfArray[index].quantity = prevArray[index].quantity + 1;
      return [...copyOfArray];
    });
  };

  const decrease = (id) => {
    setOrders((prevArray) => {
      const index = prevArray.findIndex((order) => order.id === id);
      const restOrders = prevArray.filter((order) => order.id !== id);
      const copyOfArray = [...prevArray];
      copyOfArray[index].quantity -= 1;
      if (orders[index].quantity < 1) {
        return restOrders;
      } else {
        return copyOfArray;
      }
    });
  };

  return (
    <OrdersContext.Provider value={{ products, orders, addOrder, increase, decrease }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
