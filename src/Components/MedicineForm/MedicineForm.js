import React, { useState } from "react";
import Button from "../UI/Button/Button";

const MedicineForm = (props) => {
  const [enteredMedicineName, setEnteredMedicineName] = useState("");
  const [enteredMedicineDescription, setEnteredMedicineDescription] =
    useState("");
  const [enteredMedcinePrice, setEnteredMedicinePrice] = useState("");
  const [
    enteredMedicineAvailableQuantity,
    setEnteredMedicineAvailableQuantity,
  ] = useState("");

  const medincineNameChangeHandler = (event) => {
    setEnteredMedicineName(event.target.value);
  };

  const medincineDescriptionChangeHandler = (event) => {
    setEnteredMedicineDescription(event.target.value);
  };

  const medincinePriceChangeHandler = (event) => {
    setEnteredMedicinePrice(event.target.value);
  };

  const medincineAvailableQuantityChangeHandler = (event) => {
    setEnteredMedicineAvailableQuantity(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const medicineData = {
      medicineId: enteredMedicineName,
      name: enteredMedicineName,
      description: enteredMedicineDescription,
      price: enteredMedcinePrice,
      availableQuantity: enteredMedicineAvailableQuantity,
    };
    localStorage.setItem(enteredMedicineName, JSON.stringify(medicineData));
    props.onAddMedicine(medicineData);
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
          onChange={medincineNameChangeHandler}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={enteredMedicineDescription}
          onChange={medincineDescriptionChangeHandler}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          min="1"
          value={enteredMedcinePrice}
          onChange={medincinePriceChangeHandler}
        ></input>
        <label htmlFor="quantityavailable">Quantity Available</label>
        <input
          id="quantityavailable"
          type="number"
          min="1"
          value={enteredMedicineAvailableQuantity}
          onChange={medincineAvailableQuantityChangeHandler}
        ></input>
        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default MedicineForm;
