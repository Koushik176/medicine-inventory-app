import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Button from "../UI/Button/Button";
import QuantityContext from "../../store/quantity-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const quantityCtx = useContext(QuantityContext);

    const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (item) => {
        cartCtx.removeMedicine(item);
        quantityCtx.addMedicine({...item, quantity: 1});
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addMedicine({...item, quantity: 1});
        cartCtx.updateTotalAmount(Number(item.price));
        quantityCtx.removeMedicine({...item, quantity: 1});
    };

    const cartItems = (
        <ul>
            {cartCtx.medicines.map((medicine) => (
                <CartItem
                key={medicine.medicineId}
                name={medicine.name}
                amount={medicine.quantity}
                price={medicine.price}
                onRemove={cartItemRemoveHandler.bind(null, medicine)}
                onAdd={cartItemAddHandler.bind(null, medicine)}
                />
            ))}
        </ul>
    );

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span>Total Amount  </span>
            <span>{totalAmount}</span>
        </div>
        <div>
            <Button onClick={props.onClose}>Close</Button>
            <Button>Order</Button>
        </div>
    </Modal>
};

export default Cart;