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
import userEvent from "@testing-library/user-event";


const Home = (props) => {
  console.log("home--", props.isData.category);
  console.log("home news--", props.isData.newsitem);
  const [auth, setAuth] = React.useState(true);
  const { currentStep, finalData, setStep, innerdata } = useContext(multiStepContext);
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(5);
  const [category1, setCategory1] = useState(props.isData.category);
  const [news1, setNews1] = useState(props ? props.isData.newsitem : []);



  useEffect(() => {

    fetchApi();
  }, []);



  const fetchApi = async () => {
    const arr = [];
    const filterItem = [];



    const urls = category1.map((data) => {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${data}/in.json`).then(resp => resp.json());
    });

    const results = await Promise.all(urls);

    arr.push(...results);

    const articles = arr.map((data) => data.articles);

    const mergeData = filterItem.concat(...articles);

    const data = mergeData.filter((item) => {
      return news1.includes(item.source.name)
    });

    newsArray(data);
    newsResults(data.length);

  }




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


          {/* {existuser === user.userId ? setStep(3) : showSteps(currentStep)} */}


        </>
      )}
    </>
  );
};

export default Home;
