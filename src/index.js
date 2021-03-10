import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import StepContext from "./StepContext";
import Navigation from "./Navigation";

ReactDOM.render(
  <>
    <StepContext>
      <Router history={Navigation.history}>
        <App />
      </Router>
    </StepContext>
  </>,
  document.getElementById("root")
);
