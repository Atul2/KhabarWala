import React,{useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from "../StepContext";


export const SecondStep = () => {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    return (
    <>
            <div>
                <div>
                    <TextField label="Address" value={userData['address']} onChange={(e)=>setUserData({...userData, "address":e.target.value})} margin="normal" variant="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Email" value={userData['email']} onChange={(e)=>setUserData({...userData, "email":e.target.value})} margin="normal" variant="outlined" color="secondary" />
                </div>
                   <Button variant="contained" onClick={()=>setStep(1)} color="secondary">Back</Button> 
                   <Button variant="contained" onClick={submitData} color="primary">Submit</Button> 
        </div>
     </>
    )
}