import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product(props) {
  const showAddtoCart = props.showAddtoCart;
  const handleAddProduct = props.handleAddProduct;
  const { name, seller, price, stock, img, key } = props.product;

  return (
    <div className="product" >
      <div className="img-container">
        <img src={img}></img>
      </div>
      <div className="product-detail">
        <h4 className="product-name">
          <Link to={`/product/${key}`}> {name} </Link>
        </h4>
        <br />
        <p>by: {seller}</p>

        <p>
          <small> ${price}</small>{" "}
        </p>
        <p>
          <small>only {stock} left in stock - order soon </small>
        </p>
        {showAddtoCart && <button
          onClick={() => handleAddProduct(props.product)}
          className="main-btn"
        >
          add to cart
        </button>}
      </div>
    </div>
  );
}

export default Product 