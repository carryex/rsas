import Container from '@material-ui/core/Container';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

const NewOrder = (props) => {
  const classes = useStyles();
  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            NewOrder
          </Typography>
        </div>
      </Container>

  );
};
export default NewOrder;