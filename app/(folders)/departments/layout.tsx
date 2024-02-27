import type {Metadata} from "next";
import Providers from "@/app/providers";
import {Inter} from "next/font/google";
import Header from "@/components/Header";
import QuickLinks from "@/components/QuickLinks";
import SwiperBar from "@/components/Swiper";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Departments - KUCE', description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="en">

    <body className={inter.className}>
    <Providers>
        <div className={`flex flex-col min-h-screen`}>
            <Header/>
            <SwiperBar/>
            <div className={` flex-1 h-full container`}>
                {children}
            </div>
            <QuickLinks/>
        </div>
    </Providers>
    </body>
    </html>)
}
