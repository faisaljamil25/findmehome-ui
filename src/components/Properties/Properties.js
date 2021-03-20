import { Grid } from "@material-ui/core";
import clsx from "clsx";
import Card from "../Card/Card";

const Properties = () => {
  return (
    <div>
      <div className="listProperty">
        <div className="row listPropertyHeader">
          <h3>Recently Listed Properties</h3>
          <h5>
            Fusce risus metus, placerat in consectetur eu, porttitor a est sed
            sed dolor lorem cras adipiscing
          </h5>
        </div>
        <Grid container className={clsx("row", "listPropertyContent")}>
          {[...new Array(5)].map((index) => (
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
