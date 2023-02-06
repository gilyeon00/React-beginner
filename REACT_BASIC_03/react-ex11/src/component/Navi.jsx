import React from 'react';
import './navi.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navi = () => {
    const cart = useSelector(state => state.cart)

    return (
        <nav className="navi">
            <h1><Link to = '/'>SHOP</Link></h1>
            <span>
                <Link to = '/cart'>
                    <i className="fas fa-shopping-cart">
                    <div className='cart-amount'>{cart.length}</div>
                    </i>
                </Link>
            </span>
            <span className='user'>
                {/* {
                    const user = 
                    user ? <span className='user'>로그아웃</span> : <span className='user'>로그인</span> 
                } */}
                <Link to = '/login'>로그인</Link>
            </span>
        </nav>
    );
};

export default Navi;