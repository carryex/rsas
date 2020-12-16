import React from "react";
import Paper from "@material-ui/core/Paper";
import OrderItem from "./../OrderItem/OrderItem";
import { Button } from "@material-ui/core";

const Order = ({
  order,
  onAddProductClick,
  onReduceProductClick,
  orderTotalCost,
  onPaymentClick,
}) => {
  return (
    <Paper square>
      {order[0] &&
        order.map((product) => (
          <OrderItem
            key={product.id}
            product={product}
            onReduceProductClick={onReduceProductClick}
            onAddProductClick={onAddProductClick}
            isPayment={false}
          />
        ))}
      <div>
        <span><strong>{orderTotalCost}</strong></span>
        <Button
          // component={Button}
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          // className={classes.submit}
          // key={product.id}
          onClick={() => {
            onPaymentClick(true);
          }}
        >
          Оплатить
        </Button>
      </div>
    </Paper>
  );
};

export default Order;
