import React from 'react';
import { useEffect, useState } from 'react';
import Carditem from './Carditem';
import axios from 'axios';

const CardList = () => {
    const [cardData, setCardData] = useState([]);

    // 1. fetch 사용
    // fetch('http://localhost:3000/data/cardData.json')
    // .then(response => response.json)     // 성공할 경우 response를 json으로 변환
    // .then(data => setCardData(data))    // 성공할 경우 setCardData에 data 넣기
    // .catch(err => { console.log(err)})  

    // 2. axios 사용
    const dataURL = './data/cardData.json'
    useEffect( () => {      // 데이터는 렌더링 될때마다 불러오는게 아니라, 한 번만 불러오면 되니까 useEffect 사용
        ( async() => {
            const response = await axios.get(dataURL);  // 1. setCardData가 먼저 불리면 안되니까 await 붙여줌 -> async 즉시실행 함수가 있어야함
            // console.log(response);
            setCardData(response.data);

        }) ()
    }, [])
    

    return (
        <div>
             <h3 className='service-title'>Cardstargram</h3>
             <ul className='card-wrap'>
                {
                    cardData.map((item) => <Carditem key={item.id} card={item}/>)
                }
             </ul>
        </div>
    );
};

export default CardList;