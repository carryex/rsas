import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
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
              <>
                <Button
                    component={RouterLink}
                    to="/order"
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    className={classes.submit}>
                  new order
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    onClick={closeDay}
                    variant="contained"
                    className={classes.submit}>
                  close Day
                </Button>
              </>
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