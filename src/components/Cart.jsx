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
          <Typography>{item.name}</Typography>
          <Typography>
            Quantity:{item.id == 1 ? item.qty + 1 : item.qty}
          </Typography>
          <div>
            <Button onClick={() => onRemove(item)}>-</Button>
            <Button onClick={() => onAdd(item)}>+</Button>
          </div>

          <div>
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          {/* <Typography>Items Price</Typography>
            <Typography>${itemsPrice}</Typography> */}
          {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div> */}
          {/* <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div> */}

          <Typography>Total Price</Typography>

          <Typography>${totalPrice}</Typography>
          <Button variant="contained" onClick={() => setCartItems([])}>
            Clear
          </Button>
        </>
      )}
    </>
  );
};
export default Cart;
