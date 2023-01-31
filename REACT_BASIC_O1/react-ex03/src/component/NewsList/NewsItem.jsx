import React from 'react';

const NewsItem = ({topic, info, img}) => {
    return (
        <li className='news-item'>
            <div className='item-img'>
                <img src={img} alt={topic}></img>
            </div>
            <div className='item-ifobox'>
                <span className='info-title'>{topic}</span>
                <span className='info-company'>{info}</span>
            </div>
        </li>
    );
};

export default NewsItem;