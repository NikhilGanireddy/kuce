import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import Image from "next/image";


import goku from "../public/gokuu.png"
import cyber from "../public/cyber.jpg"

const SwiperBar = () => {
    return (<>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500, disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper swiper-pagination-disabled  w-full swiper-ios"
            >
                <SwiperSlide><Image src={goku} alt={"goku"} height={undefined} width={undefined}/></SwiperSlide>
                <SwiperSlide><Image src={cyber} alt={"cyber"} height={undefined} width={undefined}/></SwiperSlide>
            </Swiper>
        </>);
}
export default SwiperBar
