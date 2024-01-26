"use client"
import {Card, CardBody, Tab, Tabs} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = () => {
    let tabs = [{
        id: "2023 - 2024", label: "2023 - 2024", content: ["B.Tech- V,VI,VII,VIII Semesters-2023-24 AY"]
    }, {
        id: "2022 - 2023",
        label: "2022 - 2023",
        content: ["B.Tech- IV,V,VI,VII,VIII Semesters-2022-23 AY", "B.Tech- I&II Semesters-2022-23 AY"

        ]
    }, {
        id: "2021 - 2022", label: "2021 - 2022", content: ["B.Tech III,V & VII Semesters-2021-22 AY"]
    }, {
        id: "2020 - 2021",
        label: "2020 - 2021",
        content: ["B.Tech II,III & IV Year I&II Semesters-2020-21 AY", "B.Tech I,II,III & IV Year I&II Semesters-2020-21 AY"]
    }, {
        id: "2019 - 2020",
        label: "2019 - 2020",
        content: ["B.Tech II,III & IV Year I&II Semesters-2019-20 AY", "B.Tech III & IV(Mining) Year I&II Semesters-2019-20 AY", "B.Tech I Year I & II Semesters-2019-20 AY"]
    },];
    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col items-center w-full gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Academic calendar
            </h1>
            <div className={`flex flex-col items-center w-full gap-12`}>
                <Tabs aria-label="Dynamic tabs" disableAnimation={false} items={tabs}
                      classNames={{
                          tabList: "gap-0 min-w-full relative rounded-2xl mb-4 border py-2 flex flex-row items-center flex-grow flex-wrap shadow-lg",
                          cursor: "w-full ",
                          tab: "max-w-fit  ",
                          tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:bg-neutral-200 px-4 py-2 rounded-lg min-w-full"
                      }}
                >
                    {(item) => (<Tab key={item.id} title={item.label} className={`w-full`}>
                        <Card className={``}>
                            <CardBody className={"bg-neutral-200 rounded-2xl min-w-full py-4 px-8"}>
                                <ul className={` flex flex-col gap-4`}>
                                    {item.content.map((point) => <Link href={""}>
                                        <li className={`text-sm list-disc hover:underline underline-offset-4`}
                                            key={point}>
                                            {point}
                                        </li>
                                    </Link>)}
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>)}
                </Tabs>

            </div>

        </div>
    </div>
}

export default Page
