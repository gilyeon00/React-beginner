import React from 'react';
import { useDispatch } from 'react-redux';
import { delCart } from '../store/cart/cartSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div className='cart-item'>
            <img src= {item.product_img} alt="cart-item" className='cart-item-img'> </img>
        <span className='cart-item-name'>{item.product_name}</span>
        <span className='cart-item-price'>{item.price}</span>
        <i class="fa-solid fa-trash-xmark" onClick={()=>{dispatch(delCart(item))}} ></i>
        </div>
    );
};

export default CartItem;