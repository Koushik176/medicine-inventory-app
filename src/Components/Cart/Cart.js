import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Button from "../UI/Button/Button";
import QuantityContext from "../../store/quantity-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityCtx = useContext(QuantityContext);

  const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.medicines.length > 0;

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeMedicine(item);
    quantityCtx.addMedicine({ ...item, quantity: 1 });
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addMedicine({ ...item, quantity: 1 });
    cartCtx.updateTotalAmount(Number(item.price));
    quantityCtx.removeMedicine({ ...item, quantity: 1 });
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

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
