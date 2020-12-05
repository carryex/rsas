import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';

const NewOrder = ({categories, products}) => {
  return (
      <>
        <Categories categories={categories}/>
        <Products products={products}/>
      </>
  );
};

export default NewOrder;