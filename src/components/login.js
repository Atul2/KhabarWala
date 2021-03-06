import React from 'react';
import { Avatar, Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import { NavLink, withRouter } from 'react-router-dom';




const Login = (props) => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "green" }
    
    return (
        <Grid align="center" p={10}>
          <Paper elevation={10} style={paperStyle}>
            <Avatar style={avatarStyle}><LockOutlined /></Avatar>
              <h2>Sign In</h2>
              <TextField label="Username" placeholder="Enter Username" fullWidth required />
              <TextField label="Password" placeholder="Enter Password" fullWidth required />
            <Box m={2} p={1}>
              <Button type="submit" color="primary" variant="contained" fullWidth>Sign In</Button>
          </Box>
          <Typography>
             Do you have an account? <NavLink className="nav-link" to={props.visit}>Sign Up</NavLink>
          </Typography>
          </Paper>
        </Grid>
    )
}

export default withRouter(Login);