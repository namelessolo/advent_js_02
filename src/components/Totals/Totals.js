import React from "react";

const Totals = ({ orders }) => {
  const totalCost = orders.reduce((acc, { price, quantity }) => +acc + +price * +quantity, 0);

  return (
    <div className="totals">
      <div className="line-item">
        <div className="label">Subtotal:</div>
        <div className="amount price subtotal">{(totalCost * 0.9).toFixed(2)}</div>
      </div>
      <div className="line-item">
        <div className="label">Tax:</div>
        <div className="amount price tax">{(totalCost * 0.1).toFixed(2)}</div>
      </div>
      <div className="line-item total">
        <div className="label">Total:</div>
        <div className="amount price total">{totalCost.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Totals;
