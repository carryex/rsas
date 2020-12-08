import React from 'react';
import Button from '@material-ui/core/Button';
import {Link as RouterLink} from 'react-router-dom';

const Order = ({order}) => {
  // const orderElemets = order.map((product) => (
  //     <span key={product.id}>{product.name} : {product.quantity}</span>
  // ));

  return (
      <div>
        {order.map((product) => (
            <span key={product.id}>{product.name} : {product.quantity}</span>
        ))}
      </div>
  );
};

export default Order;