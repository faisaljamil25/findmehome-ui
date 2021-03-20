import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { registerUser } from "../../api";
import { useHistory } from "react-router";
import Snackbar from "../../context/snackbar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const Context = React.useContext(Snackbar);
  const [role, setRole] = React.useState("landlord");
  const [formState, SetFormState] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
  });
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleRegister = (e) => {
    try {
      e.preventDefault();
      // console.log("here");
      registerUser({ ...formState, role })
        .then(() => Context.openbarfun("success", "User Registered"))
        .catch(() => console.log("Error"));
      history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                value={formState.name}
                fullWidth
                id="name"
                label="Name"
                onChange={(e) => {
                  SetFormState({ ...formState, name: e.target.value });
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formState.email}
                onChange={(e) => {
                  SetFormState({ ...formState, email: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formState.password}
                onChange={(e) => {
                  SetFormState({ ...formState, password: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                id="city"
                onChange={(e) => {
                  SetFormState({ ...formState, city: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                id="phone"
                onChange={(e) => {
                  SetFormState({ ...formState, phone: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Role</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="role1"
                  value={role}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="landlord"
                    control={<Radio />}
                    label="Landlord"
                  />
                  <FormControlLabel
                    value="tenant"
                    control={<Radio />}
                    label="Tenant"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signup" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
