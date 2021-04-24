import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { shareContext } from '../../App';
import Cart from '../Cart/Cart';
import ReviewProduct from './ReviewProduct';

function Review() {
  const [cart, setCart] = useContext(shareContext);
  const history = useHistory()
  const handleRemove = (id) => {
    const filterData = cart.filter(pd => pd.id !== id)
    setCart(filterData)
  }  

  const handleProceedCheckOut = () => {
    history.push('/shipment')

  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((pd) => {
          return <ReviewProduct product={pd} handleRemove={handleRemove} />;
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart} showReviewBtn={false} />
        <button className="main-btn" onClick={handleProceedCheckOut}>
          Proceed Checkout
        </button>
      </div>
    </div>
  );
}

export default Review
