import React from "react";

const AddButton = ({ children, addOrder, id, data }) => {
  return (
    <button className="add" onClick={() => addOrder(id, data)}>
      {children}
    </button>
  );
};

export default AddButton;
