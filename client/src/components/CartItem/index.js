import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // The dispatch hook allows us to dispatch the given action to the store
  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  // The dispatch hook allows us to dispatch the given action to the store
  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  // Return all products for the cart including image, name, price, quantity, and a trashcan to remove it
  return (
    // Container for all products
    <div className="flex py-2 sm:w-fit text-stone-600">
      {/* Single Product Card */}
      <div className="flex justify-between items-center rounded-xl px-4 py-4 overflow-hidden shadow-2xl drop-shadow-2xl bg-gradient-to-r from-indigo-100 to-white">
        {/* Image */}
        <div className="img-container w-1/4 sm:w-20 sm:h-20 drop-shadow-2xl">
          <img
            src={`/images/${item.image}`}
            alt=""
          />
        </div>
        {/* Text for name, price, and quantity */}
        <div className="pl-4">
          <div className="flex justify-between">
            <div className="text-xl">{item.name}</div>
            <div className="text-lg">${item.price}</div>
          </div>
          <div>
            <span>Qty: </span>
            <input
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={onChange}
              className="text-center w-30 shadow-2xl drop-shadow-2xl"
            />
            <div
              role="img"
              aria-label="trash"
              onClick={() => removeFromCart(item)}
              className="inline-block pl-10 cursor-default duration-200 hover:rotate-12"
            >
              🗑️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;