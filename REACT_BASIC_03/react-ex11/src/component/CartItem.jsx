import React from 'react';

const CartItem = () => {
    return (
        <div className='cart-item'>
            <img src= "" alt="cart-item" className='cart-item-img'> </img>
        <span className='cart-item-name'></span>
        <span className='cart-item-price'></span>
        <i class="fa-solid fa-trash-xmark"></i>
        </div>
    );
};

export default CartItem;