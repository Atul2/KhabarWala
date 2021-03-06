import React, { useState, useEffect, useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../components/login';
import { withRouter } from "react-router-dom";
import Home from '../layouts/Home';
import { db, fire } from "../helpers/db";


const SignInOutContainer = (props) => {
  console.log("signIn-->", props.authentiCation)
  const [value, setValue] = useState(0);
  const [user, setUser] = useState('');
  const [category, setCategory] = useState([]);
  const [existuser, setExistUser] = useState('');
  const [news, setNews] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }


  const fetchCategory = async () => {
    if (user) {
      await db.collection("users_news_category").where("userId", "==", user.userId)
        .onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => (
            setNews(doc.data().newsitem),
            setExistUser(doc.data().userId),
            setCategory(doc.data().category))
          )
        });
      // await fetchApi(category)
    }
  }


  // const fetchApi = () => {
  //   fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${ category }/in.json`)
  //     .then((result) => {
  //       result.json().then((resp) => {

  //         setNewsArray(resp.articles)
  //         setNewsResults(resp.totalResults)
  //         //console.warn("result------>", resp.articles)
  //        // console.log("total_result-->", resp.totalResults)
  //       })
  //   })
  // }

  useEffect(() => {


    userState();
    fetchCategory(); // eslint-disable-next-line
  }, [])

  return (
    <>
      {user !== null ? (
        <>
          <Home
            isAuthenticate={props.authentiCation}
            news={news}
            user={user}
            existuser={existuser}
            category={category}
            fetchCategory={fetchCategory}
            setUserState={() => setUser(null)}
          />
        </>) : (
        <>
          <Paper square>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              value={value}
              aria-label="disabled tabs example"
              onChange={handleChange}
            >
              <Tab label="KhabarWala" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Login loggedIn={(user) => setUser(user)} auth={props.authentiCation} visit="/Signup" />
            </TabPanel>
          </Paper>
        </>
      )}
    </>
  )
}

export default withRouter(SignInOutContainer);