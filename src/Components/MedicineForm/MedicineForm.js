import React, { useContext, useState } from "react";
import Button from "../UI/Button/Button";
import QuantityContext from "../../store/quantity-context";

const MedicineForm = (props) => {
  const quantityCtx = useContext(QuantityContext);
  const [enteredMedicineName, setEnteredMedicineName] = useState("");
  const [enteredMedicineDescription, setEnteredMedicineDescription] =
    useState("");
  const [enteredMedicinePrice, setEnteredMedicinePrice] = useState("");
  const [
    enteredMedicineAvailableQuantity,
    setEnteredMedicineAvailableQuantity,
  ] = useState("");

  const medicineNameChangeHandler = (event) => {
    setEnteredMedicineName(event.target.value);
  };

  const medicineDescriptionChangeHandler = (event) => {
    setEnteredMedicineDescription(event.target.value);
  };

  const medicinePriceChangeHandler = (event) => {
    setEnteredMedicinePrice(event.target.value);
  };

  const medicineAvailableQuantityChangeHandler = (event) => {
    setEnteredMedicineAvailableQuantity(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const medicineData = {
      medicineId: enteredMedicineName,
      name: enteredMedicineName,
      description: enteredMedicineDescription,
      price: enteredMedicinePrice,
      availableQuantity: enteredMedicineAvailableQuantity,
    };
    localStorage.setItem(enteredMedicineName, JSON.stringify(medicineData));
    //props.onAddMedicine(medicineData);
    quantityCtx.addMedicine(medicineData);
    //console.log(quantityCtx.medicines);
    setEnteredMedicineName("");
    setEnteredMedicineDescription("");
    setEnteredMedicinePrice("");
    setEnteredMedicineAvailableQuantity("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="medicinename">Medicine Name</label>
        <input
          id="medicinename"
          type="text"
          value={enteredMedicineName}
          onChange={medicineNameChangeHandler}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={enteredMedicineDescription}
          onChange={medicineDescriptionChangeHandler}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          min="1"
          value={enteredMedicinePrice}
          onChange={medicinePriceChangeHandler}
        ></input>
        <label htmlFor="quantityavailable">Quantity Available</label>
        <input
          id="quantityavailable"
          type="number"
          min="1"
          value={enteredMedicineAvailableQuantity}
          onChange={medicineAvailableQuantityChangeHandler}
        ></input>
        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default MedicineForm;
