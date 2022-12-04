import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";

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

  // The dispatch hook allows us to send the given action to the store
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // The dispatch hook allows us to send the toggle cart action to the store
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
      // this is "cart-closed"
      <div className="absolute top-32 right-2 md:top-5">
        <div
          className="inline-block text-4xl duration-200 hover:rotate-12 cursor-default"
          role="img"
          onClick={toggleCart}
          aria-label="cart">
          🛒
        </div>
      </div>
    );
  }

  // Display the cart
  return (
    <div className="absolute top-0 right-0 z-50">
      <div className="flex flex-col items-center justify-center w-full sm:mx-auto p-6 bg-pcGreen">
        <div className="w-full">
          <div className="flex justify-between cursor-default">
            <span className="text-3xl">Your Cart</span>
            {/* Show 'exit cart' button */}
            <span className="text-xl"
              onClick={toggleCart}>
              X
            </span>
          </div>
        </div>

        {/* Map over the items in the cart */}
        {state.cart.length ? (
          <div className="w-fit">
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}

            {/* Show the total cost of the items */}
            <div className="flex flex-col space-between text-end items-end">
              <div className="text-3xl">Total: ${calculateTotal()}</div>

              {/* if the user is logged in, they can checkout through Stripe, otherwise, they have a message to log in */}
              {Auth.loggedIn() ? (
                <div className="group w-fit" >
                  <button
                    className="w-28 transition-all duration-150 bg-green-500 font-bold text-white border-b-8 border-b-green-500 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-green-500 group-hover:border-t-green-500 group-hover:shadow-lg cursor-auto"
                  >
                    <div
                      className="py-4 px-2 duration-150 bg-green-300 rounded-lg group-hover:bg-green-500" onClick={submitCheckout}
                    >
                      Checkout
                    </div>
                  </button>
                </div>
              ) : (
                <span className="text-xl">(You must log in to check out)</span>
              )}
            </div>
          </div>
        ) : (
          // If there are no items in the cart, let the user know
          <h3>
            <span role="img" aria-label="shocked">
              😱
            </span>
            Your cart is empty.
          </h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
