import React, { useState, useContext } from "react";

import {
  Button,
  TextField,
  Container,
  Card,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
  Checkbox,
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    height: "80vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  media: {
    height: "138px",
    width: "180px",
    paddingBottom: "12px",
  },
}));

export const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const classes = useStyles();
  // const { toi, hindustantimes, indianExpress, ndtv } = userData;
  return (
    <>
      {/* <div>
                <div>
                    <TextField label="first name" value={userData['firstname']} onChange={(e)=>setUserData({...userData, "firstname":e.target.value})} margin="normal" variant="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="last name"value={userData['lastname']} onChange={(e)=>setUserData({...userData, "lastname":e.target.value})} margin="normal" variant="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Contact Number" value={userData['contact']} onChange={(e)=>setUserData({...userData, "contact":e.target.value})} margin="normal" variant="outlined" color="secondary" />
                </div>
                    <Button variant="contained" onClick={()=>setStep(2)} color="primary">Next</Button> 
            </div> */}
      <h2 align="center">Choose News here...</h2>
      <Container className={classes.root}>
        <Grid container align="center" spacing={3}>
          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={
                    process.env.PUBLIC_URL + "/news_images/TimesOfIndia1.png"
                  }
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    <Checkbox
                      checked={userData["toi"]}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          toi: e.target.name,
                        })
                      }
                      name="The Times of India"
                    />
                    The Times of India
                  </Typography>
                  {/* <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography> */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={
                    process.env.PUBLIC_URL + "/news_images/Hindustantimes.png"
                  }
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    <Checkbox
                      checked={userData["hindustantimes"]}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          hindustantimes: e.target.name,
                        })
                      }
                      name="Hindustan Times"
                    />
                    Hindustan Times
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={
                    process.env.PUBLIC_URL + "/news_images/IndianExpress.jpg"
                  }
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    <Checkbox
                      checked={userData["indianExpress"]}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          indianExpress: e.target.name,
                        })
                      }
                      name="The Indian Express"
                    />
                    The Indian Express
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={process.env.PUBLIC_URL + "/news_images/ndtv.jpg"}
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    <Checkbox
                      checked={userData["ndtv"]}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          ndtv: e.target.name,
                        })
                      }
                      name="NDTV News"
                    />
                    NDTV News
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Box ml={2}>
            <Button
              variant="contained"
              onClick={() => setStep(2)}
              color="primary"
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
