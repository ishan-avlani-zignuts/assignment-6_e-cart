import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button , Box} from "@mui/material";

function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <Box>
      <AppBar
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white", fontSize: "18px" }}
          >
            My online shopping site
          </Typography>
          <Link to="/cart">
            <Button
              sx={{
                color: "green",
                border: 1,
                borderColor: "green",
                fontSize: "18px",
              }}
            >
              Cart {items.length}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
