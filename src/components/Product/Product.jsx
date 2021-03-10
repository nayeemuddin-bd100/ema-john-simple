import React from 'react';
import './Product.css';

function Product(props) {
  const handleAddProduct = props.handleAddProduct;
  const { name, seller, price, stock, img } = props.product;

  return (
    <div className="product" >
      <div className="img-container">
        <img src={img}></img>
      </div>
      <div className="product-detail">
        <h4 className="product-name">{name} </h4>
        <br />
        <p>by: {seller}</p>

        <p>
          <small> ${price}</small>{" "}
        </p>
        <p>
          <small>only {stock} left in stock - order soon </small>
        </p>
        <button
          onClick={() => handleAddProduct(props.product)}
          className="main-btn"
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Product 