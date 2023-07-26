import React from "react";

const CartContext = React.createContext({
    medicines: [],
    totalAmount: 0,
    addMedicine: (medicine) => {},
    removeMedicine: (medicine) => {},
    updateTotalAmount: (amount) => {},
});

export default CartContext;