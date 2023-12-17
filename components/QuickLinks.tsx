// @ts-ignore

import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import Link from "next/link";
import AcademicCalenderIcon from "@/public/Icons/AcademicCalenderIcon";
import OnlinePaymentsIcon from "@/public/Icons/OnlinePaymentsIcon";
import ScholarshipsIcon from "@/public/Icons/ScholarshipsIcon";
import BTechProgrammesIcon from "@/public/Icons/BTechProgrammesIcon";
import PlacementsIcon from "@/public/Icons/PlacementsIcon";
import ContactUsIcon from "@/public/Icons/ContactUsIcon";

const QuickLinks = () => {

    const quickLinks = [{
        id: 1, href: "", icon: AcademicCalenderIcon, title: "Academic Calender"
    }, {
        id: 2, href: "", icon: OnlinePaymentsIcon, title: "Online Payments"
    }, {
        id: 3, href: "", icon: ScholarshipsIcon, title: "Scholarships"
    }, {
        id: 4, href: "", icon: BTechProgrammesIcon, title: "B. Tech Programmes"
    }, {
        id: 5, href: "", icon: PlacementsIcon, title: "Placements"
    }, {
        id: 6, href: "", icon: ContactUsIcon, title: "Contact Us"
    }]


    return <main className={`container w-full flex flex-col justify-center items-center py-12 gap-12`}>
        <h1 className={`text-3xl font-medium text-red-600`}>Quick links</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-2xl ">
            <div className="flex w-max gap-6 p-4 justify-center items-center">
                {quickLinks.map((link) => (<Link href={""} key={link.id}
                                                 className="shrink-0 w-48 h-48 rounded-2xl shadow-lg flex flex-col gap-4 justify-center items-center ">
                    <link.icon/>
                    <h1 className={`text-sm text-center font-semibold`}>{link.title}</h1>
                </Link>))}
            </div>
            <ScrollBar orientation="horizontal"/>
        </ScrollArea>
    </main>
}

export default QuickLinks


//
// <Link href={""}
// className={` group  min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
// <UilCalendarAlt className={`w-16 h-16`}/>
// <h1 className={`text-sm text-center font-medium`}>Academic AcademicCalenderIcon</h1>
// <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
//     <UilArrowCircleUp className={`rotate-45`}/>
// </div>
// </Link>
// <Link href={""}
//       className={` group   min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
//     <UilCreditCard className={`w-16 h-16`}/>
//     <h1 className={`text-sm text-center font-medium`}>Online Payments</h1>
//     <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
//         <UilArrowCircleUp className={`rotate-45`}/>
//     </div>
// </Link>
// <Link href={""}
//       className={` group   min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
//     <UilGraduationCap className={`w-16 h-16`}/>
//     <h1 className={`text-sm text-center font-medium`}>Scholarships</h1>
//     <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
//         <UilArrowCircleUp className={`rotate-45`}/>
//     </div>
// </Link>
// <Link href={""}
//       className={` group  min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
//     <UilNotebooks className={`w-16 h-16`}/>
//     <h1 className={`text-sm text-center font-medium`}>B. Tech Programmes</h1>
//     <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
//         <UilArrowCircleUp className={`rotate-45`}/>
//     </div>
// </Link>
// <Link href={""}
//       className={` group  min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
//     <UilSuitcase className={`w-16 h-16`}/>
//     <h1 className={`text-sm text-center font-medium`}>Placements</h1>
//     <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
//         <UilArrowCircleUp className={`rotate-45`}/>
//     </div>
// </Link>
// <Link href={""}
//       className={`group  min-w-[150px] min-h-[150px] relative flex justify-center items-center flex-col gap-4 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
//     <UilCommentAltDots className={`w-16 h-16`}/>
//     <h1 className={`text-sm text-center font-medium`}>Contact Us</h1>
//     <div className={`group-hover:flex z-20 hidden -top-2 -right-2 absolute`}>
//         <UilArrowCircleUp className={`rotate-45`}/>
//     </div>
// </Link>
