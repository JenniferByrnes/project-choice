import ProductList from "../../components/ProductList";
import CategoryMenu from "../../components/CategoryMenu";
import Cart from '../../components/Cart';

// Return Shop data - a category menu, full list of products, cart
const Shop = () => {
  return (
    <section >
      <CategoryMenu />
      <ProductList />
      <Cart />
    </section>
  );
};


export default Shop;