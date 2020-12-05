import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import store from './redux/store';
import {compose} from 'redux';
import AuthContainer from './components/Auth/AuthContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import {initializeApp} from './redux/app-reducer';
import {getRestaurantIsOpen} from './redux/restaurantReducer';
import React, {useEffect} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import SideBarContainer from './components/SideBar/SideBarContainer';
import NewOrderContainer from './components/NewOrderPage/NewOrderContainer';
import Preloader from './components/UI/Preloader/Preloader';

const App = ({initialized, initializeApp, getRestaurantIsOpen}) => {
  useEffect(() => {
    initializeApp();
    getRestaurantIsOpen();
  });

  if (!initialized) {
    return <Preloader />
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
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
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