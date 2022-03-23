import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import './Products.css'
// import '../../fakeData/products.json'
const Products = () => {
    const [porducts, setProducts] = useState([]);
    // console.log(porducts)
    const [cart, setCurt] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const savecart = []
        const storeCart = getStoredCart()
        for (const id in storeCart) {
            const addProduct = porducts.find(product => product.id === id)
            if (addProduct) {
                const quantity = storeCart[id]
                console.log(quantity)
                addProduct.quantity = quantity
                savecart.push(addProduct)
            }
        }
        setCurt(savecart)
    }, [porducts])

    // useEffect(() => {
    //     const storeCart = getStoredCart()
    //     for (const id in storeCart) {
    //         const addProduct = porducts.find(product => product.id = id)
    //         if (addProduct) {

    //         }

    //     }
    // }, [])


    const showCart = (items) => {
        let newCart = []
        const exists = cart.find(product => product.id === items.id)

        if (!exists) {
            items.quantity = 1
            newCart = [...cart, items]
        } else {
            const rest = cart.filter(product => product.id !== items.id);
            exists.quantity = exists + 1;
            newCart = [...rest, exists]
        }

        setCurt(newCart)
        addToDb(items.id)

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
                <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Products;