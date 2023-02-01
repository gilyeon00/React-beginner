import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import styled from 'styled-components'
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {

    const pagination = {

    }
    return (
        <BannerSlider>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}

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
                <SwiperSlide><img src ="./img/slide/slide01.png" alt=""/></SwiperSlide>
                <SwiperSlide><img src ="./img/slide/slide02.png" alt=""/></SwiperSlide>
                <SwiperSlide><img src ="./img/slide/slide03.png" alt=""/></SwiperSlide>
                <SwiperSlide><img src ="./img/slide/slide04.png" alt=""/></SwiperSlide>
                <SwiperSlide><img src ="./img/slide/slide05.png" alt=""/></SwiperSlide>
            </Swiper>
        </BannerSlider>
    );
};

export default Banner;

const BannerSlider = styled.div`
    width: 1200px;
    margin: 1rm auto;   
`