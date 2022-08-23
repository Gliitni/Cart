import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove, setCartItems, products } = props;
  const itemsPrice = cartItems?.reduce((a, c) => a + c.qty * c.price, 0);
  const find = cartItems.find((i) => i.id == 2)?.qty > 2;

  const fruittea = Math.ceil((cartItems.map((i) => i.qty) / 3) * 2);
  const totalPrice2 = find ? itemsPrice - 5.6 : itemsPrice;

  const totalPrice1 =
    cartItems.find((i) => i.id == 1) &&
    fruittea * cartItems.map((i) => i.price);
  const totalPrice =  cartItems.find((i) => i.id == 1)&&totalPrice1 ||totalPrice2|| itemsPrice;
 

  return (
    <>
      {cartItems.length === 0 && <Typography>Cart is empty</Typography>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>

          <div>
            {item.qty} x ${item.price}
          </div>
          <div>
            <Button variant="outlined" onClick={() => onRemove(item)}>
              -
            </Button>
            <Button variant="outlined" onClick={() => onAdd(item)}>
              +
            </Button>
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <h3>Total Price: ${totalPrice}</h3>
          <Button variant="contained" onClick={() => setCartItems([])}>
            Clear
          </Button>
        </>
      )}
    </>
  );
};
export default Cart;
