import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import './Products.css'
// import '../../fakeData/products.json'
const Products = () => {
    const [porducts, setProducts] = useState([]);
    const [cart, setCurt] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    const showCart = (items) => {

        const newcart = [...cart, items]
        console.log(newcart)
        setCurt(newcart)
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
                <div className='stay-position'>
                    <h1 className='product-title tow'>your cart</h1>
                    <Card cart={cart}></Card>
                </div>
            </div>
        </div>
    );
};

export default Products;