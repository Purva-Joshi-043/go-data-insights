import React from 'react'
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./navbar"
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router';

export default function Dashboard (){
  const history = useHistory()
   const handleOnLogout = () => history.push({ pathname: "/" });
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


