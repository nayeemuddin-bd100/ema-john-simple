import React from "react";

function ReviewProduct(props) {
  const { name, seller, price, stock, img, key, id } = props.product;
  const handleRemove = props.handleRemove;
  return (
    <div className="product">
      <div className="img-container">
        <img src={img}></img>
      </div>
      <div className="product-detail">
        <h4 className="product-name"> {name}</h4>
        <br />
        <p>by: {seller}</p>

        <p>
          <small> ${price}</small>
        </p>
        <p>
          <small>only {stock} left in stock - order soon </small>
        </p>
      </div>
      <br />
      <button onClick={() => handleRemove(id)} className="main-btn">
        Remove
      </button>
    </div>
  );
}

export default ReviewProduct;
