import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state);
  return (
    <div>
      {items.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default Cart;
