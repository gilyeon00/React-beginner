import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import styled from 'styled-components'

const CanSlider = () => {
    return (
        <CanSliderBox>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
            <SwiperSlide><img src ="./img/slide/can1.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can2.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can3.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can4.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can5.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can6.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can7.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can8.jpg" alt=""/></SwiperSlide>

     
    </Swiper>
        </CanSliderBox>
    );
};

export default CanSlider;

const CanSliderBox = styled.div `
    width: 1200px;
    height: auto;
    margin: 3rem auto;

    $ .swiper img{
        width: 150px;
    }
    
`