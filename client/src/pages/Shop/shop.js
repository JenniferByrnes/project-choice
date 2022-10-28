import React from "react";
import mainLogo from "../../assets/mainLogo/main-logo.png";
import ProductList from "../../components/ProductList";
import CategoryMenu from "../../components/CategoryMenu";


const Shop = () => {
  return (
    <div className="container">
      <div>
        <img
          src={mainLogo}
          className="my-2 pic float-left"
          style={{ width: "20%" }}
          alt="cover"
        />
      </div>
      {/* <CategoryMenu /> */}
      <ProductList />
    </div>
  );
}

export default Shop;