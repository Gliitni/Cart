import Cart from "./components/Cart";
import { useState, useMemo } from "react";
import ProductList from "./components/ProductList";
import { Grid, Stack, Card, Typography } from "@mui/material";

function App() {
  const products = [
    {
      id: "1",
      name: "Fruit tea",
      price: 7.2,
    },
    {
      id: "2",
      name: "Strawberries",
      price: 6.0,
    },
    {
      id: "3",
      name: "Coffee",
      price: 10.33,
    },
  ];
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    // console.log("exist", exist, "product", product.id == 1);
    // console.log("product", product, "cartItem", cartItems, "exist", exist);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id === product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <Grid>
        <Typography variant="h4" gutterBottom align="center">
          SHOPPING CART
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
        >
          <Card sx={{ p: 30 }}>
            <Typography variant="h5">product</Typography>

            {products.map((product) => (
              <ProductList key={product.id} product={product} onAdd={onAdd} />
            ))}
          </Card>
          <Card sx={{ p: 30 }}>
            <Typography variant="h5">Cart Items</Typography>

            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              setCartItems={setCartItems}
              products={products}
            />
          </Card>
        </Stack>
      </Grid>
    </>
  );
}

export default App;
