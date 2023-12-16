"use client"
import React from "react";

import SwiperBar from "@/components/Swiper";
import Header from "@/components/Header";
// import ImportantAnnouncements from "@/components/ImportantAnnouncements";
import BulletienBoard from "@/components/BulletienBoard";
import Departments from "@/components/Departments";
import Welcome from "@/components/Welcome";
import Administration from "@/components/Administration";

export default function App() {

    return (<main className={``}>
        <Header/>
        <SwiperBar/>
        <Welcome/>
        <Administration/>
        <Departments/>
        {/*<ImportantAnnouncements/>*/}
        <BulletienBoard/>
    </main>);
}
