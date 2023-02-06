// import React from 'react';
// import ProductItem from './ProductItem';
// import {useState, useEffect} from 'react';
// import './productList.css'
// import counterSlice from '../store/counter/counterSlice';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     const getProductData= async() => {
//         const res = await fetch('/data/productList.json');
//         const result = await res.json()
//         setProducts(result.ProductList)
//     }

//     // API는 useEffect로 선언하는게 좋음 - 한 번만 부르기 때문
//     useEffect( () => {
//         getProductData();
//     }, [] )

//     return (
//         <div className='product-list'>
//             <h2 className='product-list-title'>상품 목록</h2>
//             <div className='product-item-container'>
//                 {
//                     products && products.map(item => {
//                         return <ProductItem key={item.id} item={item} />
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default ProductList;


import React from 'react';
import "./css/productList.css";
import {useState, useEffect } from "react";
import ProductItem from "./ProductItem"
import counterSlice from '../store/counter/counterSlice';

const ProductList= () => {
    const [products, setProducts] = useState([]);
    const getProductData = async() => {
        const res = await fetch("/data/productList.json");
        const result = await res.json();
        setProducts(result.productList)
    }
    useEffect(()=>{
        getProductData();
    },[])
    return (
        <div className="product-list">
             <h2 className="product-list-title">상품 목록</h2>
             <div className="product-item-container">
                {
                    products && products.map(item=>{
                        return <ProductItem key={item.id} item={item} />
                    })
                }
             </div>
        </div>


    )
}

export default ProductList;

