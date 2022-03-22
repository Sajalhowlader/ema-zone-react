import React from 'react';
import './Card.css'
const Card = ({ cart }) => {
    let priceCart = 0;
    let shiping = 0;
    let tax = 0
    let total = 0
    for (const product of cart) {
        priceCart = priceCart + product.price
        shiping = shiping + product.shipping
        tax = (priceCart + shiping) * 5 / 100
        total = priceCart + shiping + tax
    }




    return (
        <div className='cart-container'>
            <h1 className='product-title tow'>your cart</h1>
            <h3>Selected Items:{cart.length}</h3>
            <p>Total Price:{priceCart}</p>
            <p>Total Shiping:{shiping}</p>
            <p>Total Tax:{tax}</p>
            <p>Grand Total:{total}</p>
        </div>
    );
};

export default Card;