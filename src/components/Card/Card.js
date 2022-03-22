import React from 'react';

const Card = ({ cart }) => {
    return (
        <div>
            <h3>Selected Items:{cart.length}</h3>
            <p>Total Price:</p>
        </div>
    );
};

export default Card;