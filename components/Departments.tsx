import React from "react";
import Image from "next/image";
import cse from "../public/cse.jpg"
import mining from "../public/Mining.jpg"
import eee from "../public/eee.jpg"
import ece from "../public/ece.jpg"
import it from "../public/it.jpg"


const Departments = () => {

    return <main className={`container flex flex-col justify-center items-center py-16 gap-12`}>

        <h1 className={`text-3xl font-medium text-red-600`}>Departments</h1>
        <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-6 w-full`}>
            <div className={`rounded-2xl overflow-hidden relative min-h-[150px]`}>
                <Image src={cse} alt={"cse"} width={100} height={100}
                       className={`object-fill object-center w-full h-full`}/>
                <span
                    className={`absolute bottom-0 z-20 w-full bg-white/20 backdrop-blur-md text-center py-2 text-white font-bold text-lg`}>CSE</span>
            </div>
            <div className={`rounded-2xl overflow-hidden relative min-h-[150px]`}>
                <Image src={mining} alt={"cse"} width={100} height={100}
                       className={`object-fill object-center w-full h-full`}/>
                <span
                    className={`absolute bottom-0 z-20 w-full bg-white/20 backdrop-blur-md text-center py-2 text-white font-bold text-lg`}>MINING</span>
            </div>
            <div className={`rounded-2xl overflow-hidden relative min-h-[150px]`}>
                <Image src={eee} alt={"cse"} width={100} height={100}
                       className={`object-fill object-center w-full h-full`}/>
                <span
                    className={`absolute bottom-0 z-20 w-full bg-white/20 backdrop-blur-md text-center py-2 text-white font-bold text-lg`}>EEE</span>
            </div>
            <div className={`rounded-2xl overflow-hidden relative min-h-[150px]`}>
                <Image src={ece} alt={"cse"} width={100} height={100}
                       className={` object-fill object-center w-full h-full`}/>
                <span
                    className={`absolute bottom-0 z-20 w-full bg-white/20 backdrop-blur-md text-center py-2 text-white font-bold text-lg`}>ECE</span>
            </div>
            <div className={`rounded-2xl overflow-hidden relative min-h-[150px]`}>
                <Image src={it} alt={"cse"} width={100} height={100}
                       className={`object-fill object-center w-full h-full`}/>
                <span
                    className={`absolute bottom-0 z-20 w-full bg-white/20 backdrop-blur-md text-center py-2 text-white font-bold text-lg`}>IT</span>
            </div>
        </div>
    </main>
}

export default Departments
