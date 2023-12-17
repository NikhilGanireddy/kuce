import Link from "next/link";
import {
    UilArrowCircleUp,
    UilCalendarAlt,
    UilCommentAltDots,
    UilCreditCard,
    UilGraduationCap,
    UilNotebooks,
    UilSuitcase
} from '@iconscout/react-unicons'

const QuickLinks = () => {
    return <main className={`container flex flex-col justify-center items-center py-12 gap-12`}>
        <h1 className={`text-3xl font-medium text-red-600`}>Quicklinks</h1>
        <div
            className={`lg:grid lg:grid-cols-6 flex justify-between items-center overflow-x-auto space-x-3 max-w-full  text-black p-4`}>
            <Link href={""}
                  className={` group   min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
                <UilCalendarAlt className={`w-16 h-16`}/>
                <h1 className={`text-sm text-center font-medium`}>Academic Calender</h1>
                <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
                    <UilArrowCircleUp className={`rotate-45`}/>
                </div>
            </Link>
            <Link href={""}
                  className={` group   min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
                <UilCreditCard className={`w-16 h-16`}/>
                <h1 className={`text-sm text-center font-medium`}>Online Payments</h1>
                <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
                    <UilArrowCircleUp className={`rotate-45`}/>
                </div>
            </Link>
            <Link href={""}
                  className={` group   min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
                <UilGraduationCap className={`w-16 h-16`}/>
                <h1 className={`text-sm text-center font-medium`}>Scholarships</h1>
                <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
                    <UilArrowCircleUp className={`rotate-45`}/>
                </div>
            </Link>
            <Link href={""}
                  className={` group  min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
                <UilNotebooks className={`w-16 h-16`}/>
                <h1 className={`text-sm text-center font-medium`}>B. Tech Programmes</h1>
                <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
                    <UilArrowCircleUp className={`rotate-45`}/>
                </div>
            </Link>
            <Link href={""}
                  className={` group  min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
                <UilSuitcase className={`w-16 h-16`}/>
                <h1 className={`text-sm text-center font-medium`}>Placements</h1>
                <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
                    <UilArrowCircleUp className={`rotate-45`}/>
                </div>
            </Link>
            <Link href={""}
                  className={`group  min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
                <UilCommentAltDots className={`w-16 h-16`}/>
                <h1 className={`text-sm text-center font-medium`}>Contact Us</h1>
                <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
                    <UilArrowCircleUp className={`rotate-45`}/>
                </div>
            </Link>
        </div>
    </main>
}

export default QuickLinks
