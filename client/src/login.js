import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import "./index.css";
import Navbar from "./navbar";

function Copyright() {
  return (
    <Typography variant="body2" align="center" style={{ color: "#fe60c7" }}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.godatainsights.com/">
        Go Data Insights
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    top: "-20px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#920c61 !important",
  },
}));

export default function Login() {
  const classes = useStyles();
  //for login form

  const [password, setPassword] = useState("");
  const [string, setString] = useState("");
  const history = useHistory();
  //for signup form
  const [open, setOpen] = useState("");
  const [regFirstName, setRegFirstName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [email, setEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidEmail2, setInvalidEmail2] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [InvalidPwd, setInvalidPwd] = useState("");

  //for login
  const [invalidLogEmail, setInvalidLogEmail] = useState("");

  const handleClickShowPassword = () => {
    setShowPwd(!showPwd);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  function validEmail(e) {
    const regex = RegExp(
      /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    );

    if (!regex.test(e)) {
      setInvalidEmail2("Please enter a valid email.");
    } else {
      setInvalidEmail2("");
      setEmail(e);
    }
  }
  function validEmail2(e) {
    const regex = RegExp(
      /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    );

    if (!regex.test(e)) {
      setInvalidLogEmail("Please enter a valid email.");
    } else {
      setInvalidLogEmail("");
      setEmail(e);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOnCancel = () => {
    setOpen(false);
    setInvalidMessage("");

    setRegFirstName("");
    setRegLastName("");
    setRegPassword("");
    setInvalidEmail("");
    setInvalidEmail2("");
    setInvalidPwd("");
    setString("");
  };
  const handleOnLogin = () => history.push({ pathname: "/dashboard" });

  const registerHandler = (e) => {
    e.preventDefault();
    setInvalidEmail("");
    setInvalidMessage("");
    const ob = {
      first_name: regFirstName,
      last_name: regLastName,
      email: email,
      password: regPassword,
    };

    //console.log(ob);
    if (
      regFirstName.trim() === "" ||
      regLastName.trim() === "" ||
      regPassword.trim() === "" ||
      email.trim() === ""
    ) {
      setInvalidMessage("Please fill out all the required fields.");
    } else {
      setInvalidMessage("");
      if (regPassword.length < 5) {
        setInvalidPwd("The password must be of minimum length 6 characters.");
      }
      if (invalidEmail2 !== "") {
        console.log("invalid email :<");
      } else {
        setInvalidEmail2("");
        axios
          .post("http://go-data-insights.herokuapp.com/api/register/", ob)
          .then(function (response) {
            // handle success

            console.log(response);
            //handleOnSignup();
            setOpen(false);
            setInvalidMessage("");
            setRegPassword("");
            setInvalidEmail("");
            setInvalidEmail2("");
            setInvalidPwd("");
          })
          .catch(function (error) {
            // handle error
            if (error.response.data.message === "User Already Exist") {
              setInvalidEmail(
                `An account with ${email}  already exists.\nPlease try a different Email Address. Remember, email addresses are not case sensitive.`
              );
            } else {
              setInvalidEmail("");
            }

            console.log(error.response.data.message);
          });
      }
    }
  };
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const ob = { email: email, password: password };
    axios
      .post("http://go-data-insights.herokuapp.com/api/login/", ob)
      .then(function (response) {
        // handle success
        localStorage.setItem("token", response.data.access_token);
        handleOnLogin();
        setString("");
      })
      .catch(function (error) {
        // handle error
        if (error.response.data.message === "Bad Email or Password") {
          setString("Invalid Email or Password");
        }
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Grid component="main" className="root">
        <Grid className="image">
          <img
            src="./../assets/images/vector.png"
            alt="hh"
            style={{ width: "100%", marginTop: "15%" }}
          />
        </Grid>
        <Grid className="section2" component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "-20px" }}
              className="font"
            >
              Sign in
            </Typography>
            <img
              src="./../assets/images/login.png"
              alt="login"
              style={{ height: "30%", width: "30%" }}
            />

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => validEmail2(e.target.value)}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {invalidLogEmail !== undefined && (
                <p style={{ color: "red" }}>{invalidLogEmail}</p>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              {string !== undefined && <p style={{ color: "red" }}>{string}</p>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={loginHandler}
                style={{
                  background:
                    "linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",
                  color: "white",
                }}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Button
                    variant="body2"
                    style={{
                      textTransform: "none",
                      color: "#a61273",
                    }}
                  >
                    Forgot password?
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="body2"
                    onClick={handleClickOpen}
                    style={{
                      textTransform: "none",
                      color: "#a61273",
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Button>
                  <Dialog
                    open={open}
                    onClose={registerHandler}
                    fullWidth
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle
                      id="form-dialog-title"
                      style={{ color: "#a61273" }}
                    >
                      Signup Form :{" "}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Enter Your Details :{" "}
                      </DialogContentText>
                      <TextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        id="regfirstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        required
                        InputProps={{
                          classes: {
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                        onChange={(e) => setRegFirstName(e.target.value)}
                      />
                      <TextField
                        variant="outlined"
                        autoFocus
                        margin="dense"
                        id="regLastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        required
                        InputProps={{
                          classes: {
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                        onChange={(e) => setRegLastName(e.target.value)}
                      />
                      <TextField
                        variant="outlined"
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        fullWidth
                        required
                        InputProps={{
                          classes: {
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                        onChange={(e) => validEmail(e.target.value)}
                      />
                      {invalidEmail !== undefined && (
                        <p style={{ color: "red" }}>{invalidEmail}</p>
                      )}
                      {invalidEmail2 !== undefined && (
                        <p style={{ color: "red" }}>{invalidEmail2}</p>
                      )}

                      <FormControl
                        //  className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                        autoFocus
                        fullWidth
                        required
                        size="small"
                        InputProps={{
                          classes: {
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          variant="outlined"
                          id="outlined-adornment-password"
                          type={showPwd ? "text" : "password"}
                          onChange={(e) => setRegPassword(e.target.value)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPwd ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          labelWidth={80}
                        />
                      </FormControl>
                      {InvalidPwd !== undefined && (
                        <p style={{ color: "red" }}>{InvalidPwd}</p>
                      )}

                      {invalidMessage !== undefined && (
                        <p style={{ color: "red" }}>{invalidMessage}</p>
                      )}
                    </DialogContent>
                    <br />
                    <br />
                    <DialogActions>
                      <Button
                        onClick={handleOnCancel}
                        style={{ color: "#a61273", borderColor: "#a61273" }}
                        variant="outlined"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={registerHandler}
                        style={{
                          background:
                            "linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",
                          color: "white",
                        }}
                        variant="contained"
                      >
                        Register
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
