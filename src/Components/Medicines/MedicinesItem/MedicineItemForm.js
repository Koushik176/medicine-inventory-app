import React, { useContext, useState } from "react";
import classes from "./MedicineItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
import QuantityContext from "../../../store/quantity-context";

const MedicineItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityCtx = useContext(QuantityContext);
  const [buttonDisable, setButtonDisable] = useState(false);

  const addMedicineToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById(props.medicineId).value;
    cartCtx.addMedicine({
      ...props.medicine,
      quantity: quantity,
      medicineId: props.medicineId,
    });
    const cartPrice = props.medicine.price * quantity;
    cartCtx.updateTotalAmount(cartPrice);
    quantityCtx.removeMedicine({
      ...props.medicine,
      quantity: quantity,
      medicineId: props.medicineId,
    });
    const existingMedicineIndex = quantityCtx.medicines.findIndex(
      (medicine) => props.medicineId === medicine.medicineId
    );
    const existingListMedicine = quantityCtx.medicines[existingMedicineIndex];
    if (existingListMedicine.availableQuantity <= 1) {
      setButtonDisable(true);
    }
  };
  return (
    <form className={classes.form}>
      <Input
        label="units"
        input={{
          id: props.medicineId,
          type: "number",
          min: "1",
          max: "60",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!buttonDisable && (
        <button onClick={addMedicineToCart}>Add to Cart</button>
      )}
    </form>
  );
};

export default MedicineItemForm;
