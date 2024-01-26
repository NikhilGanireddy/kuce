import React from "react";

const Page = () => {

    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`w-full h-full flex flex-col gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Syllabus
            </h1>
            <ul className={`flex flex-col justify-between items-start gap-4 ml-4`}>
                <li className={`list-disc`}>B.Tech First Year Scheme</li>
                <li className={`list-disc`}>B.Tech Computer Science and Engineering Scheme</li>
                <li className={`list-disc`}>B.Tech Electronics and Communication Engineering</li>
                <li className={`list-disc`}>B.Tech Electrical and Electronics Engineering Scheme</li>
                <li className={`list-disc`}>B.Tech Information Technology Scheme</li>
                <li className={`list-disc`}> B.Tech Mining Engineering Scheme</li>
            </ul>
        </div>
    </div>
}

export default Page
