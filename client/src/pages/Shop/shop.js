import React from "react";
import mainLogo from "../../assets/mainLogo/main-logo.png";
import ProductList from "../../components/ProductList";
import CategoryMenu from "../../components/CategoryMenu";
import Cart from '../../components/Cart';

export default function Shop() {
  return (
    <div className="container">
      <div>
        <img
          src={mainLogo}
          className="my-2 pic float-left"
          style={{ width: "50%" }}
          alt="cover"
        />
      </div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
}