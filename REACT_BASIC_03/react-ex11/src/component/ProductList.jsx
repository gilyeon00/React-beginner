import React from 'react';
import ProductItem from './ProductItem';
import {useState, useEffect} from 'react';
import './productList.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    
    const getProductData= async() => {
        const res = await fetch('/data/productList.json');
        const result = res.json()
        setProducts(result.ProductList)
    }

    // API는 useEffect로 선언하는게 좋음 - 한 번만 부르기 때문
    useEffect( () => {
        getProductData();
    }, [] )

    return (
        <ProductItem/>
    );
};

export default ProductList;