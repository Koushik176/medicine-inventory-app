import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [medicines, updateMedicines] = useState([]);
    const [totalAmount, updateTotalAmount] = useState(0);

    const addMedicineToCartHandler = (medicine) => {
        // updateMedicines((prevMedicines) => {
        //     return [medicine, ...prevMedicines];
        // });
    };

    const removeMedicineFromCart = (medicine) => {

    };

    const cartContext = {
        medicines: medicines,
        totalAmount: totalAmount,
        addMedicine: addMedicineToCartHandler,
        removeMedicine: removeMedicineFromCart,
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;