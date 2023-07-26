import React, { useState } from "react";
import QuantityContext from "./quantity-context";

const QuantityProvider = (props) => {
    const [medicines, updateMedicines] = useState([]);

    const addMedicineToListHandler = (medicine) => {
        updateMedicines((prevMedicines) => {
            console.log(medicine);
            return [medicine, ...prevMedicines];
        });
    };

    const removeMedicineFromListHandler = (medicine) => {};

    const quantityContext = {
        medicines: medicines,
        addMedicine: addMedicineToListHandler,
        removeMedicine: removeMedicineFromListHandler,

    };
    return <QuantityContext.Provider value={quantityContext}>
        {props.children}
    </QuantityContext.Provider>
};

export default QuantityProvider;
