import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import { withRouter } from "react-router-dom";

const Signup = (props) => {
    console.log(props);
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    const boxStyle = { display: "flex", width: "100%", justifyContent: "space-evenly" }
    
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlined />
                    </Avatar>
                    <h2>Sign Up</h2>
                    <Typography variant="caption" gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form align="center">
                    <TextField fullWidth label="Name" placeholder="Enter your name here"></TextField>
                    <TextField fullWidth label="Email" placeholder="Enter Email"></TextField>
                    <TextField fullWidth label="Mobile Number" placeholder="Enter Mobile Number"></TextField>
                    <TextField fullWidth label="Password" placeholder="Enter Password"></TextField>
                    <TextField fullWidth label="Confirm Password" placeholder="Enter Confirm Password"></TextField>
                    <Box m={2} p={2} style={boxStyle}>
                        <Button type="submit" variant="contained" color="primary">Sign Up</Button>
                        <Button type="submit" variant="contained" onClick={e => { e.preventDefault(); props.history.goBack(); }} color="primary">Back</Button>
                    </Box>
                </form>
            </Paper>
        </Grid>
    )
}

export default withRouter(Signup);