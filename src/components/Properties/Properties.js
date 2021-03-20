import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import Card from "../Card/Card";
import "./Properties.css";

const Properties = () => {
  return (
    <div>
      <div className="listProperty">
        <div className="row listPropertyHeader">
          <Typography variant="h4">Recently Listed Properties</Typography>
          <Typography variant="h5">
            Fusce risus metus, placerat in consectetur eu, porttitor a est sed
            sed dolor lorem cras adipiscing
          </Typography>
        </div>
        <Grid container className={clsx("row", "listPropertyContent")}>
          {[...new Array(9)].map((index) => (
            <Grid item key={index} xs={12} sm={6} lg={4}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Properties;
