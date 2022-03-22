import React from 'react';
import logo from '../../images/Logo.svg'
import './Menubar.css'
const Menubar = () => {
    return (
        <nav className='nav-container'>
            <div className="info-container">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/cart">Cart</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;