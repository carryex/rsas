import Container from '@material-ui/core/Container';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import {Link as RouterLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
}));

const Products = ({products,onProductClick}) => {
  const classes = useStyles();

  const productElements = products.map((product) => (
      <Button
          component={RouterLink}
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          className={classes.submit}
          key={product.id}
          onClick={() => {onProductClick(product)}}
      >
        {product.name}
      </Button>
  ));

  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          {productElements}
        </div>
      </Container>
  );
};
export default Products;