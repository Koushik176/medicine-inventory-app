import React, { useContext } from "react";
import classes from "./AvailableMedicines.module.css";
import MedicinesItem from "./MedicinesItem/MedicinesItem";
import Card from "../UI/Card";
import QuantityContext from "../../store/quantity-context";

const AvailableMedicines = (props) => {
  const quantityCtx = useContext(QuantityContext);
  // const medicinesList = props.medicines.map((medicine) => (
  //   <MedicinesItem
  //     key={medicine.medicineId}
  //     id={medicine.medicineId}
  //     name={medicine.name}
  //     description={medicine.description}
  //     price={medicine.price}
  //     availableQuantity={medicine.availableQuantity}
  //   />
  // ));
  const ContextMedicinesList = quantityCtx.medicines.map((medicine) => (
    <MedicinesItem
      key={medicine.medicineId}
      id={medicine.medicineId}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
      availableQuantity={medicine.availableQuantity}
    />
  ));
  return (
    <section className={classes.medicines}>
      {/* <ul>{medicinesList}</ul> */}
      <Card>
        <ul>{ContextMedicinesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicines;
