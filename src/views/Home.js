import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { Box, Button, Typography, Grid, Card } from "@mui/material";
import SAMPLE_PRODUCTS from "../data/products";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ generateAuthToken }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect triggered");
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    toast.success("Login successful.");
    if (!authToken) {
      toast.error("You need to login first");
      navigate("/login");
    }
  }, [navigate]);


  return (
    <>
      <Grid>
        <Navbar></Navbar>
      </Grid>
      <ToastContainer />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        width="100vw"
        height="100vh"
        sx={{
          backgroundColor: "#3F3F3F",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">BUY YOUR FAVOURITE PRODUCTS</Typography>
        {SAMPLE_PRODUCTS.map((product) => (
          <Box
            key={product.id}
            sx={{
              alignItems: "center",
              textAlign: "center",
              width: "500px",
            }}
          >
            <Card
              style={{
                width: "100%",
                marginBottom: "16px",
                height: "125px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <Typography variant="h6" noWrap sx={{ fontWeight: 900 }}>
                  {product.title.split(" ").slice(0, 7).join(" ")}
                </Typography>
                <Box
                  px={3}
                  py={0.5}
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "25px",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ alignItems: "center" }}
                  >
                    {" "}
                    ${product.price}
                    {".00"}
                  </Typography>{" "}
                </Box>
              </Box>
              <Box sx={{ margin: "10px" }}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ textAlign: "start" }}
                >
                  {product.description}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "end", margin: "10px" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => dispatch(add(product))}
                >
                  Add to cart
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Home;
