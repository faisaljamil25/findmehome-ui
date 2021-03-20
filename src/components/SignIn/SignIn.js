import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth";
import Snackbar from "../../context/snackbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { loginUser } from "../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(house.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const Context = React.useContext(AuthContext);
  const Context2 = React.useContext(Snackbar);
  const classes = useStyles();
  const history = useHistory();
  const [role, setRole] = React.useState("landlord");
  const [formState, SetFormState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await loginUser({ ...formState, role });
      console.log(response);
      await Context.getLoggedIn();
      Context2.openbarfun("success", "User Logged In");
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => {
                SetFormState({ ...formState, email: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                SetFormState({ ...formState, password: e.target.value });
              }}
            />
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
