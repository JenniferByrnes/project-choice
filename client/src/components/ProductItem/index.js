import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from "../../utils/helpers";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
// import './ProductItem.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56"></CardHeader>
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`} 
          className="h-full w-full"
          />
        <p>{name}</p>
      </Link>
      <CardBody className="text-center">     
      <Typography variant="h5" className="mb-2">
      <div>{quantity} {pluralize("item", quantity)} in stock</div>
      </Typography>
      <Typography>
        <span>${price}</span>
        </Typography>
      </CardBody>
      <CardFooter>
      <Typography variant="small">
      <button onClick={addToCart}>Add to cart</button>
      </Typography>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;