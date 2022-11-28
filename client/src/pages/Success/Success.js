import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../../components/Jumbotron';
import { ADD_ORDER } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';

// Reset the cart and display a success message after a completed purchase
function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  
  useEffect(() => {
    // Saves the completed order
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      // If there were products in the order, ...
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        // Reset the cart (Empty it)
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className="pt-[60px]">
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;