import React from "react";
import { Typography } from "@mui/material";

import { Button, Table, TableCell, TableRow } from "@mui/material";
const ProductList = (props) => {
  return (
    <>
      <Table>
        <TableRow>
          {Object.values(props.product).map((val) => (
            <TableCell>{val}</TableCell>
          ))}
          <TableCell>
            {
              <Button variant="text" onClick={() => props.onAdd(props.product)}>
                Add To Cart
              </Button>
            }
          </TableCell>
        </TableRow>
      </Table>
    </>
  );
};
export default ProductList;
