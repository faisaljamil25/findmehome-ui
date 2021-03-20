import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import { Paper, Button } from "@material-ui/core";
import axios from "axios";

import TenantDialog from "../DialogBox/TenantDialogBox";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const getMyTenants = async (HouseId) => {
  try {
    const body = `query{
                  getMyTenants(HouseId:"${HouseId}"){
                   name
                   email
                   phone
                   city
                   address
                   }
                  }`;
    const response = await axios.post(
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
    const Tenants = response.data.data.getMyTenants;
    return Tenants;
  } catch (e) {
    console.log(e.response.data);
  }
};

export default function DenseTable(props) {
  const { data } = props;
  const [tenants, setTenants] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const handleTenants = async (HouseId) => {
    try {
      const data = await getMyTenants(HouseId);
      setTenants(data);
      setOpenDialog(true);
    } catch (e) {
      console.log(e);
    }
  };
  if (data) {
    return (
      <>
        <TenantDialog
          openDialog={openDialog}
          closefun={() => {
            setOpenDialog(false);
          }}
          data={tenants}
        />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">HouseId</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Sharing</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">Rent</TableCell>
                <TableCell align="center">Tenants</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((house) => (
                <TableRow key={house._id}>
                  <TableCell component="th" scope="row">
                    {house._id}
                  </TableCell>
                  <TableCell align="center">{house.name}</TableCell>
                  <TableCell align="center">{house.totalSharing}</TableCell>
                  <TableCell align="center">{house.city}</TableCell>
                  <TableCell align="center">{house.rent}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        handleTenants(house._id);
                      }}
                      variant="outlined"
                      color="secondary"
                    >
                      Tenants
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  } else
    return (
      <>
        <h1>No Events Found</h1>
      </>
    );
}
