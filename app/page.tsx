"use client"
import React from "react";

import SwiperBar from "@/components/Swiper";
import Header from "@/components/Header";
import BulletienBoard from "@/components/BulletienBoard";
import Departments from "@/components/Departments";
import Welcome from "@/components/Welcome";
import Administration from "@/components/Administration";
import QuickLinks from "@/components/QuickLinks";

export default function App() {

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
