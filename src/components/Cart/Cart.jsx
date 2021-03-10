import React from 'react';

function Cart(props) {
    const cart = props.cart

    const totalProductPrice = cart.reduce((sum, item) => sum + item.price, 0)
    const shippingCost = cart.reduce((sum, item) => sum + item.shipping, 0)
    const tax = (totalProductPrice + shippingCost) * 0.1
    const grandTotal = totalProductPrice + shippingCost + tax;
  

    const formatNumber = num => {
        const result = Math.round(num * 100) / 100
        return result
    }
    return (
      <div>
        <h4>Order Summery</h4>
        <p>Items Order : {cart.length} </p>
        <p>Shipping Cost : {formatNumber(shippingCost)}</p>
        <p>Total Product Price : {formatNumber(totalProductPrice)}</p>
        <p><small>Tax + VAT : {formatNumber(tax)}</small> </p>
        <h3>Grand Total: {formatNumber(grandTotal)}</h3>    
      </div>
    );
}

export default Cart
