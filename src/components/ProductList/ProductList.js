import React, { useContext } from "react";
import { OrdersContext } from "../../providers/OrdersProvider";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = () => {
  const { products } = useContext(OrdersContext);
  return (
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul className="menu">
        {products.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
