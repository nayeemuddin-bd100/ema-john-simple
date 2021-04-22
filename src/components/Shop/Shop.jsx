import React, { useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";


function Shop() {
  const fake = fakeData.slice(0, 10);
  const [products] = useState(fake);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    const sameProduct = newCart.filter((cart) => cart.key === product.key);
    let count = sameProduct.length;    

    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            showAddtoCart
            product={pd}
            handleAddProduct={handleAddProduct}

            //আবার চাইলে নিচের পদ্ধতিতে নির্দিষ্ট করেও সিলেক্ট করে props এ পাঠানো যায় । অবশ্যই উপরের নিয়ম টা ইউজ করা ভাল । কারণ এর মাধ্যমে ক্লিক ইভেন্টে সব গুলো এলিমেন্ট একসাথে পাস করে দেওয়া যায়।

            // name={pd.name}
            // seller={pd.seller}
            // price={pd.price}
            // stock={pd.stock}
            // img={pd.img}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default Shop;
