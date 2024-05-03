import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
const LoginForm = () => {
  const { authenticateUser, generateAuthToken } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const isAuthenticated = authenticateUser(email, password);
    if (isAuthenticated) {
      const authToken = generateAuthToken();
      console.log("Authentication successful.", authToken);
      navigate(`/home?token=${authToken}`); 
    } else {
      console.log("Invalid email or password.");
    }
  };

  return (
    <Box
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#3F3F3F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          width: "900px",
          height: "500px",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        <Box
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "24px",
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontSize: "35px", marginTop: "0" }}
            >
              Login to Your Account
            </Typography>
            <TextField
              {...register("email", { required: "Email is required" })}
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <br />
            <TextField
              {...register("password", { required: "Password is required" })}
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                border: "none",
                outline: "none",
                padding: "12px 0",
                backgroundColor: "#3bb19b",
                borderRadius: "20px",
                width: "180px",
                fontWeight: "bold",
                fontSize: "14px",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              Login
            </Button>
          </form>
        </Box>
        <Box
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3bb19b",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "24px",
          }}
        >
          <Typography
            variant="h3"
            style={{ fontSize: "40px", color: "white", marginTop: "0" }}
          >
            Login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
