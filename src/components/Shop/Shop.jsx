import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


function Shop() {

  const fake = fakeData.slice(0,10)
  const [products, setProducts] = useState(fake);
  const [cart, setCart] = useState([]);
  // const [shippingCost,setShippingCost] = useState(0)


  const handleAddProduct = (product) => {
    // console.log(product.shipping)

    const newCart = [...cart, product]
    setCart(newCart)


    //shipping cost কে এভাবেও ইমপ্লিমেন্ট করা যায় । কিন্তু আমরা আরো স্মুথ হওয়ার জন্য cart component এর মধ্যে রিডিউজ ফাংশন ইউজ করে এই shipping cost কে দেখানো হয়েছে
    // const shippingCost_temp = shippingCost + product.shipping
    // const shippingCostRound = Math.round(shippingCost_temp * 100) / 100;
    // setShippingCost(shippingCostRound);
    
       
       
    }
  
 
    return (
      <div className="shop-container">
        <div className="product-container">
          {products.map((pd) => (
            <Product
              //এখানে props এর মাধ্যমে শুধু প্রোডাক্ট কে পাঠিয়ে name,img,seller কে এক্সেস নেওয়া যায়
              
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
            <Cart cart={cart} ></Cart>
        </div>
      </div>
    );
}

export default Shop
