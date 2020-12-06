import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import NewOrder from './NewOrder';
import {
  getProductCategories, getProductsByCategoryID,
} from '../../redux/restaurantReducer';
import {
  getCategories,
  getIsFetching,
  getProducts,
} from '../../redux/restarauntSelectors';
import {
  getOrder,
} from '../../redux/orderSelectors';
import Preloader from '../UI/Preloader/Preloader';
import {addProduct} from '../../redux/orderReducer';

const NewOrderContainer = ({getProductCategories, categories, products, isFetching, order, addProduct, getProductsByCategoryID}) => {
  useEffect(() => {
    getProductCategories();
  }, []);

  const onCategoryClick = (categoryID) => {
    getProductsByCategoryID(categoryID);
  };

  const onProductClick = (product) => {
    addProduct(product);
  };
  if (isFetching) {
    return <Preloader/>;
  }

  return <NewOrder categories={categories} products={products} order={order}
                   onProductClick={onProductClick}
                   onCategoryClick={onCategoryClick}/>;
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  products: getProducts(state),
  isFetching: getIsFetching(state),
  order: getOrder(state),
});

export default compose(
    connect(mapStateToProps, {
      getProductCategories,
      addProduct,
      getProductsByCategoryID,
    }),
    withAuthRedirect,
)(NewOrderContainer);