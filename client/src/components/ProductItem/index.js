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
    <section className="section-card text-stone-600 hover14">
      <div className="card">
        <div className="img-container w-3/5 pt-20">
          <img src={`/images/${image}`} alt={name}/>
        </div>
        <div className="text-center px-6 py-3">
          <h3 className="text-lg">
            {name}
          </h3>
          <h2 className="text-3xl py-2">
          {quantity} {pluralize("item", quantity)} in stock
          </h2>
          <h2 className="text-3xl py-2">
            ${price}
          </h2>
          <button className="w-full md:w-auto flex justify-center items-center p-2 space-x-4 font-sans font-bold text-white rounded-lg shadow-lg px-9 bg-pcPink hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 hover:cursor-default duration-150" onClick={addToCart}>Add to cart</button>
        </div >
      </div >
    </section > 
  );
}

export default ProductItem;
