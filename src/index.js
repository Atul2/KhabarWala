import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
ReactDOM.render(
  <> <Router history={Navigation.history}>
    <StepContext>

      <App />

    </StepContext>
  </Router>
  </>,
  document.getElementById("root")
);
