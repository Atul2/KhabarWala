import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import StepContext from './StepContext';

ReactDOM.render(
    <>
     <StepContext>
        <BrowserRouter>
            <App/> 
        </BrowserRouter>
      </StepContext>
    </>
    , document.getElementById('root'));

