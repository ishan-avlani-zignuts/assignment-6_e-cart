import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Grid
} from "@mui/material";
import { remove, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import Navbar from "../components/Navbar";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const [total, setTotal] = useState(calculateTotal());

  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
    setTotal(calculateTotal());
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
    setTotal(calculateTotal());
  };
  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
    setTotal(calculateTotal());
  };

  function calculateTotal() {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  }

  return (
    <>
      <Grid>
        <Navbar></Navbar>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>Title</TableCell>
              <TableCell sx={{ fontSize: "20px" }}>Price</TableCell>
              <TableCell sx={{ fontSize: "20px" }}>Quantity</TableCell>
              <TableCell sx={{ fontSize: "20px" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </Button>

                  {item.quantity}

                  <Button
                    variant="contained"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Total : ${calculateTotal()}</Typography>
      </Box>
    </>
  );
}

export default Cart;
