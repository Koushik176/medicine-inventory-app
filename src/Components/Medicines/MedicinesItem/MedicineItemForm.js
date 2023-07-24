import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button/Button";

const MedicineItemForm = (props) => {
    return <form>
        <Input
        input={{
            id:props.id,
            type: "number",
            min: "1",
            max: "60",
            step: "1",
            defaultValue: "1",
        }} />
        <Button>Add to Cart</Button>
    </form>
};

export default MedicineItemForm;