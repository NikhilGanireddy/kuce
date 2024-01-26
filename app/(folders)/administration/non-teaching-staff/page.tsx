import {nonTeachingStaffMembers} from "@/app/(folders)/administration/non-teaching-staff/index";

const Page = () => {
    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col items-center w-full gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Non Teaching Staff
            </h1>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
                {nonTeachingStaffMembers.map((staff) => <div key={staff.id} className={`flex flex-col p-4 border rounded-2xl hover:shadow-md transition-all duration-200`}>
                    <p className={`font-semibold text-red-600`}>{staff.name}</p>
                    <p>{staff.post}</p>
                    <p>{staff.mobile}</p>
                    <p>{staff.email}</p>

                </div>)}
            </div>


        </div>
    </div>
}

export default Page
