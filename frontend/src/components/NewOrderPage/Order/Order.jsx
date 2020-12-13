import React from "react";
import Paper from "@material-ui/core/Paper";
import { AddIcon } from "@material-ui/data-grid";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

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
          <div key={product.id}>
            <span>{product.name}</span>
            <span>
              <span>
                <IconButton
                  aria-label="reduce"
                  size="small"
                  onClick={() => {
                    onReduceProductClick(product);
                  }}
                >
                  <RemoveIcon fontSize="inherit" />
                </IconButton>
              </span>
              {product.quantity}
              <span>
                <IconButton
                  aria-label="increase"
                  size="small"
                  onClick={() => {
                    onAddProductClick(product);
                  }}
                >
                  <AddIcon fontSize="inherit" />
                </IconButton>
              </span>
            </span>
            <span>{product.price}</span>
            <span>{product.totalCost}</span>
          </div>
        ))}
      <div>
        <span>{orderTotalCost}</span>
        <span
          onClick={() => {
            onPaymentClick(true);
          }}
        >
          Оплатить
        </span>
      </div>
    </Paper>
  );
};

export default Order;
