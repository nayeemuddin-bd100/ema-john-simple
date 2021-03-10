import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
    return (
      <div className="header">
        <img src={logo} alt="logo" />
        <nav>
          <a href="/shop">Shop</a>
          <a href="/order-review">Order Review</a>
          <a href="manage">Manage Inventory</a>
        </nav>
      </div>
    );
}

export default Header
