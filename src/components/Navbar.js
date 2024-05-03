import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useAuth } from "../context/Authcontext";
function Navbar() {

  const { currentUser, setCurrentUser } = useAuth();
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <Box>
      <AppBar style={{ backgroundColor: "black", color: "white" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white", fontSize: "18px" }}
          >
            My Online Shopping Site
          </Typography>
          <Box gap={2} display={"flex"}>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Box display={"flex"} sx={{ border: "1px solid #4CDBBE" }}>
                <Button
                  sx={{
                    color: "#4CDBBE",
                  }}
                >
                  Cart
                </Button>
                <Box
                  my={0.5}
                  sx={{
                    borderRadius: "45px",
                    backgroundColor: "#4CDBBE",
                    fontSize: "15px",
                  }}
                  px={3}
                  py={0.5}
                >
                  {items.length}
                </Box>
              </Box>
            </Link>
              {(currentUser &&
              <Button
                sx={{
                  color: "#4CDBBE",
                  border: "1px solid #4CDBBE",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
              )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
