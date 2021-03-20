import React from "react";
import { makeStyles, createStyles, Box } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import Drawer from "../../components/dashboard/navbars/drawer";
import SellHouseForm from "../../components/Form/Form";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(4),
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(14),
      },
    },
    content: {
      marginTop: "30px",
    },
    heading: {
      margin: "auto",
      color: "#7a1139",
      marginTop: "25px",
      marginBottom: "15px",
      fontWeight: "900",
      textAlign: "center",
    },
    workarea: {
      display: "block",
      margin: "auto",
      marginTop: "10px",
    },
    imgcontainer: {
      marginTop: "10px",
      height: "350px",
    },
    image: {
      height: "300px",
      width: "auto",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        height: "120px",
        width: "120px",
      },
    },
  })
);
export default function SellHouse() {
  const classes = useStyles();

  return (
    <>
      <Drawer />
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.content}>
            <Box>
              <Typography variant="h4" className={classes.heading}>
                Rent Your House
              </Typography>
            </Box>
            <Box className={classes.imgcontainer}>
              <img src="/house3.svg" alt="Cover" className={classes.image} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.workarea}>
            <SellHouseForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
