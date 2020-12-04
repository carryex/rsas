import {reduxForm} from 'redux-form';
import {Input, createField} from '../UI/FormsControls/FormControls';
import {required} from '../../utils/validators/validators';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({handleSubmit, error}) => {
  const classes = useStyles();
  return (
        <form onSubmit={handleSubmit} className={classes.form}>
          {createField(
              'username', 'username', [required], Input, 'text', null,
              {
                variant: 'outlined',
                margin: 'normal',
                fullWidth: true,
                id: 'username',
                label: 'username',
                autoFocus: true,
              })}
          {createField('password', 'password', [required], Input, 'password',
              null,
              {
                variant: 'outlined',
                margin: 'normal',
                fullWidth: true,
                id: 'password',
                label: 'password',
                autoFocus: true,
              })}
          {error && <div>{error}</div>}
          <Button
              type="submit"
              fullWidth
              color="primary"
              onClick={handleSubmit}
              variant="contained"
              className={classes.submit}>

            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </form>
  );
};

export default reduxForm({
  form: 'login',
})(LoginForm);
