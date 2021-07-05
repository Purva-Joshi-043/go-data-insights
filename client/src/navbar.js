import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import './index.css'
export default function Navbar(){
    return (
      <AppBar
        position="relative"
        style={{
          background:
            "linear-gradient(20deg, rgba(169, 18, 154, 1) 10%, rgba(84, 50, 153, 1) 44%, rgba(56, 105, 182, 1) 70%)",
        }}
      >
        <Grid container spacing={2} justify="space-between">
          <Grid item>
            {/* <AnnouncementIcon className={classes.icon} /> */}
            <Toolbar>
              {/* <img
                src="./../assets/images/logo.png"
                alt="logo"
                className={classes.icon}
              /> */}
              <Typography
                variant="h5"
                color="inherit"
                className="font"
              >
                Go Data Insights
              </Typography>
            </Toolbar>
          </Grid>
          {/* <Grid item>{<Logout />}</Grid> */}
        </Grid>
      </AppBar>
    );
}
