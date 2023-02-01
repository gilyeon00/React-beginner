import React from 'react';
import { useState } from 'react';
import {BsFillSuitHeartFill} from "react-icons/bs"
import './card.css'

const Carditem = ({card}) => {

    const favListColor = [ {color:'#ddd'}, {color:'#F20'} ]
    const [fav, setFav] = useState(0);
    const [checkState, setCheckState] = useState('');
    const fncFav = (event) => {
        setFav( (fav === 0) ? 1 : 0)
        setCheckState(event.target.checked)      // e.target은 이벤트가 일어난 타겟, data-checked에서 data는 빼고 뒤에만 사용
    }


    return (
        <li className='card'>
            <div className='img-set'>
                <dl>
                    <dt>{card.title}</dt>
                    <img src={card.imgUrl} alt={card.title} />
                    <dd>{card.content}</dd>
                </dl>

            </div>
            <div className='btns'>
                <input 
                    type='checkbox'
                    id = {card.checkName}
                    name = {card.checkName}
                    className = "blind" 
                    data-checked = {checkState}
                    // data-(내맘대로) = (데이터)
                    onChange={fncFav}
                />

                <label
                    htmlFor={card.checkName}
                > 좋아요 <BsFillSuitHeartFill style = {favListColor[fav]}/> </label>
                {/* 레이블, htmlFor을 설정하면 checkbox를 선택하지 않고 글자 선택해도 유효함 */}

                

            </div>
        </li>
    );
};

export default Carditem;