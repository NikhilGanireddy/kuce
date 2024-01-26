import Image from "next/image";
import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";

const Page = () => {
    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col justify-center w-full gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Principal
            </h1>
            <div className={`flex flex-col items-center w-full gap-12`}>
                <Image src={`http://www.kuce.ac.in/images/tj.jpg`} alt={"Principal"} width={572} height={799}
                       className={`lg:h-1/2 lg:w-auto w-full h-full object-cover object-center rounded-xl `}/>
                <Table className={`w-full lg:w-1/2 mx-auto `}>
                    <TableBody>
                        <TableRow className={`border-none`}>
                            <TableCell className="font-medium">Designation</TableCell>
                            <TableCell className="font-medium">:</TableCell>
                            <TableCell className={`text-`}>Associate Pro­fes­sor of Electrical and Electronics
                                Engineering.</TableCell>
                        </TableRow>
                        <TableRow className={`border-none`}>
                            <TableCell className="font-medium">Department</TableCell>
                            <TableCell className="font-medium">:</TableCell>
                            <TableCell className={`text-`}>EEE</TableCell>
                        </TableRow>
                        <TableRow className={`border-none`}>
                            <TableCell className="font-medium">Qualification</TableCell>
                            <TableCell className="font-medium">:</TableCell>
                            <TableCell className={`text-`}> B.Tech, M.Tech, Ph.D.</TableCell>
                        </TableRow>
                        <TableRow className={`border-none`}>
                            <TableCell className="font-medium">Years of Experience</TableCell>
                            <TableCell className="font-medium">:</TableCell>
                            <TableCell className={`text-`}>13 Years</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </div>
    </div>
}

export default Page
