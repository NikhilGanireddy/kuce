"use client"
import NavigationBar from "@/components/NavigationBar";
import {useEffect, useState} from "react";
import Image from "next/image";
import kuLogo from "../public/kuLogo-removebg-preview.png"
import Link from "next/link";
import MobileNavigation from "@/components/MobileNavigation";

const Header = () => {
    const names = ['University College Of Engineering, KU', 'యూనివర్సిటీ కాలేజ్ ఆఫ్ ఇంజనీరింగ్, కెయు']
    const [OpenMenu, setOpenMenu] = useState(false)
    console.log(OpenMenu)
    useEffect(() => {
        setOpenMenu(true)
    }, []);

    function MyComponent() {
        const [currentName, setCurrentName] = useState(names[0]);

        function setRandomName() {
            const index = Math.floor(Math.random() * names.length);
            let newName = names[index]
            if (newName == currentName) {
                setRandomName()
            } else {
                setCurrentName(newName)
            }
        }

        useEffect(() => {
            setTimeout(() => {
                setRandomName()
            }, 3000);
        }, [currentName])

        return currentName
    }

    return <main
        className={`relative h-full w-full z-40`}>
        <div
            className={`w-full fixed flex items-center flex-col top-0 z-10 bg-transparent backdrop-blur-2xl py-4 text-black gap-y-6`}>
            <div className={`w-full container flex justify-between items-center `}>
                <Link href={"/"} className={`flex justify-center items-center gap-2`}>
                    <Image src={kuLogo} alt={"KULOGO"} height={100} width={100}
                           className={` w-16 h-16 object-center object-cover`}/>
                    <h1 className={`text-lg font-semibold lg:text-2xl lg:font-bold hidden md:flex`}>{MyComponent()}</h1>
                    <h1 className={`text-lg font-semibold lg:text-2xl lg:font-bold md:hidden flex`}>UCE KU</h1>

                </Link>

                <Link href={`https://maps.app.goo.gl/tCtSTVdgKzoMT5p47`} target={"_blank"}
                      className={` justify-center items-center gap-1 hidden md:flex`}>
                    <div className={` text-xs`}>
                        <h1>University College of Engineering, KU</h1>
                        <h2>Kothagudem, Telangana - 507118, India</h2>
                    </div>
                    {locationIcon()}
                </Link>
                <MobileNavigation/>
            </div>
            <NavigationBar/>
        </div>

    </main>
}

export default Header

const locationIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
    </svg>

}
