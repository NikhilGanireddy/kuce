"use client"
import {useEffect, useState} from "react";

const Page = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }


    return <div className={`flex flex-col justify-center items-center gap-12 py-4 lg:py-8 pb-12`}>Vision Mission</div>
}

export default Page
