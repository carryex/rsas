import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import NewOrder from "./NewOrder";
import {
  getProductCategories,
  getProductsByCategoryID,
} from "../../redux/restaurantReducer";
import {
  getCategories,
  getIsFetching,
  getProducts,
} from "../../redux/restarauntSelectors";
import {
  getOrder,
  getOrderTotalCost,
  getInPayment,
  getCurrentUser,
} from "../../redux/orderSelectors";
import {
  getUsers,
} from "../../redux/userSelectors"
import Preloader from "../UI/Preloader/Preloader";
import { requestUsers } from "../../redux/userReducer";
import {
  addProduct,
  decreaseProduct,
  setInPayment,
  payOrder,
  addUser,
} from "../../redux/orderReducer";
import Payment from "./Payment/Payment";

const NewOrderContainer = ({
  getProductCategories,
  categories,
  products,
  isFetching,
  order,
  addProduct,
  getProductsByCategoryID,
  decreaseProduct,
  orderTotalCost,
  setInPayment,
  inPayment,
  getUsers,
  payOrder,
  currentUser,
  users,
  addUser,
}) => {
  useEffect(() => {
    getProductCategories();
    getUsers();
  }, []);

  const onCategoryClick = (categoryID) => {
    getProductsByCategoryID(categoryID);
  };

  const onProductClick = (product) => {
    addProduct(product);
  };

  const onReduceProductClick = (product) => {
    decreaseProduct(product);
  };

  const onPaymentClick = (inPayment) => {
    setInPayment(inPayment);
  };

  const onPayClick = (order, orderTotalCost) => {
    payOrder(order, orderTotalCost);
  };

  const handleChange = (currentUserID) => {
    addUser(currentUserID);
  };
  if (isFetching) {
    return <Preloader />;
  }

  if (inPayment) {
    return (
      <Payment
        order={order}
        orderTotalCost={orderTotalCost}
        onCancelClick={onPaymentClick}
        onPayClick={onPayClick}
        currentUser={currentUser}
        handleChange={handleChange}
        users={users}
      />
    );
  }

  return (
    <NewOrder
      categories={categories}
      products={products}
      order={order}
      onProductClick={onProductClick}
      onReduceProductClick={onReduceProductClick}
      onCategoryClick={onCategoryClick}
      orderTotalCost={orderTotalCost}
      onPaymentClick={onPaymentClick}
    />
  );
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  products: getProducts(state),
  isFetching: getIsFetching(state),
  order: getOrder(state),
  orderTotalCost: getOrderTotalCost(state),
  inPayment: getInPayment(state),
  currentUser: getCurrentUser(state),
  users: getUsers(state),
});

export default compose(
  connect(mapStateToProps, {
    getProductCategories,
    addProduct,
    getProductsByCategoryID,
    decreaseProduct,
    setInPayment,
    payOrder,
    getUsers: requestUsers,
    addUser,
  }),
  withAuthRedirect
)(NewOrderContainer);
