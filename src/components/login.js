import React, { useState } from 'react';
import { Avatar, Grid, Paper, Button, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import { NavLink, withRouter } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fire } from "../helpers/db";
import { ScaleLoader } from 'react-spinners';

const Login = (props) => {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: "green" }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const override = `
    display: block;
    margin-left: 100px;
    border-color: blue;
  `;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handlerLogin = () => {
    setLoading(true);
    fire.signInWithEmailAndPassword(email, password)
      .then(response => {
        const { user } = response;
        const data = {
          userId: user.uid,
          email: user.email
        }
        localStorage.setItem('user', JSON.stringify(data));
        const storage = localStorage.getItem('user');
        const loggedInUser = storage !== null ? JSON.parse(storage) : null;
        props.loggedIn(loggedInUser);
        setLoading(false);
      }).catch(error => {
        toast.error(error.message);
        setLoading(false);
      });
  }
    
    return (
        <Grid align="center" p={10}>
          <Paper elevation={10} style={paperStyle}>
            <Avatar style={avatarStyle}><LockOutlined /></Avatar>
          <h2>Sign In</h2>
          <ValidatorForm
            onSubmit={handlerLogin}
            onError={errors => {
              for (const err of errors) {
                console.log(err.props.errorMessages[0])
              }
            }}
          >

            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              onChange={handleEmail}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['This field is required', 'Email is not valid']}
              autoComplete='off'
            />

          <TextValidator
              variant="outlined"
              fullWidth
              label="Password"
              onChange={handlePassword}
              name="password"
              type="password"
              value={password}
              validators={['required']}
              errorMessages={['This field is required']}
              autoComplete='off'
            />
            {loading ? (
              <ScaleLoader
                css={override}
                size={150}
                color={'#3f51b5'}
                loading={loading}
              />
            ): (
              <Box m={2} p={1}>
              <Button type="submit" color="primary" variant="contained" fullWidth>Sign In</Button>
             </Box>
            )}
            
            

          </ValidatorForm>
              {/* <TextField label="Username" placeholder="Enter Username" fullWidth required />
              <TextField label="Password" placeholder="Enter Password" fullWidth required /> */}
            
          <Typography>
             Do you have an account? <NavLink className="nav-link" to={props.visit}>Sign Up</NavLink>
          </Typography>
          </Paper>
        </Grid>
    )
}

export default withRouter(Login);