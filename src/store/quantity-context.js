import React from "react";

const QuantityContext = React.createContext({
    medicines: [],
    addMedicine: (medicine) => {},
    removeMedicine: (medicine) => {},
});

export default QuantityContext;