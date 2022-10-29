import React from 'react';
import { useQuery } from '@apollo/client';
import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

function ProductList({ currentCategory }) {

  console.log("in ProductList");
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  console.log("in ProductList2");
  const products = data?.products || [];

  console.log("in ProductList3");
  function filterProducts() {
    if (!currentCategory) {
      return products;
    }

    console.log("in ProductList4");
    return products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;