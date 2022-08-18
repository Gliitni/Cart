import { Button, Typography } from "@mui/material";
import React from "react";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove, setCartItems, products } = props;
  const itemsPrice = cartItems?.reduce((a, c) => a + c.qty * c.price, 0);
  const find = cartItems.find((i) => i.id == 2)?.qty > 2;
  // console.log("products", products, "cartItem", cartItems,"find",find);

  const totalPrice = find ? itemsPrice - 5.6 : itemsPrice;
  // console.log("itemPrice", itemsPrice, "find", find);
  return (
    <>
      {cartItems.length === 0 && <Typography>Cart is empty</Typography>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <Typography>
            Quantity:{item.id == 1 ? item.qty*2: item.qty}
          </Typography>

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
