import React, { Component, useContext, useState, useEffect } from "react";
import {
  Stepper,
  StepLabel,
  Step,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import { FirstStep } from "../components/FirstStep";
import { SecondStep } from "../components/SecondStep";
import { multiStepContext } from "../StepContext";
import { RepeatRounded } from "@material-ui/icons";
import { fire } from "../helpers/db";
import Navigation from "../Navigation";
import axios from "axios";
import NewsContent from "../components/NewsContent";


const Home = ({ props }) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentStep, finalData } = useContext(multiStepContext);
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  // const newsApi = async () => {
  //   try {
  //     const news = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`
  //     );
  //     console.log("ye news hai-->", news);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json")
      .then((result) => {
        result.json().then((resp) => {

          setNewsArray(resp.articles)
          setNewsResults(resp.totalResults)
          console.warn("result------>", resp.articles)
          console.log("total_result-->", resp.totalResults)
        })
      })
  }, [newsResults, loadmore])

  console.log("news ka array-->", newsArray)
  console.log("newsResult ka array-->", newsResults)
  const handleClose = () => {
    fire
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        window.location.reload();
        Navigation.history.replace("/");
      })
      .catch(console.error);
  };

  function showSteps(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <NewsContent
          setLoadmore={setLoadmore}
          loadmore={loadmore}
          newsArray={newsArray}
          newsResults={newsResults}
        />;
      default:
        return null;
    }
  }



  return (
    <>
      {auth && (
        <>
          <div style={{ flexGrow: 1 }}>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  <b>KhabarWala</b>
                </Typography>
                <Button color="inherit" onClick={handleClose}>
                  <b>Logout</b>
                </Button>
              </Toolbar>
            </AppBar>
          </div>

          <div align="center">
            <Stepper
              style={{ width: "85%" }}
              activeStep={currentStep - 1}
              orientation="horizontal"
            >
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          {showSteps(currentStep)}

          {/* {finalData.map((data, i) => {
            return (
              <tr>
                <li key={i}>{data.category[i]}</li>
                <h5>{data.toi}</h5>
                <h5>{data.hindustantimes}</h5>
                <h5>{data.indianExpress}</h5>
                <h5>{data.ndtv}</h5>
                {console.log("bilkul naya after submit-->", data)}
              </tr>
            );
          })} */}
        </>
      )}
    </>
  );
};

export default Home;
