import React from "react";
import SignInOutContainer from "./containers";
import Signup from "./components/signup";
import { Route, Switch, withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={SignInOutContainer} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
