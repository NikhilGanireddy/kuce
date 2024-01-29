"use client"
import {Card, CardBody, Tab, Tabs} from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import {Table, TableBody, TableCell, TableHeader, TableRow} from "@/components/ui/table";


const Page = () => {

    let hostels = [{
        id: 1,
        label: "Boys Hostel (Old)",

        students: 200,
        dining: 1,
        tv: 1,
        kitchen: 1,
        image: "http://www.kuce.ac.in/images/hostels/boys%20old.jpeg",
        post: "Joint Director Boys Hostels",
        name: "Sri G Gopi Krishna",
        mobile: "9290799451"

    }, {
        id: 2,
        label: "AICTE Hostel (Boys)",

        students: 200,
        dining: 1,
        tv: 1,
        kitchen: 1,
        image: "http://www.kuce.ac.in/images/hostels/hostels.jpeg",
        post: "Joint Director Boys Hostels",
        name: "Sri G Gopi Krishna",
        mobile: "9290799451"

    }, {
        id: 3,
        label: "Boys Hostel (Old)",

        students: 150,
        dining: 1,
        tv: 1,
        kitchen: 1,
        image: "http://www.kuce.ac.in/images/hostels/girls.jpeg",
        post: "Joint Director Girls Hostels",
        name: "Dr. T Archana",
        mobile: "98493 16242"

    }, {
        id: 4, label: "Fees",

        key1: "Caution Deposit", value1: "6000.00", key2: "Hostel Admission Form Charges", value2: "100.00"

    },]

    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`w-full h-full flex flex-col gap-4 `}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Hostels
            </h1>
            <ul className={`list-disc gap-4 flex flex-col`}>
                <li className={`ml-4`}>The students joining the colleges of the University mostly opt to stay in the
                    hostels as most of the
                    students are from rural background.
                </li>
                <li className={`ml-4`}>All the hostels are provided with good boarding and lodging facilities.</li>
                <li className={`ml-4`}>The Hostel caution deposit fee for 1st year students is Rs. 6000/-
                    (Refundable).
                </li>
                <li className={`ml-4`}> The student can pay the Hostel fees through SBI E-Collect</li>

            </ul>
        </div>
        <div className={`flex flex-col items-center w-full gap-12`}>
            <div className={`flex flex-col items-center w-full gap-12`}>
                <Tabs aria-label="Dynamic tabs" disableAnimation={false} items={hostels}
                      classNames={{
                          tabList: "gap-0 min-w-full relative rounded-2xl mb-4 border py-2 flex flex-row items-center flex-grow flex-wrap shadow-lg",
                          cursor: "w-full ",
                          tab: "max-w-fit  ",
                          tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:bg-neutral-200 px-4 py-2 rounded-lg min-w-full"
                      }}
                >
                    {(item) => (<Tab key={item.id} title={item.label} className={`w-full`}>
                        <Card className={``}>
                            <CardBody
                                className={"bg-neutral-200 rounded-2xl min-w-full py-8 px-8 flex text-center flex-col gap-4"}>
                                {item.image && <Image
                                    className={`w-full object-center object-cover overflow-hidden rounded-2xl aspect-video`}
                                    src={`${item.image}`} alt={item.label} width={1600} height={900}/>}
                                {item.post && <h1 className={`mt-4`}>{item.post}</h1>}
                                {item.name && <h1>{item.name}</h1>}
                                {item.mobile && <h1>{item.mobile}</h1>}
                                {item.students && <Table className={`w-full lg:w-2/3 mx-auto text-start`}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">No. of students residing </TableCell>
                                            <TableCell>{item.students}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Dining Hall </TableCell>
                                            <TableCell>{item.dining}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Tv Hall </TableCell>
                                            <TableCell>{item.tv}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>}
                                {item.key1 && <Table className={`w-full lg:w-2/3 mx-auto text-start`}>
                                    <TableHeader>
                                        <TableRow>
                                            <TableCell className={`text-red-600 text-2xl`}>Particulars</TableCell>
                                            <TableCell className={`text-red-600 text-2xl`}>Amount</TableCell>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">{item.key1}</TableCell>
                                            <TableCell>{item.value1}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">{item.key2} </TableCell>
                                            <TableCell>{item.value2}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>}
                            </CardBody>
                        </Card>
                    </Tab>)}
                </Tabs>
            </div>
        </div>
        <div className={`w-full h-full flex flex-col gap-8 `}>
            <h1 className={`  text-start`}>
                Total Number of Boys and Girls residing in the hostels: 500
            </h1>
            <h1 className={`    text-start`}>
                Facilities provided in the Hostels:
            </h1>
            <ul className={`list-disc gap-4 flex flex-col -mt-4`}>
                <li className={`ml-4`}>Water coolers
                    Dispensary
                </li>
                <li className={`ml-4`}>Water coolers
                    Reading room : Magazines, newspapers, books on personality development
                </li>
                <li className={`ml-4`}>Water coolers
                    Indoor Sport facility : Chess, Table Tennis and Caroms
                </li>
                <li className={`ml-4`}>Water coolers
                    T.V.Room.
                </li>

            </ul>
        </div>
    </div>
}

export default Page
