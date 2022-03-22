import React, { useEffect, useState } from 'react';
import './Products.css'
// import '../../fakeData/products.json'
const Products = () => {
    const [porducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1 className='product-title'>This Is For You</h1>
            <div>

            </div>
        </div>
    );
};

export default Products;