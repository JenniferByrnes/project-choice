import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import './ProductItem.css';

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (

    <section className="section-card hover14">
      <div className="card">
        <div className="img-container">
          <img src={`/images/${image}`} alt={name}/>
        </div>
        <div className="infos">
          <h3 className="name">
            {name}
          </h3>
          <h2 className="price">
          {quantity} {pluralize("item", quantity)} in stock
          </h2>
          <h2 className="price">
            ${price}
          </h2>
          <button className="btn btn-buy" onClick={addToCart}>Add to cart</button>
        </div >
      </div >
    </section >
    
  );
}

export default ProductItem;
