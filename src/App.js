import React from 'react';
import SignInOutContainer from './containers';
import Signup from './components/signup';
import { Route, Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignInOutContainer} />
        <Route exact path="/Signup" component={Signup} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}

export default withRouter(App);
