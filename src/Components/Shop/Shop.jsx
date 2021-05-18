/* eslint no-unused-vars: "error" */
// eslint-disable-next-line no-unused-vars
/* global some_unused_var */
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <li>{product.name}</li>
                ))}
            </div>
            <div className="card-container">
                <h3>this is a card</h3>
            </div>
        </div>
    );
};

export default Shop;
