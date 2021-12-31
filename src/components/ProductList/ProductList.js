import React from "react";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = ({ data, addOrder }) => {
  return (
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul className="menu">
        {data.map((product) => (
          <ProductListItem product={product} addOrder={addOrder} key={product.id} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
