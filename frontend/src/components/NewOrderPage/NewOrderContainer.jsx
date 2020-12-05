import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import NewOrder from './NewOrder';
import {
  getProductCategories,
  requestProducts,
} from '../../redux/restaurantReducer';
import {
  getCategories,
  getIsFetching,
  getProducts,
} from '../../redux/restarauntSelectors';
import Preloader from '../UI/Preloader/Preloader';

const NewOrderContainer = ({getProductCategories, categories, products, getProducts, isFetching}) => {
  useEffect(() => {
    getProductCategories();
    getProducts();
  }, []);

  if (isFetching) {
    return <Preloader/>
  }

    return <NewOrder categories={categories} products={products}/>;
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  products: getProducts(state),
  firstCategoryId: state.restaurant.firstCategoryId,
  isFetching: getIsFetching(state),
});

export default compose(
    connect(mapStateToProps, {
      getProductCategories,
      getProducts: requestProducts,
    }),
    withAuthRedirect,
)(NewOrderContainer);