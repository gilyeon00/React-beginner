// https://swiperjs.com/react
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import styled from 'styled-components'
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CanSlider = () => {
    return (
        <CanSliderBox>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}

                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction:false,
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev'
                }}
            >
            <SwiperSlide><img src ="./img/slide/can1.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can2.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can3.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can4.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can5.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can6.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can7.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src ="./img/slide/can8.jpg" alt=""/></SwiperSlide>
            <NaviPrev className="prev"/>
            <NaviNext className="next"/>

     
    </Swiper>
        </CanSliderBox>
    );
};

export default CanSlider;

const CanSliderBox = styled.div `
    width: 1200px;
    height: auto;
    margin: 3rem auto;
    $ .swiper-slide img{
        width: 150px;
    }
`

const NaviPrev=styled.button`
    background: url(./img/slide/prev.png) no-repeat center;
    width: 40px; height: 40px;
    position: absolute;
    top: 50%;
    let: 50px;
    transform: translateY(-50%);    // 본인 높이의 50% 위로 올라감
    z-index: 5000;
    border: none;
    
`

const NaviNext=styled(NaviPrev)`
    background: url(./img/slide/next.png) no-repeat center;
    left: auto;
    right: 50px;
`