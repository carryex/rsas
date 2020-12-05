import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import NewOrder from './NewOrder';
import {getProductCategories} from '../../redux/restaurantReducer';

const NewOrderContainer = ({getProductCategories}) => {
  useEffect(() => {
    getProductCategories();
  });

  return <NewOrder/>;
};

const mapStateToProps = (state) => ({});

export default compose(
    connect(mapStateToProps, {
      getProductCategories,
    }),
    withAuthRedirect,
)(NewOrderContainer);