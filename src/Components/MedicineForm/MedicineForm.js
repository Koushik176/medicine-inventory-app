import React, { useContext, useState } from "react";
import "./MedicineForm.css";
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
    <div className="form-content">
      <form onSubmit={formSubmitHandler}>
        <div className="new-medicine__controls">
          <div className="new-medicine__control">
            <label htmlFor="medicinename">Medicine Name</label>
            <input
              id="medicinename"
              type="text"
              value={enteredMedicineName}
              onChange={medicineNameChangeHandler}
            ></input>
          </div>
          <div className="new-medicine__control">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              value={enteredMedicineDescription}
              onChange={medicineDescriptionChangeHandler}
            ></input>
          </div>
          <div className="new-medicine__control">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              min="1"
              value={enteredMedicinePrice}
              onChange={medicinePriceChangeHandler}
            ></input>
          </div>
          <div className="new-medicine__control">
            <label htmlFor="quantityavailable">Quantity Available</label>
            <input
              id="quantityavailable"
              type="number"
              min="1"
              value={enteredMedicineAvailableQuantity}
              onChange={medicineAvailableQuantityChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-medicine__actions">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default MedicineForm;
