import React from 'react';
import './areaSearch.css'
import Geocode from 'react-geocode'
import { useState } from 'react';
import { useEffect } from 'react';

const AreaSearch = ({setAreaInfo}) => {
    useEffect( ()=>  {
        Geocode.setApiKey("AIzaSyDtFLP1-RYl97Is_NBhxrm17c5TnFQ33Bk")
    },[])

    const [inputValue, setInputValue] = useState('');

    const searchAddress = async(address) => {
        try{
            const response = await Geocode.fromAddress(address);
            if(response.result.length){
                // response.result의 길이가 존재할 때 -> 잘 받아왔을때
                    const {lat, lng} = response.result[0].geometry.location;
                    setAreaInfo({lat:lat, lon:lng})
            }
        }catch(err){
            console.error(err)
        }
    }

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        searchAddress([inputValue])
    }

    return (
        <div className='searchContainer'>
            <h1>원하는 도시의 날씨를 검색해보세요</h1>
            <form className='searchForm' onSubmit={onSubmit}>
                <input
                    type="text"
                    autoFocus
                    onChange={onChangeInput}
                    ></input>
                <button>검색</button>
        
            </form>
        </div>
    );
};

export default AreaSearch;