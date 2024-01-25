"use client"
import {useEffect, useState} from "react";
import {vissionMissionList} from "@/app/(folders)/about/vision-mission/index";

const Page = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col justify-center  gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Vision
            </h1>
            <p>
                The Vision of the Insti­tute is to gen­er­ate and prop­a­gate knowl­edge through a pleas­ant blend­ing
                of Engi­neer­ing and Tech­nol­ogy. To serve the soci­ety by devel­op­ing a mod­ern tech­nol­ogy in
                stu­dents’ finely tuned intel­lec­tual, cul­tural, eth­i­cal and humane sen­si­tiv­i­ties, encour­ag­ing
                a sci­en­tific tem­per and pro­mot­ing pro­fes­sional and tech­no­log­i­cal exper­tise.
            </p>

        </div>
        <div className={`flex flex-col justify-center gap-12 w-full`}>
            <h1 className={` text-3xl font-medium text-red-600`}>
                Mission
            </h1>
            <ul className={`flex flex-col justify-between items-start gap-4 ml-4`}>
                {vissionMissionList.map((list, index) => <li key={index} className={` list-disc`}>{list}</li>)}
            </ul>


        </div>
    </div>
}

export default Page
