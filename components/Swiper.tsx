"use client"
import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import Image from "next/image";
import college from "../public/college.jpg"
import whitebeard from "../public/whitebeard.png"
// import goku from "../public/gokuu.png"
import pexels from "../public/pexels.jpg"

import {Button} from "@/components/ui/button";

const SwiperBar = () => {

    const [OpenMenu, setOpenMenu] = useState(false)
    console.log(OpenMenu)
    useEffect(() => {
        setOpenMenu(true)
    }, []);
    return (<>
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 5000, disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper swiper-pagination-disabled bg-black w-full swiper-ios min-h-screen "
        >
            <SwiperSlide className={`min-w-full min-h-full`}>
                <Image priority src={college} alt={"College"} height={2844} width={3794}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image priority src={whitebeard} alt={"goku"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image priority src={pexels} alt={"cyber"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
        </Swiper>
        <div
            className={` absolute top-1/2 left-1/2 z-20 -translate-x-1/2 flex flex-col gap-y-4 justify-center items-center w-full`}>
            <h1 className={` text-3xl font-bold text-white`}>Welcome to UCE, KU</h1>
            <a href={"#welcome"}>
                <Button
                    className={`w-max px-4 py-2 bg-white text-black hover:bg-[#CDCED1] hover:text-black transition-all`}>Know
                    more</Button>
            </a>
        </div>
    </>);
}
export default SwiperBar
