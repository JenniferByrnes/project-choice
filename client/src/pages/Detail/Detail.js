import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { idbPromise, pluralize } from "../../utils/helpers";

import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/images/spinner.gif';
import Cart from '../../components/Cart';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../../utils/actions';


export default function Detail() {
  const { id } = useParams();
  // const [currentProduct, setCurrentProduct] = useState({});
  // const { loading, data } = useQuery(QUERY_PRODUCTS);
  // const products = data?.products || [];

  // useEffect(() => {
  //   if (products.length) {
  //     setCurrentProduct(products.find((product) => product._id === id));
  //   }
  // }, [products, id]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  const [currentProduct, setCurrentProduct] = useState({})

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id)

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  }

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });

    // upon removal from cart, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <div>
      <Link to="/shop">← Back to Products</Link>
      <div className='container flex flex-col w-fit mx-auto text-stone-800 justify-center items-center px-6 pt-4 py-4 md:py-8 sm:pt-[30px] '>

        {currentProduct ? (
          // container to place image and text 
          <div className="relative flex flex-col w-full mx-auto m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 bg-gradient-to-r from-indigo-100 to-white">
            {/* Left Side */}
            <div className="img-container pt-2 drop-shadow-2xl max-w-prose origin-bottom ...">
              <img className="drop-shadow-2xl"
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
              />
            </div>
            {/* Right Side */}
            <div className="text-center md:text-left md:self-center px-4 py-3 ">
              <h2 className="text-3xl">
                {currentProduct.name}</h2>
              <p className="text-lg py-2">{currentProduct.description}</p>
              <h2 className="text-2xl py-2">
                <strong>Price: </strong>${currentProduct.price}
              </h2>
                <div className="relative flex justify-center md:justify-start w-full ">
                  <div className="flex space-x-4" >
                    <button className="group w-28 transition-all duration-150 bg-pcCoral font-bold text-white border-b-8 border-b-pcCoral rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-pcCoral group-hover:border-t-pcCoral group-hover:shadow-lg"
                    >
                      <div
                        className="py-5 px-2 duration-150 bg-pcPink rounded-lg group-hover:bg-pcCoral" onClick={addToCart}
                      >
                        Add to cart
                      </div></button>
                    <div className="flex" >
                      <button className="group w-28 transition-all duration-150 bg-pcCoral font-bold text-white border-b-8 border-b-pcCoral rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-pcCoral group-hover:border-t-pcCoral group-hover:shadow-lg">
                        <div
                          className="py-2 px-2 duration-150 bg-pcPink rounded-lg group-hover:bg-pcCoral"
                          disabled={!cart.find(p => p._id === currentProduct._id)}
                          onClick={removeFromCart}>
                          Remove from Cart
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              <h2 className="text-sm py-2">
                {currentProduct.quantity} {pluralize("item", currentProduct.quantity)} in stock
              </h2>
            </div>
          </div>
        ) : null}
        {loading ? <img src={spinner} alt="loading" /> : null}
        <Cart />
      </div>
    </div>
  );
}