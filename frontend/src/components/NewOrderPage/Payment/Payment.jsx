import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Payment = ({ order, orderTotalCost, onCancelClick, onPayClick }) => {
  return (
    <>
      <Paper square>
        {order[0] &&
          order.map((product) => (
            <div key={product.id}>
              <span>{product.name}</span>
              <span>{product.quantity}</span>
              <span>{product.price}</span>
              <span>{product.totalCost}</span>
            </div>
          ))}
        <div>
          <span>{orderTotalCost}</span>
        </div>
      </Paper>
      <div>
        <Button
          component={RouterLink}
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => {
            onPayClick(order,orderTotalCost);
          }}
        >
          pay
        </Button>
        <Button
          component={RouterLink}
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => {
            console.log("hie");
          }}
        >
          add user
        </Button>
        <Button
          component={RouterLink}
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => {
            onCancelClick(false);
          }}
        >
          cancel
        </Button>
      </div>
    </>
  );
};

export default Payment;
