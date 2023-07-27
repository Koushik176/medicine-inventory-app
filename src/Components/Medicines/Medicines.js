import React, { Fragment } from "react";
import AvailableMedicines from "./AvailableMedicines";

const Medicines = (props) => {
    return <Fragment>
        <AvailableMedicines /> {/*medicines={props.medicines}*/}
    </Fragment>
};

export default Medicines;