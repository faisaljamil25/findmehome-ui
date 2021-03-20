import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Card from "../Card/Card";
import "./Properties.css";
import axios from "axios";

const fetchEvents = async () => {
  try {
    const body = `query{
                    getAllHouses{
                      name
                      rent
                      totalSharing
                      _id
                      address
                      description
                      dimensions
                      city
                    }
                  }`;
    const houses = await axios.post(
      "http://localhost:8000/graphql",
      {
        query: body,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const allhouses = houses.data.data.getAllHouses;
    return allhouses;
  } catch (e) {
    console.log(e.response.data);
  }
};

const Properties = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetchEvents()
      .then((houses) => {
        setHouses(houses);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div className="listProperty">
        <div className="row listPropertyHeader">
          <Typography variant="h4" className="property-heading">
            Properties for Rent
          </Typography>
          <Typography variant="h5">
            Find your Dream Home from 5 Lakh+ properties on our website
          </Typography>
        </div>
        <Grid container className={clsx("row", "listPropertyContent")}>
          {[...houses].map((house) => (
            <Grid item key={house._id} xs={12} sm={6} lg={4}>
              <Card
                name={house.name}
                rent={house.rent}
                totalSharing={house.totalSharing}
                _id={house._id}
                address={house.address}
                description={house.description}
                dimensions={house.dimensions}
                city={house.city}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Properties;
