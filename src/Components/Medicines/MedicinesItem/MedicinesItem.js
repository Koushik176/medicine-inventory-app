import React from "react";
import MedicineItemForm from "./MedicineItemForm";

const MedicineItem = (props) => {
  return (
    <li>
      <div>
        <h4>{props.name}</h4>
        <div>
          {props.description}
          {props.price}
          {props.availableQuantity}
        </div>
        <MedicineItemForm id={props.id} medicine={props}/>
      </div>
    </li>
  );
};

export default MedicineItem;
