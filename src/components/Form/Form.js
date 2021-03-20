import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import TextField from "@material-ui/core/TextField";

import { useHistory } from "react-router-dom";
import axios from "axios";
import Snackbar from "../../context/snackbar";
const cities = [
  "Bhopal",
  "Jabalpur",
  "Gwalior",
  "New Delhi",
  "Mumbai",
  "Jaipur",
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // display: "flex",
      // flexWrap: "column",
      // justifyContent: "center",
      // alignItems: "center",
      // marginTop: "30px",
    },
    heading: {
      margin: "auto",
      color: "#43ff23",
      marginTop: "25px",
      marginBottom: "15px",
    },
    griditem: {
      display: "flex",
      justifyContent: "space-around",
      margin: "auto",
      marginTop: "25px",
    },
    border: {
      border: "solid 3px black",
    },
    form: {},
    inputField: {
      maxWidth: "400px",
      //height: "40px",
    },
    textField: {
      height: "15px",
    },
    btn: {
      margin: "auto",
      marginTop: "0px",
      width: "150px",
    },
  })
);
export default function SellHouseForm() {
  const classes = useStyles();
  const history = useHistory();
  const Context2 = useContext(Snackbar);
  const inititalValues = {
    name: "",
    rent: "",
    dimensions: "",
    city: "",
    address: "",
    description: "",
    totalSharing: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Title can't be Empty"),
    rent: yup.number().required("Rent can't be Empty"),
    city: yup.string().required("This field is  is Required"),
    description: yup.string().required("This field is Required"),
    totalSharing: yup.number().required("This field is Required"),
    dimension: yup.string().required("This field is Required"),
    address: yup.string().required("This field is Required"),
  });
  const handleCity = (values, setValues, newValue) => {
    setValues({
      ...values,
      city: newValue,
    });
  };
  const submitHandler = async (values) => {
    try {
      const body = `mutation{
  createHouse(HouseInput:{
    name:"${values.name}",
    city:"${values.city}",
    address:"${values.address}",
    rent:${values.rent},
    totalSharing:${values.totalSharing},
    description:"${values.description}",
    dimensions:"${values.dimensions}",
  }){
    name
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
      if (response.data.data.createHouse.name)
        Context2.openbarfun("success", "House added to sell");
      history.push("/");
    } catch (error) {
      console.log(error.response.data);
      Context2.openbarfun("error", "Something Went Wrong");
    }
  };

  return (
    <>
      <div>
        <Grid container className={classes.root} justifyContent="center">
          <Formik
            initialValues={inititalValues}
            validationSchema={validationSchema}
            onSubmit={(values) => submitHandler(values)}
          >
            {({ values, setValues }) => (
              <Form aria-label="register form" id="register">
                <Grid container className={classes.form}>
                  <Grid item xs={12} lg={9} className={classes.griditem}>
                    <Field name="name">
                      {({ field, meta }) => (
                        <TextField
                          fullWidth
                          size="small"
                          label="House Name"
                          variant="outlined"
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ""}
                          className={classes.inputField}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={9} lg={9} className={classes.griditem}>
                    <Field name="rent">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            fullWidth
                            size="small"
                            type="number"
                            label="Rent"
                            variant="outlined"
                            {...field}
                            error={!!(meta.touched && meta.error)}
                            helperText={meta.touched ? meta.error : ""}
                            className={classes.inputField}
                          />
                        );
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={9} lg={9} className={classes.griditem}>
                    <Field name="totalSharing">
                      {({ field, meta }) => (
                        <TextField
                          fullWidth
                          size="small"
                          label="Occupancy"
                          variant="outlined"
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ""}
                          className={classes.inputField}
                          type="number"
                        />
                      )}
                    </Field>
                  </Grid>

                  <Grid item xs={10} lg={7} className={classes.griditem}>
                    <Field name="city">
                      {({ field, meta }) => (
                        <Autocomplete
                          id="combo-box-demo"
                          options={cities}
                          getOptionSelected={(option) => option}
                          fullWidth
                          className={classes.inputField}
                          value={values.city}
                          onChange={(event, newValue) =>
                            handleCity(values, setValues, newValue)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              size="small"
                              label="City"
                              variant="outlined"
                              error={!!(meta.touched && meta.error)}
                              helperText={meta.touched ? meta.error : ""}
                              className={classes.inputField}
                            />
                          )}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={9} lg={7} className={classes.griditem}>
                    <Field name="dimensions">
                      {({ field, meta }) => (
                        <TextField
                          id="date"
                          fullWidth
                          size="small"
                          label="Dimensions"
                          type="string"
                          variant="outlined"
                          {...field}
                          error={!!(meta.touched && meta.error)}
                          helperText={meta.touched ? meta.error : ""}
                          className={classes.inputField}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10} lg={12} className={classes.griditem}>
                    <Field name="description">
                      {({ field, meta }) => (
                        <TextField
                          fullWidth
                          size="large"
                          label="House Description"
                          variant="outlined"
                          {...field}
                          className={classes.inputField}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10} lg={12} className={classes.griditem}>
                    <Field name="address">
                      {({ field, meta }) => (
                        <TextField
                          fullWidth
                          size="large"
                          label="Address"
                          variant="outlined"
                          {...field}
                          className={classes.inputField}
                        />
                      )}
                    </Field>
                  </Grid>

                  <Grid container className={classes.griditem}>
                    <Button
                      type="submit"
                      color="secondary"
                      variant="outlined"
                      className={classes.btn}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </div>
    </>
  );
}
