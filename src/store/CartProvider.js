import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [medicines, updateMedicines] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addMedicineToCartHandler = (medicine) => {
    updateMedicines((prevMedicines) => {
      const existingMedicineIndex = prevMedicines.findIndex(
        (prevMedicine) => prevMedicine.medicineId === medicine.medicineId
      );

      const existingCartMedicine = prevMedicines[existingMedicineIndex];

      let updatedMedicine;
      let updatedMedicines;

      if (existingCartMedicine) {
        updatedMedicine = {
          ...existingCartMedicine,
          quantity:
            Number(existingCartMedicine.quantity) + Number(medicine.quantity),
        };
        updatedMedicines = [...prevMedicines];
        updatedMedicines[existingMedicineIndex] = updatedMedicine;
        return updatedMedicines;
      } else {
        return [medicine, ...prevMedicines];
      }
    });
  };

  const removeMedicineFromCart = (medicine) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount - medicine.price;
    });

    updateMedicines((prevMedicines) => {
      const existingMedicineIndex = prevMedicines.findIndex(
        (prevMedicine) => prevMedicine.id === medicine.medicineId
      );

      const existingCartMedicine = prevMedicines[existingMedicineIndex];

      let updatedMedicines;

      if (existingCartMedicine.quantity === 1) {
        updatedMedicines = prevMedicines.filter(
          (filterMedicine) =>
            filterMedicine.medicineId !== existingCartMedicine.medicineId
        );
        return updatedMedicines;
      }else {
        const updatedMedicine = {...existingCartMedicine, quantity: existingCartMedicine.quantity - 1};
        updatedMedicines = [...prevMedicines];
        updatedMedicines[existingMedicineIndex] = updatedMedicine;
        return updatedMedicines;
      }
    });
  };

  const totalAmountUpdateHandler = (amount) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount + amount;
    });
  };

  const cartContext = {
    medicines: medicines,
    totalAmount: totalAmount,
    updateTotalAmount: totalAmountUpdateHandler,
    addMedicine: addMedicineToCartHandler,
    removeMedicine: removeMedicineFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
