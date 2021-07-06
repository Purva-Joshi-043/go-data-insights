import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./navbar";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";

function Copyright() {
  return (
    <Typography
      variant="body2"
      style={{
        color: "#fe60c7",
        top: "90%",
        left: "50%",
        position: "absolute",
        textAlign: "center",
        transform: "translate(-50%,-50%)",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.godatainsights.com/">
        Go Data Insights
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Dashboard() {
  const history = useHistory();
  const handleOnLogout = () => history.push({ pathname: "/" });
  const handleOnTokenNotFound = () => {
    history.push({ pathname: "/" });
  };
  if (localStorage.getItem("token") === null) {
    handleOnTokenNotFound();
  }
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios
      .get("https://go-data-insights.herokuapp.com/api/dashboard/", axiosConfig)
      .then(function (response) {
        //handle Success
        console.log("success");
      })
      .catch(function (error) {
        // handle error
        if (
          error.response.data.msg === "Missing Authorization Header" ||
          error.response.data.msg === "Token has expired"
        ) {
          handleOnTokenNotFound();
        }
        console.log(error.response.data);
      });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        <h2 style={{ textAlign: "center", marginTop: "15%", color: "#920c61" }}>
          Welcome to the Dashboard !!
        </h2>
        <Button
          style={{
            background:
              "linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",
            color: "white",
            // marginLeft:"46.5%",
            // marginRight
            marginTop: "40px",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          onClick={handleOnLogout}
        >
          Logout
        </Button>
      </main>
      <Copyright />
    </React.Fragment>
  );
}
