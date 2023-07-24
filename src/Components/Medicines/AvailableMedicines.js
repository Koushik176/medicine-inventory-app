import React from "react";
import MedicineItem from "./MedicinesItem/MedicinesItem";

const AvailableMedicines = (props) => {
  const medicinesList = props.medicines.map((medicine) => (
    <MedicineItem
      key={medicine.medicineId}
      id={medicine.medicineId}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
      availableQuantity={medicine.availableQuantity}
    />
  ));
  return (
    <section>
      <ul>{medicinesList}</ul>
    </section>
  );
};

export default AvailableMedicines;
