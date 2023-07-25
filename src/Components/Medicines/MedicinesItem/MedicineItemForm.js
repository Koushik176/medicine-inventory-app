import React, { useContext } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button/Button";
import CartContext from "../../../store/cart-context";

const MedicineItemForm = (props) => {
  const cartCtx = useContext(CartContext);

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
  };
  return (
    <form>
      <Input
        input={{
          id: props.medicineId,
          type: "number",
          min: "1",
          max: "60",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button onClick={addMedicineToCart}>Add to Cart</Button>
    </form>
  );
};

export default MedicineItemForm;
