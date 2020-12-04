import c from './App.module.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import store from './redux/store';
import {compose} from 'redux';
import AuthContainer from './components/Auth/AuthContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import {initializeApp} from './redux/app-reducer';
import {getRestaurantIsOpen} from './redux/restaurantReducer';
import React, {Component} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import SideBarContainer from './components/SideBar/SideBarContainer';
import NewOrderContainer from './components/NewOrderPage/NewOrderContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    this.props.getRestaurantIsOpen();
  }

  render() {
    const {classes} = this.props;
    if (!this.props.initialized) {
      return (
          // <Container component="main" maxWidth="xs">
          //   <CssBaseline/>
          //   <Grid item xs={12}  >
          //     <CircularProgress size={80} />
          //   </Grid>
          // </Container>
          <Box
              display="flex"
              height={80}
              mt={12}

          >
            <Box m="auto">
               <CircularProgress size={80} />
            </Box>
          </Box>
      );
    }
    return (
        <div className="app">
          <CssBaseline/>
          <HeaderContainer/>
          <SideBarContainer/>
          <Toolbar/>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Route exact path="/" render={() => <MainPageContainer/>}/>
              <Route path="/login" render={() => <AuthContainer/>}/>
              <Route path="/order" render={() => <NewOrderContainer/>}/>
            </Grid>
          </Grid>
        </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
    withStyles(useStyles),
    connect(mapStateToProps, {initializeApp, getRestaurantIsOpen}),
    withRouter,
)(App);

const RsasApp = (props) => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
  );
};
export default RsasApp;