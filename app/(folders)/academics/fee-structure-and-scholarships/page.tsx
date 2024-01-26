import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import React from "react";

const Page = () => {
    return <div className={`flex flex-col justify-center items- gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col items- w-full gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Fee Structure & Scholarships
            </h1>
            <div className={`flex flex-col items- w-full gap-12`}>
                <Table className={`w-full lg:w-2/3 mx- `}>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course</TableHead>
                            <TableHead className={`text-center`}>Year</TableHead>
                            <TableHead className={`text-center`}>Tuition Fee </TableHead>
                            <TableHead className={`text-center`}>NU Fee</TableHead>
                            <TableHead className={`text-center`}>Exam Fee</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">B.Tech (MIN/CSE/EEE) - Regular </TableCell>
                            <TableCell className="text-center">1st, 2nd, 3rd </TableCell>
                            <TableCell className="text-center">32500</TableCell>
                            <TableCell className={`text-center`}>2500</TableCell>
                            <TableCell className={`text-center`}>1100</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">B.Tech (MIN/CSE/EEE) - Regular </TableCell>
                            <TableCell className="text-center">4th </TableCell>
                            <TableCell className="text-center">18000</TableCell>
                            <TableCell className={`text-center`}>9770</TableCell>
                            <TableCell className={`text-center`}>1100</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">B.Tech (CSE/EEE/MIN/ECE/INF) - Self Finance</TableCell>
                            <TableCell className="text-center">1st, 2nd, 3rd </TableCell>
                            <TableCell className="text-center">66000 </TableCell>
                            <TableCell className={`text-center`}>4000</TableCell>
                            <TableCell className={`text-center`}>1100</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">B.Tech (ECE/INF) - Self Finance </TableCell>
                            <TableCell className="text-center">4th </TableCell>
                            <TableCell className="text-center">35000</TableCell>
                            <TableCell className={`text-center`}>9770</TableCell>
                            <TableCell className={`text-center`}>1100</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </div>
        <div className={`flex flex-col items- w-full gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Scholarships
            </h1>
            <ul className={`flex flex-col justify-between items-start w-full gap-4 ml-4`}>
                <li className={`list-disc`}>SC & ST Wel­fare Stu­dents whose annual Fam­ily income is Rs.2,00,000.00
                    (Two Lakhs) or below.
                </li>
                <li className={`list-disc`}>BC & EBC and Minor­ity Wel­fare Stu­dents who are belongs to rural area
                    fam­ily income should be Rs. 1,50,000.00 (One Lakh Fifty Thou­sand) or below.
                </li>
                <li className={`list-disc`}>BC & EBC and Minor­ity Wel­fare Stu­dents who are belongs to Urban area
                    fam­ily income should be Rs.2,00,000.00 (Two Lakhs) or below.
                </li>
                <li className={`list-disc`}>Dis­abled Wel­fare Stu­dents whose parental income is Rs.1,00,000.00 (One
                    lakh) or below.
                </li>
                <li className={`list-disc`}>Stu­dents whose atten­dance is 75% at the end of each quarter.</li>
            </ul>
        </div>
        <div className={`flex flex-col  w-full gap-4`}>
            <h1>For fresh scholarship <a href={`https://telanganaepass.cgg.gov.in/ErrorPageDisplay.do`}
                                         className={`text-red-600 underline underline-offset-4 capitalize`}>click
                here</a>
            </h1>
            <h1>For renewal scholarship <a href={`https://telanganaepass.cgg.gov.in/ErrorPageDisplay.do`}
                                           className={`text-red-600 underline underline-offset-4 capitalize`}>click
                here</a>
            </h1>

        </div>

    </div>
}

export default Page
