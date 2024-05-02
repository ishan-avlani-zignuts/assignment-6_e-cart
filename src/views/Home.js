import React from "react";

import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { Box, Button, Typography, Grid } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import SAMPLE_PRODUCTS from "../data/products";
import Navbar from "../components/Navbar";

function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <Grid>
        <Navbar></Navbar>
      </Grid>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        sx={{ paddingTop: "400px" }}
      >
        {SAMPLE_PRODUCTS.map((product) => (
          <Box
            key={product.id}
            width={300}
            marginBottom={2}
            sx={{ alignItems: "center", textAlign: "center" }}
          >
            <Box
              boxShadow={3}
              borderRadius={3}
              overflow="hidden"
              width="100%"
              maxWidth={300}
            >
              <Box width={300}>
                <Typography variant="h6" noWrap>
                  {product.title.split(" ").slice(0, 7).join(" ")}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  ${product.description}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(add(product))}
                  fullWidth
                >
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Home;
