import React from "react";
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import MainPage from './MainPage';
import {closeDay, openDay} from '../../redux/restaurantReducer';

const MainPageContainer = ({restaurantIsOpen,closeDay,openDay}) => {
  return <MainPage restaurantIsOpen={restaurantIsOpen} closeDay={closeDay} openDay={openDay}/>;
};

const mapStateToProps = (state) => ({
  restaurantIsOpen: state.restaurant.isOpen,
});

export default compose(
    connect(mapStateToProps, {
      closeDay,
      openDay,
    }),
    withAuthRedirect,
)(MainPageContainer);