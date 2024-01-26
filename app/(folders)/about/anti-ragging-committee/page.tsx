import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {antiRaggingAdvisoryCommittee, antiRaggingSquad} from "@/app/(folders)/about/anti-ragging-committee/index";

const Page = () => {

    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col justify-center gap-12 w-full `}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Anti Ragging Committee
            </h1>
            <div className={`w-full flex flex-col gap-6 items-center `}>
                <h1 className={`text-red-600 font-medium text-lg`}>Anti Ragging Advisory Committee</h1>

                <Table className={`w-full lg:w-2/3 mx-auto `}>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">S.No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Designation</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {antiRaggingAdvisoryCommittee.map((advisory) => (<TableRow key={advisory.sNo}>
                            <TableCell className="font-medium">{advisory.sNo}</TableCell>
                            <TableCell>{advisory.name}</TableCell>
                            <TableCell>{advisory.designation}</TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table></div>
        </div>
        <div className={`flex flex-col justify-center gap-12 w-full `}>
            <div className={`w-full flex flex-col gap-6 items-center `}>
                <h1 className={`text-red-600 font-medium text-lg`}>Anti Ragging Squad</h1>

                <Table className={`w-full lg:w-2/3 mx-auto `}>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">S.No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Mobile</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {antiRaggingSquad.map((advisory) => (<TableRow key={advisory.sNo}>
                            <TableCell className="font-medium">{advisory.sNo}</TableCell>
                            <TableCell>{advisory.name}</TableCell>
                            <TableCell>{advisory.mobile}</TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table></div>
        </div>

    </div>
}

export default Page

