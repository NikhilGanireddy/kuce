"use client"
import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import Image from "next/image";
// import goku from "../public/gokuu.png"
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";

const SwiperBar = () => {
    const pathName = usePathname()
    // console.log(pathName)
    const paths = pathName.split("/")
    // console.log(paths)

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
                <Image priority={true}
                       src={`http://kuce.ac.in/modules/mod_amazingslider_1/tmpl/images/Old%20Boys%20Hostel.JPG`}
                       alt={"College"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
            <SwiperSlide className={`min-w-full min-h-full`}>
                <Image priority={true} src={"http://kuce.ac.in/modules/mod_amazingslider_1/tmpl/images/ECE.jpg"}
                       alt={"College"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
            <SwiperSlide className={`min-w-full min-h-full`}>
                <Image priority={true} src={"http://kuce.ac.in/modules/mod_amazingslider_1/tmpl/images/cng.jpg"}
                       alt={"College"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>

            <SwiperSlide className={`min-w-full min-h-full`}>
                <Image priority={true} src={"http://kuce.ac.in/modules/mod_amazingslider_1/tmpl/images/EEE.jpg"}
                       alt={"College"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image priority={true}
                       src={"http://kuce.ac.in/modules/mod_amazingslider_1/tmpl/images/VLSI%20DESIGN%20HACKTHON.jpg"}
                       alt={"goku"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image priority={true} src={"http://kuce.ac.in/modules/mod_amazingslider_1/tmpl/images/Alumni.jpg"}
                       alt={"cyber"} height={undefined} width={undefined}
                       className={`h-screen object-cover object-center`}/>
            </SwiperSlide>
        </Swiper>
        <div
            className={`${pathName.length > 1 ? "hidden" : "block"} absolute top-1/2 left-1/2 z-20 -translate-x-1/2 flex flex-col gap-y-4 justify-center items-center w-full`}>
            <h1 className={` text-3xl font-bold text-white`}>Welcome to UCE, KU</h1>
            <a href={"#welcome"}>
                <Button
                    className={`w-max px-4 py-2 bg-white text-black hover:bg-[#CDCED1] hover:text-black transition-all`}>Know
                    more</Button>
            </a>
        </div>
        <div
            className={`${pathName.length > 1 ? "block" : "hidden"} absolute top-1/2 left-1/2 z-20 -translate-x-1/2 flex flex-col gap-y-4 justify-center items-center w-full`}>
            <h1 className={` text-3xl font-bold text-white capitalize`}>{paths[paths.length - 1]}</h1>
        </div>
    </>);
}
export default SwiperBar
