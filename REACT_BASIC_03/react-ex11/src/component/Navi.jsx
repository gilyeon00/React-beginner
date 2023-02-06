import React from 'react';
import './navi.css'
import { useSelector } from 'react-redux';

const Navi = () => {
    const cart = useSelector(state => state.cart)

    return (
        <nav className="navi">
            <span>SHOP</span>
            <span>
                <i className="fas fa-shopping-cart">
                <div className='cart-amount'>{cart.length}</div>
                </i>
            </span>
            <span className='user'>
                로그인
            </span>
        </nav>
    );
};

export default Navi;