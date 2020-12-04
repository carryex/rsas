import React from "react";
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import NewOrder from './NewOrder';

const NewOrderContainer = (props) => {
  return <NewOrder />;
};

const mapStateToProps = (state) => ({});

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect,
)(NewOrderContainer);