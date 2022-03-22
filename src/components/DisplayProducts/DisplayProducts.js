import React from 'react';
import './DisplayProducts.css'
const DisplayProducts = ({ showCart, product }) => {

    // console.log(props)
    const { name, seller, price, img, ratings, } = product

    return (
        <div >
            <div className='product-container'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h3>{name}</h3>
                    <h3>Price: ${price}</h3>
                    <h3>Seller: {seller}</h3>
                    <p>Retting:{ratings}</p>
                </div>
                <button onClick={() => showCart(product)} className='cart-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default DisplayProducts;