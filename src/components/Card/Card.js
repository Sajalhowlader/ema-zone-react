import React from 'react';
import './Card.css'
const Card = ({ cart }) => {
    let shiping = 0;
    let total = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        console.log(total)
        shiping = shiping + product.shipping
    }
    const tax = 10
    const grandTotal = total + shiping + tax




    return (
        <div className='cart-container'>
            <h1 className='product-title tow'>your cart</h1>
            <h3>Selected Items:{quantity}</h3>
            <p>Total Price:{total}</p>
            <p>Total Shiping:{shiping}</p>
            <p>Total Tax:{tax}</p>
            <p>Grand Total:{grandTotal}</p>
        </div>
    );
};

export default Card;