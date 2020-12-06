import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Order from './Order/Order';

const NewOrder = ({categories, products,order,onProductClick,onCategoryClick}) => {
  return (
      <>
        <Order order={order}/>
        <Categories categories={categories} onCategoryClick={onCategoryClick}/>
        <Products products={products} onProductClick={onProductClick}/>
      </>
  );
};

export default NewOrder;