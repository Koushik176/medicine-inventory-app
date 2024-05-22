import React from "react";
import classes from "./MedicineItem.module.css";
import MedicineItemForm from "./MedicineItemForm";

const MedicinesItem = (props) => {
  const price = `Rs. ${Number(props.price).toFixed(2)}`;
  return (
    <li className={classes.medicine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.units}>
          Available units: {props.availableQuantity}
        </div>
      </div>
      <div>
        <MedicineItemForm medicineId={props.id} medicine={props} />
      </div>
    </li>
  );
};

export default MedicinesItem;
