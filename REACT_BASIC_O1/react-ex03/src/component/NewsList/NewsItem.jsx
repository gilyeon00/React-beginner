import React from 'react';

const NewsItem = (props) => {
    return (
        <li className='news-item'>
            <div className='item-img'>
                <img src={props.img} alt={props.topic}></img>
            </div>
            <div className='item-ifobox'>
                <span className='info-title'>{props.topic}</span>
                <span className='info-company'>{props.info}</span>
            </div>
        </li>
    );
};

export default NewsItem;