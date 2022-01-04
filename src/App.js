import React from "react";
import OrderProvider from "./providers/OrdersProvider";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="wrapper menu">
      <OrderProvider>
        <ProductList />
        <Cart />
      </OrderProvider>
    </div>
  );
}

export default App;
