import React from 'react';
import './productItem.css'

const ProductItem = ({item}) => {
    return (
        <div className='product-item'>
            <img 
                src = {item.product_img}
                alt = "product"
                className='item-img'/>
                <div className='item-name'>{item.product_name}</div>
                <div className='item-price'>{item.price}</div>
                <button className='add-cart-btn'> 
                    <i class="fa-solid fa-plus"></i>
                    장바구니에 담기 </button>
        </div>
    );
};

export default ProductItem;