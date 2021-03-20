import { Route, Switch, Redirect } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard/index";
import React from "react";
import AuthContext from "./context/auth";
import CustomizedSnackbars from "./components/snackbar";
import Snackbar from "./context/snackbar";
import MyHouse from "./pages/Dashboard/MyHouse";
import SellHouse from "./pages/Dashboard/SellHouse";
import Booked from "./pages/Dashboard/BookedHouse";

const Error = () => {
  return <h1>Loading</h1>;
};
export default function Routers() {
  const context = React.useContext(AuthContext);
  const context2 = React.useContext(Snackbar);
  return (
    <>
      <CustomizedSnackbars
        openbar={context2.openbar}
        onclose={context2.closebarfun}
      />
      <Switch>
        <Route exact path="/">
          {context.authdata.isLoggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <Home />
          )}
        </Route>
        <Route exact path="/signup">
          {context.authdata.isLoggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <SignUp />
          )}
        </Route>
        <Route exact path="/signin">
          {context.authdata.isLoggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <SignIn />
          )}
        </Route>
        {context.authdata.isLoggedIn === true && (
          <>
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/dashboard/myhouse">
                <MyHouse />
              </Route>
              <Route exact path="/dashboard/sell">
                <SellHouse />
              </Route>
              <Route exact path="/dashboard/booked">
                <Booked />
              </Route>
            </Switch>
          </>
        )}
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}
