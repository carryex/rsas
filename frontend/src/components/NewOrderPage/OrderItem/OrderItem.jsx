import React from "react";
import styles from "./OrderItem.module.css";
import { AddIcon } from "@material-ui/data-grid";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

const OrderItem = ({
  product,
  onReduceProductClick,
  onAddProductClick,
  isPayment,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>{product.name}</span>

      {!isPayment && (
        <span className={styles.button}>
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
      )}
      <span className={styles.quantity} >{product.quantity}</span>
      {!isPayment && (
        <span className={styles.button}>
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
      )}

      <span className={styles.price}>{product.price}</span>
      <span className={styles.totalCost}>{product.totalCost}</span>
    </div>
    // <Paper square>
    //   {order[0] &&
    //     order.map((product) => (
    //       <div className={styles.container} key={product.id}>
    //         <span>{product.name}</span>
    //         <span>{product.quantity}</span>
    //         <span>{product.price}</span>
    //         <span>{product.totalCost}</span>
    //       </div>
    //     ))}
    //   <div>
    //     <span>{orderTotalCost}</span>
    //   </div>
    // </Paper>
  );
};

export default OrderItem;
