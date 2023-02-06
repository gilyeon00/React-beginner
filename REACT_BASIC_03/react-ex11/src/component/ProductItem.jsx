import React from 'react';
import './productItem.css'

const ProductItem = () => {
    return (
        <div className='product-item'>
            <img 
                src = ""
                alt = "product"
                className='item-img'/>
                <div className='item-name'>상품이름</div>
                <div className='item-price'>가격</div>
                <button className='add-cart-btn'> <i class="fa-solid fa-plus"></i>장바구니에 담기 </button>
        </div>
    );
};

export default ProductItem;