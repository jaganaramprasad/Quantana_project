
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "react-bootstrap/Form";
import logo from "./logo.svg";
import "./Login.css";



const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [input, setInput] = useState("");
  const [color, setColor] = useState("#D4D4D4");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(true);
    setInput(e.target.value);

    if (e.target.value) {
      setColor("#FF8000");
    } else {
      setColor("#D4D4D4");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    console.log(event.email, event.password);
    event.preventDefault();

    


    
    let isFormValid = true;

    if (!email || !email.includes("@")) {
      setIsEmailValid(false);
      isFormValid = false;
    }

    if (!password) {
      setIsPasswordValid(false);
      isFormValid = false;
    }

    // if (isFormValid) {
    //   navigate("/Mainpage");
    // }
  };

  return (
    <div className="background container login_container px-0">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <img
              src={logo}
              alt=" "
              style={{ height: "40px", marginRight: "10px" }}
            />
            <h1 className="title">Turnkey</h1>
          </div>
          <p>
          
            
          </p>
          <p> . . . . . . . . . . . . . . . . . . . . . . . .</p>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <label className="form-label" htmlFor="form2Example1">
              Email
            </label>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <TextField
                required
                fullWidth
                id="login_email"
                name="email"
                autoComplete="email"
                placeholder="Enter Email address"
                value={email}
                onChange={handleEmailChange}
                error={!isEmailValid}
                helperText={!isEmailValid && "Please enter a valid email"}
                sx={{ mb: 2 }}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <label className="form-label" htmlFor="form2Example1">
                Password
              </label>

              <TextField
                required
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                error={!isPasswordValid}
                helperText={!isPasswordValid && "Please enter a password"}
                sx={{
                  mb: 3,
                  fontSize: "14px",
                  variant: "outlined",
                  size: "small",
                }}
                InputProps={{
                  endAdornment: showPassword ? (
                    <AiOutlineEyeInvisible onClick={handleTogglePassword} />
                  ) : (
                    <AiOutlineEye onClick={handleTogglePassword} />
                  ),
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              fullWidth
              sx={{ mb: 4 }}
              style={{
                borderRadius: "50px",

                background: color ? color : "",
                color: "black",
              }}
            >
              Sign In
            </Button>
            <p style={{ textAlign:"center"}}>. . . . . . . . . . . . . . . . . . . . . . . .</p>
            <Grid container>
              
              <Grid item xs>




                
                <Link
                  href="#"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Need help?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" style={{ textDecoration: "none" }}>
                  {"Contact support"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>


    </div>
  );
}
