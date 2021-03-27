import "../../components/Card/Card.css";
import Drawer from "../../components/dashboard/navbars/drawer";
import { Grid, makeStyles, createStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      marginTop: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
const Booked = () => {
  const classes = useStyles();
  return (
    <>
      <Drawer />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.content}
      >
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center">
            Booked House on Rent
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="singleHouse">
            <div className="card">
              <div className="figure">
                <img src="/house.jpg" alt="bg" />
                <div className="figCaption">
                  <div>₹ 5000</div>
                  <span className="icon-eye"> 200</span>
                  <span className="icon-heart"> 54</span>
                  <span className="icon-bubble"> 13</span>
                </div>
                <div className="figView">
                  <span className="icon-eye" />
                </div>
                <div className="figType">5 Sharing </div>
              </div>
              <h2>Modern Residency</h2>
              <div className="cardAddress">
                <span className="icon-pointer" />
                House No. 453, Dwarka Sector 32 , New Delhi
              </div>
              <div className="cardAddress">
                3 BHK Apartment in Dwarka, New Delhi location. This apartment is
                shared by 3 people.
              </div>
              <ul className="cardFeat">
                <li>
                  <span className="icon-frame" /> 900sqft
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Booked;
