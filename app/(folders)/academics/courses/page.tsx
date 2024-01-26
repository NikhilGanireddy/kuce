import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {courses} from "@/app/(folders)/academics/courses/index";

const Page = () => {
    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col items-center w-full gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Courses
            </h1>
            <div className={`flex flex-col items-center w-full gap-12`}>
                <h1>KUCE offers 05 Undergraduate courses</h1>
                <Table className={`w-full lg:w-2/3 mx-auto `}>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Department</TableHead>
                            <TableHead className={`text-center`}>Duration</TableHead>
                            <TableHead className={`text-center`}>Year of Commencement </TableHead>
                            <TableHead className={`text-center`}>Sanctioned Intake*</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courses.map((course) => (<TableRow key={course.id}>
                            <TableCell className="font-medium">{course.name}</TableCell>
                            <TableCell className="text-center">{course.duration}</TableCell>
                            <TableCell className={`text-center`}>{course.commencement}</TableCell>
                            <TableCell className={`text-center`}>{course.intake}</TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table>
                <div className={`flex flex-col items-center w-full gap-4`}>
                    <h1>An Additional intake of 2 seats of SCCL Employees student is offered in all Branches</h1>
                    <h1>An additional intake of 10% of lateral entry students into 2nd year is offered in all
                        courses</h1>
                </div>
            </div>

        </div>
    </div>
}

export default Page
