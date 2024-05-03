import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography, Box, Grid, Card } from "@mui/material";
import { remove, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
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
      <Box
        sx={{ backgroundColor: "#313131", justifyContent: "center" }}
        width="100vw"
        height="100vh"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          position={"absolute"}
          top={"300px"}
          left={"700px"}
          sx={{
            backgroundColor: "#313131",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{ paddingLeft: "20px", paddingTop: "10px", fontWeight: 800 }}
          >
            Your Shopping Cart
          </Typography>
          {cartItems.map((item) => (
            <Box
              px={2.3}
              key={item.id}
              sx={{
                alignItems: "center",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <Card
                style={{
                  width: "400px",
                  marginBottom: "16px",
                  backgroundColor: "#575757",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{ fontWeight: 900, fontSize: "20px" }}
                  >
                    {item.title.split(" ").slice(0, 7).join(" ")}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{
                        alignItems: "center",
                        fontWeight: 900,
                        fontSize: "20px",
                      }}
                    >
                      ${item.quantity * item.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontStyle: "italic",
                        margin: "6px",
                      }}
                    >
                      (${item.price}/item)
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    margin: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ left: "0px" }}>
                    <Typography variant="body1" color="white">
                      x {item.quantity}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "end",
                      margin: "10px",
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <Box
                      height={"30px"}
                      width={"30px"}
                      variant="outlined"
                      onClick={() => handleIncreaseQuantity(item.id)}
                      sx={{
                        border: "1px solid white",
                        color: "white",
                        textAlign: "center",
                        fontSize: "20px",
                        alignItems: "center",
                        borderRadius: "5px",
                      }}
                    >
                      +
                    </Box>
                    <Box
                      height={"30px"}
                      width={"30px"}
                      variant="outlined"
                      onClick={() => handleDecreaseQuantity(item.id)}
                      sx={{
                        border: "1px solid white",
                        color: "white",
                        textAlign: "center",
                        fontSize: "22px",
                        alignItems: "center",
                        borderRadius: "5px",
                      }}
                    >
                      -
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    alignItems: "end",
                    textAlign: "end",
                    padding: "10px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      fontSize: "12px",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </Card>
            </Box>
          ))}
          <Typography
            variant="h5"
            sx={{ alignItems: "center", textAlign: "center", bottom: "10px" }}
          >
            Total : ${calculateTotal()}
          </Typography>
          <Box height={"20px"} width={"20px"}>
            <Link to="/home">
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid white",
                  color: "white",
                  fontSize: "12px",
                  borderRadius: "5px",
                  left: "175px",
                }}
              >
                Back
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cart;
