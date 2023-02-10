import React from 'react';
import './areaSearch.css'
import Geocode from 'react-geocode'
import { useState } from 'react';
import { useEffect } from 'react';

const AreaSearch = ({setAreaInfo}) => {
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API;

    useEffect( ()=>  {
        Geocode.setApiKey(GOOGLE_API_KEY)
    },[])

    const [inputValue, setInputValue] = useState('');

    const searchAddress = async(address) => {
        try{
            const response = await Geocode.fromAddress(address);
            // console.log(response.results[0])
            if(response.results.length){
                // response.result의 길이가 존재할 때 -> 잘 받아왔을때
                    const {lat, lng} = response.results[0].geometry.location;
                    setAreaInfo({lat:String(lat), lon:String(lng)})
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
        if(setAreaInfo !== undefined){
            setAreaInfo(undefined)
        }
        searchAddress(inputValue)
        setInputValue('');
    }

    return (
        <div className='searchContainer'>
            <h1>원하는 도시의 날씨를 검색해보세요</h1>
            <form className='searchForm' onSubmit={onSubmit}>
                <input
                    type="text"
                    autoFocus
                    value={inputValue}
                    onChange={onChangeInput}
                    ></input>
                <button>검색</button>
        
            </form>
        </div>
    );
};

export default AreaSearch;