import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";

const stripePromise = loadStripe(
  "pk_live_51Ly1taCwWJ9DSQafQ57gfY5V2rFtaGIZlZFmccnsL6XqIOAJqEb1nQV6UFglxuGb7fUMomduryFiYadySk0g7hQj004FujWrWc"
);

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // The dispatch hook allows us to dispatch the given action to the store
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // The dispatch hook allows us to dispatch the toggle cart action to the store
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  // Total up the items in the cart
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // Create array of items and send to Checkout
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  // If the cart is closed, show cart image for user to select
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="cart">
          🛒
        </span>
      </div>
    );
  }

  // Display the cart
  return (
    <div className="cart">
      {/* Show 'exit cart' button */}
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {/* Map over the items in the cart */}
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          {/* Show the total cost of the items */}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {/* if the user is logged in, they can checkout through Stripe, otherwise, they have a message to log in */}
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        // If there are no items in the cart, let the user know
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
