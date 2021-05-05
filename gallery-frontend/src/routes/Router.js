import React from "react";
import { Switch, Route } from "react-router-dom";
import AddImage from "../pages/AddImagePage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/HomePage";
import ImageDetails from "../pages/ImageDetailsPage";
import LogIn from "../pages/LogInPage";
import SignUp from "../pages/SignUpPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/image/:id">
        <ImageDetails />
      </Route>
      <Route exact path="/add-image">
        <AddImage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
