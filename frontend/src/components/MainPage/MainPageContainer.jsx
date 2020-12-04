import React from "react";
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import MainPage from './MainPage';

const MainPageContainer = ({restoranIsOpen}) => {
  return <MainPage restoranIsOpen={restoranIsOpen}/>;
};

const mapStateToProps = (state) => ({
  restoranIsOpen: state.restaurant.isOpen,
});

export default compose(
    connect(mapStateToProps, {
    }),
    withAuthRedirect,
)(MainPageContainer);