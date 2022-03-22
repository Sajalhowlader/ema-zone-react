import React, { useEffect, useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import './Products.css'
// import '../../fakeData/products.json'
const Products = () => {
    const [porducts, setProducts] = useState([]);
    const [cart, setCurt] = useState([0])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    const showCart = (product) => {
        setCurt([...cart, product])
    }
    return (
        <div className='products-container'>
            <div className='products-left'>
                <h1 className='product-title'>This Is For You</h1>
                <div className="devide-product">
                    {
                        porducts.map(product => <DisplayProducts product={product} key={product.id} showCart={showCart}></DisplayProducts>)
                    }
                </div>
            </div>
            <div className='products-right'>
                <h1 className='product-title tow'>your cart</h1>
                <h3>Selected Items:{count}</h3>
                <p>Total Price:</p>
            </div>
        </div>
    );
};

export default Products;