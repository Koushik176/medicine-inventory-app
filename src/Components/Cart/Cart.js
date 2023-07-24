import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Button from "../UI/Button/Button";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (item) => {};

    const cartItemAddHandler = (item) => {};

    const cartItems = (
        <ul>
            {cartCtx.medicines.map((medicine) => (
                <CartItem
                key={medicine.medicineId}
                name={medicine.name}
                description={medicine.description}
                price={medicine.price}
                availableQuantity={medicine.availableQuantity}
                />
            ))}
        </ul>
    );

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>250.0</span>
        </div>
        <div>
            <Button>Close</Button>
            <Button>Order</Button>
        </div>
    </Modal>
};

export default Cart;