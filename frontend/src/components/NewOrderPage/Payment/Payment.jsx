import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OrderItem from "./../OrderItem/OrderItem";
import styles from "./Payment.module.css";

const Payment = ({
  order,
  orderTotalCost,
  onCancelClick,
  onPayClick,
  currentUser,
  handleChange,
  users,
}) => {
  return (
    <>
      <Paper square>
        {order[0] &&
          order.map((product) => (
            <OrderItem
              key={product.id}
              product={product}
              isPayment={true}
            />
          ))}
        <div>
          <span><strong>{orderTotalCost}</strong></span>
        </div>
      </Paper>
      <div>
        <FormControl className={styles.select}>
          <InputLabel htmlFor="age-native-simple">User</InputLabel>
          <Select
            native
            value={currentUser.id}
            onChange={(e) => handleChange(e.target.value)}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.user}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button
          component={RouterLink}
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => {
            onPayClick(order, orderTotalCost);
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
