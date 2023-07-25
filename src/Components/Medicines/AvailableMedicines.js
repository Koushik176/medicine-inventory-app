import React from "react";
import MedicinesItem from "./MedicinesItem/MedicinesItem";

const AvailableMedicines = (props) => {
  const medicinesList = props.medicines.map((medicine) => (
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
    <section>
      <ul>{medicinesList}</ul>
    </section>
  );
};

export default AvailableMedicines;
