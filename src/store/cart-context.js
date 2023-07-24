import React from "react";

const CartContext = React.createContext({
    medicines: [],
    totalAmount: 0,
    addMedicine: (item) => {},
    removeItem: (id) => {},
    updateTotalAmount: (amount) => {},
});

export default CartContext;