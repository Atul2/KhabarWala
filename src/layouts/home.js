import React,{useContext} from 'react';
import { Stepper, StepLabel, Step, AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { FirstStep } from '../components/FirstStep';
import { SecondStep } from '../components/SecondStep';
import { multiStepContext } from "../StepContext";
import { RepeatRounded } from '@material-ui/icons';
const Home = (props) => {

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { currentStep, finalData } = useContext(multiStepContext);

    const handleClose = () => {
      localStorage.removeItem('user');
      props.setUserState();
      setAnchorEl(null);
  }
  
  function showSteps(step){
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      default:
        return null;
     }
   }


  return (
  <>
      { auth && ( <>
        <div style={{flexGrow: 1}}>
         <AppBar position="sticky">
            <Toolbar >
              <Typography variant="h6" style={{flexGrow: 1}}>
                 <b>KhabarWala</b>
              </Typography>
              <Button color="inherit" onClick={handleClose} ><b>Logout</b></Button>
            </Toolbar>
          </AppBar>
        </div>
         <h1>Choose News here...</h1>
        <div className="center-stepper">
           <Stepper style={{width:'18%'}} activeStep={currentStep - 1} orientation="horizontal">
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
        
        {finalData.map(data => {
          return (
            <h1>{data.firstname }</h1>
          )
        })}
        
       </>
      )}
      </>
   
     );
}
 
export default Home;