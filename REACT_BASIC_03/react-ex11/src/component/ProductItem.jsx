import React from 'react';
import './css/productItem.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({item}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goToDetail = () => {
        navigate(`/product/${item.id}`)
    }

    return (
        <div className='product-item'>
            <div className='product-main' onClick={() => {goToDetail()}}>
            <img 
                src = {item.product_img}
                alt = "product"
                className='item-img'/>
            <div className='item-name'>{item.product_name}</div>
            <div className='item-price'>{item.price}</div>
            {/* 버튼 눌렀을 때 장바구니에 상품 정보를 보낼 디스패치가 필요 */}
            </div>
            <button className='add-cart-btn' onClick={()=> dispatch(addCart(item))}> 
                <i className="fas fa-shopping-cart"/></button>
        </div>
    );
};

export default ProductItem;