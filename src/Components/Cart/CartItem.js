import React from "react";
import Button from "../UI/Button/Button";

const CartItem = (props) => {
    const price = `Rs. ${Number(props.price).toFixed(2)}`;

    return <li>
        <div>
            <h2>{props.name}</h2>
            <span>{price}</span>
            <span>x{props.amount}</span>
        </div>
        <div>
            <Button onClick={props.onRemove}>-</Button>
            <Button onClick={props.onAdd}>+</Button>
        </div>
    </li>
};

export default CartItem;