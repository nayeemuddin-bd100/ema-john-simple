import React, { useContext, useState } from "react";
import shortid from 'shortid';
import { shareContext } from "../../App";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";



function Shop() {
  const fake = fakeData.slice(0, 50);
  const [products] = useState(fake);
  
  const [cart, setCart] = useContext(shareContext)

  const handleAddProduct = (product) => {
    product.id = shortid.generate();
    product.count = 1
  
    const newCart = [...cart, JSON.parse(JSON.stringify(product))];
    setCart(newCart);
    // const sameProduct = newCart.filter((cart) => cart.key === product.key);
    // let count = sameProduct.length;

    // addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            showAddtoCart
            product={pd}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} showReviewBtn />
      </div>
    </div>
  );
}

export default Shop;
