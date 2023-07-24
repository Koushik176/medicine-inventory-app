//import logo from './logo.svg';
import "./App.css";
import MedicineForm from "./Components/MedicineForm/MedicineForm";
import Header from "./Components/Layout/Header";
import Medicines from "./Components/Medicines/Medicines";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./Components/Cart/Cart";

const DUMMY_MEDICINES = [
  {
    medicineId: "m1",
    name: "Dolo 650",
    description: "given to patients who has fever",
    price: 10.0,
    availableQuantity: 20,
  },
  {
    medicineId: "m2",
    name: "Paracetamol 500",
    description: "given to patients who has fever",
    price: 20.0,
    availableQuantity: 30,
  },
];

function App() {
  const [medicinesArray, setMedicinesArray] = useState(DUMMY_MEDICINES);
  const [cartIsShown, setCartIsShown] = useState(false);

  const addMedicineHandler = (medicine) => {
    setMedicinesArray((prevMedicinesArray) => {
      return [medicine, ...prevMedicinesArray];
    });
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MedicineForm onAddMedicine={addMedicineHandler} />
      <Medicines medicines={medicinesArray} />
    </CartProvider>
  );
}

export default App;
