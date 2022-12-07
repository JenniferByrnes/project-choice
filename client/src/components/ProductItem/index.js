import { pluralize } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { Link } from "react-router-dom";
import { idbPromise } from '../../utils/helpers';

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
    <section className="section-card flex h-96 py-7 px-2 justify-center text-stone-600">
      <div className="card flex items-center w-80 max-w-xs rounded-xl px-4 py-8 overflow-hidden shadow-2xl drop-shadow-2xl bg-gradient-to-r from-indigo-100 to-white">

        <Link to={`/products/${_id}`} className="img-container w-3/4 pt-2 drop-shadow-2xl origin-bottom ...">
          <img src={`/images/${image}`} alt={name} className="drop-shadow-2xl duration-200 hover:scale-125" />
        </Link>

        <div className="text-center px-4 py-3">
          <h2 className="text-3xl">
            {name}
          </h2>

          <h2 className="text-2xl py-2">
            ${price}
          </h2>

          {/* Button Group --> */}
          <div className="group">
            <button
              className="w-28 transition-all duration-150 bg-pcCoral font-bold text-white border-b-8 border-b-pcCoral rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-pcCoral group-hover:border-t-pcCoral group-hover:shadow-lg"
            >
              <div
                className="py-4 px-2 duration-150 bg-pcPink rounded-lg group-hover:bg-pcCoral" onClick={addToCart}
              >
                Add to cart
              </div>
            </button>
          </div>
          <h2 className="text-sm py-2">
            {quantity} {pluralize("item", quantity)} in stock
          </h2>
        </div >
      </div >
    </section >
  );
}

export default ProductItem;
