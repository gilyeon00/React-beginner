import React from 'react';
import './navi.css'
const Navi = () => {
    return (
        <nav className="navi">
            <span>SHOP</span>
            <span>
                <i class="fas fa-cart-shopping">
                <div className='cart-amount'>{}</div>
                </i>
            </span>
            <span className='user'>
                로그인
            </span>
        </nav>
    );
};

export default Navi;