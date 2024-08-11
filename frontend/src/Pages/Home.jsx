import React from 'react';
import Products from './Products';


const Home = ({products}) => {
    
  return (
    <div>
      <h2>This is Product page and All Products are listed here</h2>
      <Products products={products} />
    </div>
  )
}

export default Home
