import React, { useState } from "react";
import QuantityContext from "./quantity-context";

const QuantityProvider = (props) => {
  const [medicines, updateMedicines] = useState([]);

  const addMedicineToListHandler = (medicine) => {
    updateMedicines((prevMedicines) => {
      const existingMedicineIndex = prevMedicines.findIndex(
        (prevMedicine) => prevMedicine.medicineId === medicine.medicineId
      );

      const existingListMedicine = prevMedicines[existingMedicineIndex];

      let updatedMedicine;
      let updatedMedicines;

      if (existingListMedicine) {
        updatedMedicine = {
          ...existingListMedicine,
          availableQuantity: Number(existingListMedicine.availableQuantity) + 1,
        };
        updatedMedicines = [...prevMedicines];
        updatedMedicines[existingMedicineIndex] = updatedMedicine;
        return updatedMedicines;
      } else {
        return [medicine, ...prevMedicines];
      }
    });
  };

  const removeMedicineFromListHandler = (medicine) => {
    updateMedicines((prevMedicines) => {
      const existingMedicineIndex = prevMedicines.findIndex(
        (prevMedicine) => prevMedicine.medicineId === medicine.medicineId
      );

      const existingListMedicine = prevMedicines[existingMedicineIndex];

      let updatedMedicines;

      if (existingListMedicine.availableQuantity <= 0) {
        const updatedMedicine = {
            ...existingListMedicine,
            availableQuantity: 0,
        };
        updatedMedicines = [...prevMedicines];
        updatedMedicines[existingMedicineIndex] = updatedMedicine;
        alert("No Stock");
        return updatedMedicines;
      } else {
        const updatedMedicine = {
          ...existingListMedicine,
          availableQuantity: existingListMedicine.availableQuantity - medicine.quantity,
        };
        updatedMedicines = [...prevMedicines];
        updatedMedicines[existingMedicineIndex] = updatedMedicine;
        return updatedMedicines;
      }
    });
  };

  const quantityContext = {
    medicines: medicines,
    addMedicine: addMedicineToListHandler,
    removeMedicine: removeMedicineFromListHandler,
  };
  return (
    <QuantityContext.Provider value={quantityContext}>
      {props.children}
    </QuantityContext.Provider>
  );
};

export default QuantityProvider;
