// props 
// 상위 컴포넌트에서 하위 컴포넌트로만 전달 가능함
// NewsItem에서 데이터를 받으면 그걸 상위로 보낼 수 없음
// 따라서 상위에서 데이터를 갖고 있어야함

import React from 'react';
import './newsList.css'
import news from './../../data/newsData.json'
import NewsItem from './NewsItem';

const NewsList = () => {
    const newsData = news;

    return (
        <div>
            <ul className='news-list'>
                {
                    newsData.map(news => {
                        return (
                            <NewsItem topic={news.title} info={news.info} img={news.imgSrc} 
                                key={news.id}/>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default NewsList;