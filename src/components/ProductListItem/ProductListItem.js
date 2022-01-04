import React, { useContext } from "react";
import { OrdersContext } from "../../providers/OrdersProvider";
import { ReactComponent as Check } from "../../assets/check.svg";

const ProductListItem = ({ product, product: { name, price, image, alt, id } }) => {
  const { addOrder, orders } = useContext(OrdersContext);
  const isAdded = orders.some((order) => order.id === id);

  return (
    <li>
      {console.log("elo")}
      <div className="plate">
        <img src={"images/" + image} alt={alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">${price}</p>
        {!isAdded ? (
          <button className="add" onClick={() => addOrder(product)}>
            Add to Cart
          </button>
        ) : (
          <button className="in-cart" onClick={() => addOrder(product)}>
            <Check /> Added
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductListItem;
