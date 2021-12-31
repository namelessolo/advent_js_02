import React from "react";
import AddButton from "../AddButton/AddButton";

const ProductListItem = ({ data, addOrder, product: { name, price, image, alt, id } }) => {
  return (
    <li>
      <div className="plate">
        <img src={"images/" + image} alt={alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">${price}</p>
        <AddButton addOrder={addOrder} id={id} data={data}>
          Add to Cart
        </AddButton>
      </div>
    </li>
  );
};

export default ProductListItem;
