"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testomonial.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import { Sideward, Upward } from '@/Framer';
import { motion } from "framer-motion"

export default function Testomonial() {
    const arr = [1, 2, 3, 4]
    return (
        <div id='Testomonial'>
            <motion.p {...Upward} className="feat-sub">Testomonial</motion.p>

            <motion.p {...Sideward} className='slider-para'>What Our Customer Say About Us?</motion.p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {arr.map((item, i) => (
                    <SwiperSlide key={i}><Slide /></SwiperSlide>

                ))}

            </Swiper>
        </div>
    );
}
