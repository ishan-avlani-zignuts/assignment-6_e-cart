import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Box } from "@mui/material";

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
      navigate("/home");
    } else {
      console.log("Invalid email or password.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 400, 
        margin: "auto", 
        paddingTop: 50, 
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginForm;
