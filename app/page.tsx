"use client"
import React, {useEffect, useState} from "react";

import SwiperBar from "@/components/Swiper";
import Header from "@/components/Header";
import BulletienBoard from "@/components/BulletienBoard";
import Departments from "@/components/Departments";
import Welcome from "@/components/Welcome";
import Administration from "@/components/Administration";
import QuickLinks from "@/components/QuickLinks";

export default function App() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (<main className={``}>
        <Header/>
        <SwiperBar/>
        <Departments/>
        <Welcome/>
        <Administration/>
        <BulletienBoard/>
        <QuickLinks/>
    </main>);
}
