import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
    // Object가 아닌 배열의 형태라 state.cart
    const cart = useSelector(state => state.cart);
    const CartItem = cart.lenght >= 1 ? 
        cart.map((item, idx) => { return <CartItem key={item.id} item={item} /> })  
        : <div className='cart-empty'>장바구니가 비어있습니다.</div>
        
    return (
        <div>
            <h2 className='cart-list-title'>장바구니</h2>
        </div>
    );
};

export default CartList;