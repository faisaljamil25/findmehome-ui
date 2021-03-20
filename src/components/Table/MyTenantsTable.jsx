import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TenantTable(props) {
  const { tenants } = props;
  console.log(tenants);
  const classes = useStyles();

  if (tenants) {
    return (
      <>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Tenant</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow>
                  <TableCell align="center">{tenant.name}</TableCell>
                  <TableCell align="center">{tenant.email}</TableCell>
                  <TableCell align="center">{tenant.phone}</TableCell>
                  <TableCell align="center">{tenant.city}</TableCell>
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
