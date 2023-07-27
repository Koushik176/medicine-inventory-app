import React, { useContext } from "react";
import MedicinesItem from "./MedicinesItem/MedicinesItem";
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
    <section>
      {/* <ul>{medicinesList}</ul> */}
      <ul>{ContextMedicinesList}</ul>
    </section>
  );
};

export default AvailableMedicines;
