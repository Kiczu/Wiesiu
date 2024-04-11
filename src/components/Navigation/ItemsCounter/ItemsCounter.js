import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../context/CartContext/CartContext";
import "./ItemsCounter.scss";

const ItemsCounter = () => {
  const [count, setCount] = useState(0);
  const { getAllQuantity } = useContext(CartContext);

  useEffect(() => {
    setCount(getAllQuantity());
  }, [getAllQuantity]);

  return <span className="items-count">{count}</span>;
};

export default ItemsCounter;
