import React from "react";
import MedicineItemForm from "./MedicineItemForm";

const MedicinesItem = (props) => {
  const price = `Rs. ${Number(props.price).toFixed(2)}`;
  return (
    <li>
      <div>
        <h4>{props.name}</h4>
        <div>{props.description}</div>
        <div>{price}</div>
        <div>{props.availableQuantity}</div>
        <MedicineItemForm medicineId={props.id} medicine={props} />
      </div>
    </li>
  );
};

export default MedicinesItem;
