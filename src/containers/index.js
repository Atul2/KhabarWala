import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../components/login';
import { withRouter } from "react-router-dom";
import Home  from '../layouts/home';


const SignInOutContainer = (props) => {

    const [value, setValue] = useState(0);
    const [user, setUser] = useState('');
  
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
  
  useEffect(() => {
    userState();
  }, []);
     
  return (
    <>
      {user !== null ? (<><Home setUserState={()=>setUser(null)}/></>): (
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
                 <Login loggedIn={(user)=>setUser(user)}  visit="/Signup" />
             </TabPanel>
           </Paper>
           </>
      )}
     </>
    )
}

export default withRouter(SignInOutContainer);