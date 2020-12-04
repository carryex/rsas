import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const MainPage = ({restaurantIsOpen, closeDay, openDay}) => {
  const classes = useStyles();
  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Main page
          </Typography>
          {restaurantIsOpen ? (

              <Button
                  type="submit"
                  fullWidth
                  color="primary"
                  onClick={closeDay}
                  variant="contained"
                  className={classes.submit}>
                close Day
              </Button>
          ) : (
              <Button
                   type="submit"
                  fullWidth
                  color="primary"
                  onClick={openDay}
                  variant="contained"
                  className={classes.submit}>
                open Day
              </Button>
          )}
        </div>
      </Container>

  );
};
export default MainPage;